const quizDB = [
    {
        question: "1: What is an operating system?",
        a: " interface between the hardware and application programs",
        b: "collection of programs that manages hardware resources",
        c: "system service provider to the application programs",
        d: "all of the above",
        ans: "ans4"
    },
    {
        question: "2:What is the main function of the command interpreter?",
        a: "to get and execute the next user-specified command",
        b: " to provide the interface between the API and application program",
        c: " to handle the files in the operating system",
        d: "none of the mentioned",
        ans: "ans1"
    },
    {
        question: "3:What is the full form of JS? ",
        a: "Java strong",
        b: "jerry scro",
        c: "java script",
        d: "johnson string",
        ans: "ans3"
    },
    {
        question: "4: CPU scheduling is the basis of ___________?",
        a: "multiprocessor systems",
        b: "multiprocessing operating systems",
        c: "larger memory sized systems",
        d: "multiprogramming operating systems",
        ans: "ans4"
    },
    {
        question: "5: Which one of the following errors will be handle by the operating system?",
        a: "lack of paper in printer",
        b: "connection failure in the network",
        c: "power failure",
        d: "all of the mentioned",
        ans: "ans4"
    }

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
// const option5 = document.querySelector('#option5');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
<h3> You scored ${score}/${quizDB.length}</h3>
<button class="btn" onclick="location.reload()"> Attempt again </button>

`;
        showScore.classList.remove('scoreArea');
    }
});