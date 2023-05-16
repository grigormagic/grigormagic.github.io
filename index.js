let button = document.getElementById("button");
let textarea = document.getElementById("textarea");
let active;
const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = true;
reset();
recognition.onend = reset();

recognition.onresult = function (event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      textarea.value += event.results[i][0].transcript;
    }
  }
};

function reset() {
  active = false;
  button.innerHTML = "Click to Speak";
}

function StartStopBtn() {
  if (active) {
    recognition.stop();
    reset();
  } else {
    recognition.start();
    active = true;
    button.innerHTML = "Click to Stop";
  }
}

//button.addEventListener("click", StartStopBtn);
button.addEventListener("mousedown", StartStopBtn);
button.addEventListener("mouseup", StartStopBtn);
