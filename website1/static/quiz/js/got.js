var quizData = [
    {
        question: "Who is Jon Snow’s mother?",
        A: "Cersei Lannister",
        B: "Lisa Arryn",
        C: "Lyanna Stark",
        D: "An unnamed prostitute",
        answer: "optionC"
    },
    {
        question: "What is Davos Seaworth’s nickname?",
        A: "The Onion Knight",
        B: " The Hound",
        C: "The Sand Snake",
        D: "Hot Pie",
        answer: "optionA"
    },
    {
        question: "Which of the following is not a name of one of Daenerys Targaryen’s dragons?",
        A: "Drogon",
        B: "Viserion",
        C: "Balerion",
        D: "Rhaegal",
        answer: "optionC"
    },
    {
        question: "How does Gregor (“the Mountain”) Clegane kill Oberyn Martell, the “Red Viper,” in their trial by combat?",
        A: "crushes his skull",
        B: "cuts his head off",
        C: "strangles him",
        D: "poisons him",
        answer: "optionA"
    },
    {
        question: "Who is the youngest of Ned Stark’s children?",
        A: "Bran",
        B: "Arya",
        C: "Rickon",
        D: "Sansa",
        answer: "optionC"
    },
    {
        question: "What are the House words of House Greyjoy ?",
        A: "Ours is the Fury",
        B: "We do not Sow",
        C: "Winter is coming",
        D: "Unbowed, Unbent, Unbroken",
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