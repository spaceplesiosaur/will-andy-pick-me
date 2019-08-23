// Random fortune generator

var fortunes = [
"It is certain.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."
]

// function logFortunes() {
//
//   console.log(fortunes[2])
//
// };

var answer = document.querySelector("#answer-text");
var callButton = document.querySelector("#getButton");
var questionText = document.querySelector("#question-text");
var questionField = document.querySelector("#question-field");
var eightballPic = document.querySelector("#eightball-picture");


function changeFortuneText() {
    var pickIndex = Math.floor(Math.random() * Math.floor(fortunes.length + 1));
    console.log(`check work ${pickIndex}`);
    answer.innerText = fortunes[pickIndex];
    questionText.innerText = questionField.value;
    eightballPic.classList.add("hidden");
    // question-field.innerText = "Ask your question here!";
};



callButton.addEventListener("click", changeFortuneText);
