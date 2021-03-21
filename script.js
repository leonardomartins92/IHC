function playAndPause() {
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("play");
  if (video.paused) {
    video.play();
    btn.style.background = "url('images/pause.png')";
  } else {
    video.pause();
    btn.style.background = "url('images/play.png')";
  }
}

function sound() {
    var video = document.getElementById("myVideo");
    var animation = document.getElementById("myAnimation");
    var btn = document.getElementById("sound");
    var btn2 = document.getElementById("sound2");
  if (video.muted) {
    video.muted = false;
    btn.style.background = "url('images/off.png')";
    animation.muted = true;
    btn2.style.background = "url('images/on2.png')";
  } else {
    video.muted = true;
    btn.style.background = "url('images/on.png')";
  }
}

function playAndPause2() {
  var animation = document.getElementById("myAnimation");
  var btn2 = document.getElementById("play2");

if (animation.paused) {
  animation.play();
  btn2.style.background = "url('images/pause2.png')";
} else {
  animation.pause();
  btn2.style.background = "url('images/play2.png')";
}
}

function sound2() {
  var animation = document.getElementById("myAnimation");
  var video = document.getElementById("myVideo");
  var btn2 = document.getElementById("sound2");
  var btn = document.getElementById("sound");

if (animation.muted) {
  animation.muted = false;
  btn2.style.background = "url('images/off2.png')";
  video.muted = true;
  btn.style.background = "url('images/on.png')";
} else {
  animation.muted = true;
  btn2.style.background = "url('images/on2.png')";
}
}
