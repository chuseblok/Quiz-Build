var startButton = document.getElementById("start-button")
var question = document.getElementById("question");
var choice = document.getElementById("choice");
var timeEl = document.getElementById("time");
var timerEL = document.getElementById("timer-count"); 

var secondsLeft = 15;

console.log(startButton);
console.log(choice);

function buildCodeQuiz(){}

function showAnswer(){}

buildCodeQuiz();

startButton.addEventListener('click', showAnswer);







 function setTime() {
     var timerInterval = setInterval(function() {
         secondsLeft--;
         timeEl.textContent = secondsLeft + " ";

         if(secondsLeft === 0) {
             clearInterval(timerInterval);
             sendMessage();
         }
     }, 1500);
 }




