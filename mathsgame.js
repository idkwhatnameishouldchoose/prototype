var questionNumber = 1;
   var randomNum = getRandomEquation(0, 13);
   var input = document.getElementById("answer-for-question");

   input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      nextQuestion();
    }
  });

 function nextQuestion(){

  var randomLetter = letters[Math.floor(Math.random() * letters.length)];
      var randomNum1 = getRandomEquation(0, 13);
      var randomNum2 = getRandomEquation(0, 13);
      var equation = randomNum1 + randomLetter + randomNum2;

      document.getElementById("question").setAttribute("data-save", equation);

      var result = eval(equation);

      document.getElementById("answer-for-question").value = "";

      if (result % 1 !== 0 && result.toString().split('.')[1].length >= 3) {
        result = result.toFixed(1);
      }

      var userAnswer = document.getElementById("answer-for-question").value;
      var errors = 0;

      if (userAnswer !== result.toString()) {
        errors++;
        console.log("errors");
      }

      document.getElementById("questionHeader").innerHTML = "Question " + questionNumber;
      document.getElementById("question").innerHTML = equation;

      if (questionNumber <= 19) {
        questionNumber++;
      } else {
        if (event.key === "Enter") {
          saveTimer();
        }
        location.href = "mathsgamefinish.html";
      }
    }

function saveTimer() {
  var now = new Date().getTime();

    var elapsedTimeInSeconds = Math.floor((now - startTime) / 1000);

    var hours = Math.floor(elapsedTimeInSeconds / 3600);
    var minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
    var seconds = elapsedTimeInSeconds % 60;

    var formattedTime =
        (hours < 10 ? "0" : "") + hours + " : " +
        (minutes < 10 ? "0" : "") + minutes + " : " +
        (seconds < 10 ? "0" : "") + seconds;

    timeIntervals.push(formattedTime);

    localStorage.setItem('savedIntervals', JSON.stringify(timeIntervals));
}
   
function getRandomEquation(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

var startTime = new Date().getTime();

var timeIntervals = []

var x = setInterval(function() {

var now = new Date().getTime();

var elapsedTimeInSeconds = Math.floor((now - startTime) / 1000);

var hours = Math.floor(elapsedTimeInSeconds / 3600)
var minutes = Math.floor((elapsedTimeInSeconds % 3600)/ 60);
var seconds = elapsedTimeInSeconds % 60;

var formattedTime = 
    (hours < 10 ? "0" : "") + hours + " : " +
    (minutes < 10 ? "0" : "") + minutes + " : " +
    (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("timer").innerHTML = formattedTime;

}, 1000);

var letters = [' + ', ' - ', ' X ', ' / '];

var randomLetter = letters[Math.floor(Math.random() * letters.length)];