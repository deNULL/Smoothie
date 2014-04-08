// Content scripts run in isolated world, we don't have access to any libraries
function ge(e) {
  return document.getElementById(e);
}
function geByClass(c, n) {
  return Array.prototype.slice.call((n || document).getElementsByClassName(c));
}
function geByClass1(c, n) {
  return (n || document).getElementsByClassName(c)[0];
}

var overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.left = 0;
overlay.style.top = 0;
overlay.style.right = 0;
overlay.style.bottom = 0;
overlay.style.background = 'rgba(0,0,0,0.9)';
overlay.style.zIndex = 2147483647;
overlay.innerHTML =
  '<canvas id="smoothie_canvas" width="' + window.innerWidth + '" height="' + window.innerHeight + '"></canvas>' +
  '<div>' +
  '</div>';
document.body.appendChild(overlay);


var canvas = ge('smoothie_canvas');
window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (webvs) {
    webvs.resetCanvas();
    webvs.start();
  }
}
//var ctx = canvas.getContext('2d');

chrome.runtime.onMessage.addListener(onMessage);

var threshold = 0.4;
var currentThreshold = threshold;
function onMessage(request, sender, sendResponse) {
  /*if (request.left && request.right && window.shaker) {
    //shaker.music.addPCM(request.left, request.right);
    /*ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = ctx.strokeStyle = '#fff';
    //if (tp) ct.beginPath();
    for (i = 0; i < request.freq.length; i++) {
      //if (tp)
      //  ct[i?'lineTo':'moveTo'](i/1.641,25 + (fd[i]-128)/5);
      //else
      ctx.fillRect(i * 5, 50 - request.freq[i] / 5, 4, request.freq[i] / 5);
    }
    //if (tp) ct.stroke();
  }*/
  if (request.waveform && request.spectrum && analyser) {
    analyser.waveform = request.waveform;
    analyser.spectrum = request.spectrum;

    var maxAmp = 0;
    for (var i = 0; i <= 10; i++) {
      maxAmp = Math.max(maxAmp, request.spectrum[i]);
    }
    if (maxAmp >= currentThreshold && maxAmp >= threshold) {
      currentThreshold = maxAmp;
      analyser.beat = true;
    } else {
      currentThreshold -= 0.01;
      //analyser.beat = false;
    }
  }
}

function stop() {
  document.body.removeChild(overlay);
  chrome.runtime.onMessage.removeListener(onMessage);
  window.onresize = null;
  clearInterval(shuffleTimer);
  if (webvs) {
    webvs.stop();
    webvs.rootComponent.destroy();
    webvs.copier.cleanup();
    webvs = false;
  }
}

var SmoothieAdapter = Webvs.defineClass(function() {
  this.beat = false;
}, Webvs.AnalyserAdapter, {
  isPlaying: function() {
    return true;
  },
  getWaveform: function() {
    return this.waveform || new Float32Array([0]);
  },
  getSpectrum: function() {
    return this.spectrum || new Float32Array([0]);
  }
});

var analyser = new SmoothieAdapter();

var webvs = new Webvs.Main({
  canvas: canvas,
  analyser: analyser,
  //showStat: true,

  onAfterUpdate: function() {
    analyser.beat = false; // We receive data less frequently than doing redraw, so without resetting beats we'll continue getting beat=true for multiple frames (till next packet of data arrives)
  }
});
webvs.loadPreset(allPresets[(Math.random()*allPresets.length)|0]);
webvs.start();

var shuffleTimer = setInterval(function() {
  if (webvs) {
    webvs.loadPreset(allPresets[(Math.random()*allPresets.length)|0]);
    webvs.start();
  }
}, 30000);