var textInput = document.getElementById('textInput');
var charCount = document.getElementById('char-count');
var wordCount = document.getElementById('word-count');
var whitespaceCount = document.getElementById('whitespace-count');
var linesCount = document.getElementById('lines-count');
var currSpeed = document.getElementById('curr-speed');
var fnlSpeed = document.getElementById('fnl-speed');
var timeLeft = document.getElementById('time-left');
var tryAgn = document.getElementById('tryAgn');
var free = document.getElementsByClassName('free-style')[0];
var real = document.getElementById('real');
var para = document.getElementById('para');
para.innerText =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
para = para.innerText;

var time = 60;
var click = 0;
textInput.addEventListener('input', function () {
  let inputText = textInput.value;
  charCountFn(inputText);
  wordCountFn(inputText);
  whitespaceCountFn(inputText);
  linesCountFn(inputText);
  console.log(inputText);

  if (para.indexOf(inputText) == 0) {
    document.querySelectorAll('h4')[0].style.display = 'none';
    document.querySelectorAll('h4')[1].style.display = 'block';
  } else {
    document.querySelectorAll('h4')[0].style.display = 'block';
    document.querySelectorAll('h4')[1].style.display = 'none';
  }
});

real.addEventListener('click', function () {
  document.getElementById('paragraph').style.display = 'block';
  document.getElementById('card-container').style.marginTop = '25vh';
  document.getElementsByClassName('bg-image')[0].style.height = '110vh';
});
free.addEventListener('click', function () {
  document.getElementById('paragraph').style.display = 'none';
  document.getElementById('card-container').style.marginTop = '45vh';
  document.getElementsByClassName('bg-image')[0].style.height = '100vh';
});
textInput.addEventListener('click', function () {
  if (click > 0) {
    return 0;
  }
  click++;
  if (time > 0) {
    var timeInterval = setInterval(() => {
      time--;
      if (time <= 0) clearInterval(timeInterval);
      SpeedFn(time);
      timeLeft.innerText = time + 's';
    }, 1000);
  }
});

function SpeedFn(time) {
  time = 60 - time;
  let inputText = textInput.value;
  let strLen = inputText.length;
  let speed = strLen / time;
  speed = speed.toFixed(2);
  currSpeed.innerText = speed + ' char/s';
  document.getElementById('curr').style.display = 'block';
  document.getElementById('final').style.display = 'none';
  tryAgn.style.display = 'none';
  if (time == 60) {
    if (document.getElementById('paragraph').style.display == 'block') {
      document.getElementById('final').style.display = 'block';
      tryAgn.style.display = 'block';
      fnlSpeed.innerText = 'FAILED';
      document.getElementById('curr').style.display = 'none';
    } else {
      document.getElementById('final').style.display = 'block';
      tryAgn.style.display = 'block';
      fnlSpeed.innerText = speed + ' char/s';
      document.getElementById('curr').style.display = 'none';
    }
  }
}
tryAgn.addEventListener('click', function () {
  click = 0;
  time = 60;
  timeLeft.innerText = time + 's';
  textInput.value = '';
  currSpeed.innerText = '0.00 char/s';
  fnlSpeed.innerText = '0.00 char/s';
  charCount.innerText = '0';
  wordCount.innerText = '0';
  whitespaceCount.innerText = '0';
  linesCount.innerText = '0';
  document.querySelectorAll('h4')[0].style.display = 'none';
  document.querySelectorAll('h4')[1].style.display = 'none';
  tryAgn.style.display = 'none';
});

function charCountFn(inputText) {
  let strLen = inputText.length;
  charCount.innerText = strLen;
}

function wordCountFn(inputText) {
  let count = 0;
  for (let i = 0; i < inputText.length; i++) {
    if (
      inputText[i] != null &&
      inputText[i] != undefined &&
      inputText[i] != ' ' &&
      inputText[i] != '\n'
    ) {
      count++;
      for (let j = i; j < inputText.length; j++) {
        if (
          inputText[i] != null &&
          inputText[i] != undefined &&
          inputText[i] != ' ' &&
          inputText[i] != '\n'
        ) {
          i++;
        } else break;
      }
    }
  }
  wordCount.innerText = count;
}

function whitespaceCountFn(inputText) {
  let count = 0;
  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] == ' ') {
      count++;
    }
  }
  whitespaceCount.innerText = count;
}

function linesCountFn(inputText) {
  let count = 1;
  if (inputText.length == 0) count = 0;
  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] == '\n') count++;
  }
  linesCount.innerText = count;
}
