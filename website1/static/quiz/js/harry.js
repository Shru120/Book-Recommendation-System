var quizData = [
    {
        question: "In what house did the Sorting Hat almost put Harry?",
        A: "Slytherin",
        B: "Hufflepuff",
        C: "Ravenclaw",
        D: "Gryffindor",
        answer: "optionA"
    },
    {
        question: "What subject does Professor McGonagall teach?",
        A: "Transfiguration",
        B: " History of Magic",
        C: "Defense Against the Dark Arts",
        D: "None of the Above",
        answer: "optionA"
    },
    {
        question: "What position does Harry play on the Quidditch team?",
        A: "chaser",
        B: "keeper",
        C: "seeker",
        D: "None of the above",
        answer: "optionC"
    },
    {
        question: "Moony is code name for which character?",
        A: "Peter Pettigrew",
        B: "Sirius Black",
        C: "Remus Lupin",
        D: "James Potter",
        answer: "optionC"
    },
    {
        question: "which space did Ron tell his knight to move to when he sacrificed himself during giant Wizard's Chess?",
        A: "E4",
        B: "H3",
        C: "C3",
        D: "H4",
        answer: "optionB"
    },
    {
        question: "Which dark wizard did Albus Dumbledore defeat in 1945?",
        A: "Nicolas Flamel",
        B: "Lord Voldemort",
        C: "Grindelwald",
        D: "None of the above",
        answer: "optionC"
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