var generateBtn = $("#startq");
var genQues = $("h2");
var ansElem = $(".list-item");

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

//our array is done now we need to figure out how to randomly place the button with this answer.
function genGame() {
    genQues.text(question[0].quest);
  
   generateBtn.remove();

   var ansAElem = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  ansAElem.append(
    '<button class="btn btn-danger btn-small delete-item-btn">This is the button</button>'
  );
  ansElem.append(ansAElem);
  console.log(question[4].ans)

}
function endGame() {

}
generateBtn.click(genGame);