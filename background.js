chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == 'updateOptions') {
    saveOptions(request.update, true);
  } else
  if (request.method == 'getOptions') {
    sendResponse(opts);
  }
});

var active = {};
var audioContext = new (window.AudioContext || window.webkitAudioContext)();

chrome.browserAction.onClicked.addListener(function(tab) {
  if (active[tab.id]) {
    stopCapturing(tab.id);
    return;
  }

  active[tab.id] = { stream: null, timer: null };

  /*var milkshakeScripts = [
    'Class', 'Shaker', 'Music', 'Renderer', 'Renderable', 'RenderItemMatcher', 'RenderItemMergeFunction', 'Variables',
    'MilkDropPreset', 'PerPixelMesh', 'PipelineContext', 'TimeKeeper', 'Presets'
  ];

  for (var i = 0; i < milkshakeScripts.length; i++) {
    chrome.tabs.executeScript(tab.id, {
      file: 'milkshake/' + milkshakeScripts[i] + '.js'
    });
  }*/

  chrome.tabs.executeScript(tab.id, {
    file: 'webvs/libs.min.js'
  });
  chrome.tabs.executeScript(tab.id, {
    file: 'webvs/webvs.js'
  });
  chrome.tabs.executeScript(tab.id, {
    file: 'webvs/presets.js'
  });

  chrome.tabs.executeScript(tab.id, {
    file: 'content-webvs.js'
  });

  chrome.tabCapture.capture({ audio: true }, function(stream) {
    if (stream) {
      active[tab.id].stream = stream;
      var mediaStream = audioContext.createMediaStreamSource(stream);
      mediaStream.connect(audioContext.destination);

      /*var processor = audioContext.createJavaScriptNode(512);
      processor.onaudioprocess = function(e) {
        var inputArrayL = e.inputBuffer.getChannelData(0);
        var inputArrayR = e.inputBuffer.getChannelData(1);    
        chrome.tabs.sendMessage(tab.id, { left: Array.prototype.slice.call(inputArrayL, 0), right: Array.prototype.slice.call(inputArrayR, 0) });
      }
      mediaStream.connect(processor);
      processor.connect(audioContext.createMediaStreamDestination());*/

      var analyser1 = audioContext.createAnalyser();
      analyser1.fftSize = 2048;
      analyser1.smoothingTimeConstant = 0;
      mediaStream.connect(analyser1);

      var analyser2 = audioContext.createAnalyser();
      analyser2.fftSize = 1024;
      analyser2.smoothingTimeConstant = 0;
      mediaStream.connect(analyser2);

      var waveform = new Uint8Array(analyser1.frequencyBinCount);
      var waveformF = new Array(analyser1.frequencyBinCount);
      var spectrum = new Uint8Array(analyser2.frequencyBinCount);
      var spectrumF = new Array(analyser2.frequencyBinCount);
      active[tab.id].timer = setInterval(function() {
        analyser1.getByteTimeDomainData(waveform);
        for (var i = 0; i < waveform.length; i++) {
          waveformF[i] = waveform[i] / 128.0 - 1.0;
        }
        analyser2.getByteFrequencyData(spectrum);
        for (var i = 0; i < spectrum.length; i++) {
          spectrumF[i] = spectrum[i] / 256.0;
        }
        chrome.tabs.sendMessage(tab.id, { waveform: waveformF, spectrum: spectrumF });
      }, 50);
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