const quizData = [
    {
        question: "Quand la guerre froide a-t-elle commencé ?",
        a: "1945",
        b: "1950",
        c: "1960",
        d: "1970",
        correct: "a"
    },
    {
        question: "Quel était le principal rival des États-Unis pendant la guerre froide ?",
        a: "Chine",
        b: "URSS",
        c: "Allemagne",
        d: "Japon",
        correct: "b"
    },
    {
        question: "Quel mur symbolisait la division de la guerre froide ?",
        a: "Mur de Berlin",
        b: "Mur de Chine",
        c: "Mur de Corée",
        d: "Mur de fer",
        correct: "a"
    },
    {
        question: "Quelle organisation militaire a été créée par les États-Unis pendant la guerre froide ?",
        a: "ONU",
        b: "OTAN",
        c: "Pacte de Varsovie",
        d: "Union Européenne",
        correct: "b"
    },
    {
        question: "En quelle année le mur de Berlin est-il tombé ?",
        a: "1985",
        b: "1987",
        c: "1989",
        d: "1991",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuestion = quizData[currentQuiz];
    quiz.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <label>
            <input type="radio" name="answer" value="a">
            ${currentQuestion.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b">
            ${currentQuestion.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c">
            ${currentQuestion.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d">
            ${currentQuestion.d}
        </label>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer = null;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = '';
            results.innerHTML = `Votre score final est ${score} sur ${quizData.length} bonnes réponses.`;
            submitBtn.style.display = 'none';
        }
    } else {
        alert('Veuillez sélectionner une réponse.');
    }
});

loadQuiz();