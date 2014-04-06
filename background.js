chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == 'updateOptions') {
    saveOptions(request.update, true);
  } else
  if (request.method == 'getOptions') {
    sendResponse(opts);
  }
});

var active = {};

chrome.browserAction.onClicked.addListener(function(tab) {
  if (active[tab.id]) {
    stopCapturing(tab.id);
    return;
  }

  active[tab.id] = { stream: null, timer: null };

  var milkshakeScripts = [
    'Class', 'Shaker', 'Music', 'Renderer', 'Renderable', 'RenderItemMatcher', 'RenderItemMergeFunction', 'Variables',
    'MilkDropPreset', 'PerPixelMesh', 'PipelineContext', 'TimeKeeper', 'Presets'
  ];

  for (var i = 0; i < milkshakeScripts.length; i++) {
    chrome.tabs.executeScript(tab.id, {
      file: 'milkshake/' + milkshakeScripts[i] + '.js'
    });
  }

  chrome.tabs.executeScript(tab.id, {
    file: 'content.js'
  });

  chrome.tabCapture.capture({ audio: true }, function(stream) {
    if (stream) {
      active[tab.id].stream = stream;

      var audioContext = new (window.AudioContext || window.webkitAudioContext)();
      var mediaStream = audioContext.createMediaStreamSource(stream);
      //mediaStream.connect(audioContext.destination);
      /*var analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.3;
      mediaStream.connect(analyser);*/

      var processor = audioContext.createJavaScriptNode(512);
      processor.onaudioprocess = function(e) {
        var inputArrayL = e.inputBuffer.getChannelData(0);
        var inputArrayR = e.inputBuffer.getChannelData(1);
        /*var outputArrayL = e.outputBuffer.getChannelData(0);
        var outputArrayR = e.outputBuffer.getChannelData(1);  
        var n = inputArrayL.length;
    
        for (var i = 0; i < n; ++i) {
          outputArrayL[i] = inputArrayL[i];
          outputArrayR[i] = inputArrayR[i];
        }*/
    
        chrome.tabs.sendMessage(tab.id, { left: Array.prototype.slice.call(inputArrayL, 0), right: Array.prototype.slice.call(inputArrayR, 0) });
      }
      mediaStream.connect(processor);
      processor.connect(audioContext.createMediaStreamDestination());
      mediaStream.connect(audioContext.destination);

      /*active[tab.id].timer = setInterval(function() {
        var data = new Uint8Array(analyser.frequencyBinCount);
        //an[tp?'getByteTimeDomainData':'getByteFrequencyData'](fd);
        analyser.getByteFrequencyData(data);

        chrome.tabs.sendMessage(tab.id, { freq: Array.prototype.slice.call(data, 0) }, function(response) {
          
        });
      }, 50);*/
    } else {
      alert('unable to get stream');
    }
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (active[tabId]) {
    stopCapturing(tabId);
  }
});

function stopCapturing(tabId) {
  chrome.tabs.executeScript(tabId, {
    code: 'stop();'
  });

  if (active[tabId].stream) {
    active[tabId].stream.stop();
    active[tabId].stream = null;
  }

  if (active[tabId].timer) {
    clearInterval(active[tabId].timer);
  }

  delete active[tabId];
}