const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        answers: ["Python", "Java", "C++", "JavaScript"],
        correct: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Colorful Style System", "Computer Style Sheet", "Creative Styling System"],
        correct: "Cascading Style Sheets"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(button, answer, currentQuestion.correct));
        answersContainer.appendChild(button);
    });
}

function resetState() {
    answersContainer.innerHTML = "";
}

function selectAnswer(button, selected, correct) {
    if (selected === correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }, 1000);
}

function showScore() {
    questionElement.textContent = "Quiz Completed!";
    answersContainer.innerHTML = "";
    scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

startQuiz();
