const questions = [
    {
        question : "Capital of France",
        answers: [
                {text: "paris" , correct: true},
                {text: "berlin" , correct: false},
                {text: "madrid", correct: false},
                {text: "rome", correct: false},
                ]
            },
    {
        question : "Capital of india",
        answers :[
                {text: "paris", correct: false},
                {text: "delhi", correct: true},
                {text: "madrid", correct: false},
                {text: "rome", correct: false},
                ]
    },
    {
        question : "Capital of japan",
        answers :[
                {text: "paris", correct: false},
                {text: "berlin", correct: false},
                {text: "tokoyo", correct: true},
                {text: "rome", correct: false},
                ]
    },
    {
        question : "Capital of karnataka",
        answers :[
                {text: "paris", correct: false},
                {text: "berlin", correct: false},
                {text: "madrid", correct: false},
                {text: "blr", correct: true},
                ]
    }
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerbuttons.apprendchild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if (iscorrect) {
            selectedbtn.classList.add("correct");
            score++;
        }else{
            selecedbtn.classList.add("incorrect");
        }
        array.from(answers.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextButton.style,display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'your score is ${score} out od ${questions.lenghth}!';
    nextButton.innerHTML = "play agaon";
    nextButton.style.display = "block";
}

function handlenextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handlenextButton();
        } else{
            startQuiz();
    }
});
startQuiz();