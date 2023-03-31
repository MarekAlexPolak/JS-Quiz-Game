//Declare Variables
var generateBtn = document.querySelector("#startq");
var genQues = document.querySelector("#header");
var ansElem = document.querySelector(".list-item");
var gameCount = 0;
var allScores = [];
var curScore = 0;
var corAns = 0;
var userAns = '';
var theAns ='';
var timerElement = document.querySelector(".timer-count");
var timerCount = 0;
var timer = 0;
var names = [];
var question = [
    {
        quest: "What can store multiple objects?",
        ans: "Array"
    },
    {
        quest: "How can you loop through a set amount of times?",
        ans: "For Loop"
    },
    {
        quest: "How can you loop until a condition is met?",
        ans: "While Loop"
    },
    {
        quest: "What is an if statement called?",
        ans: "A conditional statement."
    },
    {
        quest: "How do you get information from html elements?",
        ans: "DOM"
    }
];
var savedQuest = [ 
    {
        quest: "What can store multiple objects?",
        ans: "Array"
    },
    {
        quest: "How can you loop through a set amount of times?",
        ans: "For Loop"
    },
    {
        quest: "How can you loop until a condition is met?",
        ans: "While Loop"
    },
    {
        quest: "What is an if statement called?",
        ans: "A conditional statement."
    },
    {
        quest: "How do you get information from html elements?",
        ans: "DOM"
    }
];

var wrongAns = [
    "Object Oriented",
    "Strings",
    "Boolean",
    "Where Loop",
    "Don't Pick This One",
    "Button",
    "Class"

];

//function to order scores from least to greatest
function orderScores(){
    allScores.push(curScore);
    allScores.sort(function(a,b){
        return b-a;
    });
 
}
//function to check if answer is correct, if it is add 1. If its wrong remove time from the clock.
function checkAns(j, z){ 
    if (j == z){
        corAns++;
    }
    else if (timerCount > 5){
        timerCount = timerCount - 5;
    }
    else {
        timerCount = 1;
    }


}

//function which randomly chooses a question.
function chooseQuest(){
    var aNum = Math.floor(Math.random()*question.length);
    var x = question[aNum];
    question.splice(aNum, 1);
    return x;
}
//function which generates the buttons for the answers
function genRandomAns(){
    
    for (let i = 0; i < 4; i++){
        var listitem1 = document.createElement("li");
        listitem1.setAttribute("type", "button");
        ansElem.appendChild(listitem1);  
        listitem1.addEventListener("click", playGame);  
    }
}
//function which changes the text on the generated buttons
function changeButtons(){
    for (let i = 0; i < 4; i++){
        var aNum = Math.floor(Math.random()*4);
        ansElem.children[i].textContent = wrongAns[aNum];    
    }

}
//function which generates the correct answer
function genCorrectAns(chosenQuest){

    var aNum = Math.floor(Math.random()*4);
    ansElem.children[aNum].textContent = chosenQuest;
    return ansElem.children[aNum].textContent;
    
    
}
//function which displays the scores at the end of the quiz

function displayScores(){

    for (let i = 0; i < allScores.length; i++){
        var highscores = document.createElement("li");
        highscores.setAttribute("class", "highscores");
        highscores.textContent=allScores[i];
        ansElem.appendChild(highscores);    
    }
}
//function which deletes the displayed highscores when the game is being reset.
function deleScores(){
    while (ansElem.firstChild){
        ansElem.removeChild(ansElem.lastChild);
    }
}
//function which generates the quiz
function genGame(event) {
    timerCount = 50;
    corAns = 0;
    deleScores();
    genRandomAns();
    playGame(event);
    startTime();
}
//function which runs the quiz and switches to the next question when the previous one is answered 
function playGame(event){
    userAns = event.target.textContent;
    checkAns(theAns, userAns);
    if (gameCount === savedQuest.length){
        endGame();
        return;
    }
    var chosenQuest = chooseQuest();
    genQues.textContent = chosenQuest.quest;
    changeButtons();
    genCorrectAns(chosenQuest.ans);
    theAns = chosenQuest.ans;
    generateBtn.disabled = true; 
    gameCount++;
}

//function which ends the game and removes the buttons.
function endGame() {
    while (ansElem.firstChild){
        ansElem.removeChild(ansElem.lastChild);
   }
   //var userName = prompt("please input your name");
    generateBtn.disabled = false;
    gameCount = 0;
    question = [];
    for (let m = 0; m < savedQuest.length; m++){
        question.push(savedQuest[m]);
    }
    curScore = (corAns/savedQuest.length)*100
    orderScores();
    userAns = '';
    displayScores();
    genQues.textContent = "Click Start to Begin the Quiz";
    timerCount = 1;
   
}


//function which starts the timer
function startTime() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      
      if (timerCount == 0) {
        clearInterval(timer);
        endGame(); 
      }
    }, 1000);
  }

generateBtn.addEventListener("click", genGame);