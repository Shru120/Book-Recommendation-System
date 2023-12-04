var quizData = [
    {
        question: "Who possesses the ring of power at the start of the trilogy?",
        A: "Gandalf",
        B: "Bilbo",
        C: "Frodo",
        D: "Sauron",
        answer: "optionB"
    },
    {
        question: "Who do the hobbits encounter at the Prancing Pony?",
        A: "Gandalf",
        B: " Legolas",
        C: "Strider",
        D: "Boromir",
        answer: "optionC"
    },
    {
        question: "How many members make up the fellowship of the ring?",
        A: "Seven",
        B: "Nine",
        C: "Eight",
        D: "Ten",
        answer: "optionB"
    },
    {
        question: "What is the name of the elf in the fellowship?",
        A: "Legolas",
        B: "Gimli",
        C: "Merry",
        D: "Boromir",
        answer: "optionA"
    },
    {
        question: "Who is the first member of the fellowship to be separated from the group?",
        A: "Boromir",
        B: "Legolas",
        C: "Gandalf",
        D: "Aragorn",
        answer: "optionC"
    },
    {
        question: "What animal does Gollum give to Frodo?",
        A: "A ferret",
        B: "A rabbit",
        C: "A mouse",
        D: "A fish",
        answer: "optionB"
    }
]

var quiz = document.getElementById("quiz");
var options = document.querySelectorAll(".options");
var question = document.getElementById("question");
var optionA = document.getElementById("optionAValue");
var optionB = document.getElementById("optionBValue");
var optionC = document.getElementById("optionCValue");
var optionD = document.getElementById("optionDValue");

var submitbtn = document.getElementById("submitbtn");

var currentQuestion = 0;
var QuizScore = 0;
var remarks;

loadQuiz();

function loadQuiz(){
    deselect();
    question.innerText = quizData[currentQuestion].question;
    optionA.innerText = quizData[currentQuestion].A;
    optionB.innerText = quizData[currentQuestion].B;
    optionC.innerText = quizData[currentQuestion].C;
    optionD.innerText = quizData[currentQuestion].D;
}

function deselect(){
    options.forEach(options=>options.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var selectedOption;

    options.forEach(options=>{
        if(options.checked){
            selectedOption = options.id;
        }
    })
    
    if(selectedOption == quizData[currentQuestion].answer ){
        QuizScore = QuizScore + 1;
    }
    currentQuestion = currentQuestion + 1;
    if(currentQuestion == quizData.length-1){
        submitbtn.innerText = "SUBMIT";
    }
    if(currentQuestion == quizData.length){
        if(QuizScore == 6){
            remarks = "Outstanding!";
        }
        else if(QuizScore == 5){
            remarks = "Excellent";
        }
        else if(QuizScore == 4){
            remarks = "Good";
        }
        else if(QuizScore == 3){
            remarks = "Average";
        }
        else{
            remarks = "Work Hard";
        }
        document.getElementById('quizdiv').innerHTML = `<h2 class="my-3">Your Score: ${QuizScore}/${quizData.length}</h2><h4>You have answered ${QuizScore} questions correctly out of ${quizData.length} questions.</h4> <h4 class="text-center my-3">Remarks: ${remarks}</h4>`
    }
    else{
        loadQuiz();
    }
})