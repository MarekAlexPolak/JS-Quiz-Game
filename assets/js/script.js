var generateBtn = document.querySelector("#startq");
var genQues = document.querySelector("#header");
var ansElem = document.querySelector(".list-item");
console.log(genQues);
//lets make an array of objects 

var question = [
    {
        quest: "This will be question 1",
        ans: "This is answer one"
    },
    {
        quest: "This will be question 2",
        ans: "This is answer 2"
    },
    {
        quest: "This will be question 3",
        ans: "This is answer 3"
    },
    {
        quest: "This will be question 4",
        ans: "This is answer 4"
    },
    {
        quest: "This will be question 5",
        ans: "This is answer 5"
    },
    {
        quest: "This will be question 6",
        ans: "This is answer 6"
    },
];
var savedQuest = [];

var wrongAns = [
    "random stuff",
    "array of",
    "more wrong",
    "another wrong",
    "still making",
    "i wonder",
    "apparently"

];
function chooseQuest(){
    var aNum = Math.floor(Math.random()*question.length);
    var x = question[aNum];
    savedQuest.push(question[aNum]);
    question.splice(aNum, 1);
    return x;
}

function genRandomAns(){
    
    for (let i = 0; i < 4; i++){
        var listitem1 = document.createElement("li");
        listitem1.setAttribute("type", "button");
        ansElem.appendChild(listitem1);    
    }
}
function changeButtons(){
    for (let i = 0; i < 4; i++){
        var aNum = Math.floor(Math.random()*4);
        ansElem.children[i].textContent = wrongAns[aNum];    
    }

}
function genCorrectAns(chosenQuest){

    var aNum = Math.floor(Math.random()*4);
    ansElem.children[aNum].textContent = chosenQuest;
    return ansElem.children[aNum].textContent;
    
}

function resetGame() {
    question = savedQuest;
    savedQuest = []; 

}
function genGame() {
    genRandomAns();
    playGame();
}

function playGame(){
    var chosenQuest = chooseQuest();
    genQues.textContent =chosenQuest.quest;
    changeButtons();
    genCorrectAns(chosenQuest.ans); 
    generateBtn.remove();
}
function endGame() {

}
generateBtn.addEventListener("click", genGame);
ansElem.addEventListener("click", playGame);