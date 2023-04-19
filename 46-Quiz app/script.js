const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');
const submitBtn = document.getElementById('submit');

let currIdx = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currQue = quizData[currIdx];

    questionEl.innerText = currQue.question
    optionA.innerText = currQue.a;
    optionB.innerText = currQue.b;
    optionC.innerText = currQue.c;
    optionD.innerText = currQue.d;
}


function deselectAnswers(){
    answerEls.forEach(answer => answer.checked = false)
}

function getSelected(){
    let answer;

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer;
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();

    if(answer){
        if(quizData[currIdx].correct == answer){
            score++;
        }

        currIdx++;
        if(currIdx < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
                <h2>You answered ${score} / ${quizData.length} questions correctly. </h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})