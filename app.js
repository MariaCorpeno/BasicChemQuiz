const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Game started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function selectAnswer(e) {

    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }


}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [{
        question: 'Which if the following is an example of a compound?',
        answers: [
            { text: 'sharing an electron', correct: true },
            { text: 'hydrogen gas', correct: false },
            { text: 'atomic bomb', correct: false },
            { text: 'covalent bond', correct: false },
        ]
    },
    {
        question: 'A substance that has ph lower than 7 would be considered a:',
        answers: [
            { text: 'acid', correct: true },
            { text: 'ion', correct: false },
            { text: 'quark', correct: false },
            { text: 'base', correct: false },
        ]
    },
    {
        question: 'A ______bond is a bond in which electrons are transferred.',
        answers: [
            { text: 'double', correct: false },
            { text: 'Ionic', correct: true },
            { text: 'nuclear', correct: false },
            { text: 'compound', correct: false },
        ]
    },
    {
        question: 'Water is made of 1 oxygen molecule and ___ hydrogen atoms.',
        answers: [
            { text: '1', correct: false },
            { text: '0', correct: false },
            { text: '4', correct: false },
            { text: '2', correct: true },
        ]
    },
    {
        question: 'Which of the following determines the identity of an element?',
        answers: [
            { text: 'mass #', correct: false },
            { text: 'atomic mass', correct: false },
            { text: 'atomic number', correct: true },
            { text: 'electron number', correct: false },
        ]
    },
    {
        question: 'What correctly defines a base?',
        answers: [
            { text: 'gives protons', correct: false },
            { text: 'accepts protons', correct: true },
            { text: 'accepts electrons', correct: false },
            { text: 'rejects electrons', correct: false },
        ]
    },
    {
        question: 'Whats the lightest element in the periodic table?',
        answers: [
            { text: 'hydrogen', correct: true },
            { text: 'helium', correct: false },
            { text: 'carbon', correct: false },
            { text: 'sodium', correct: false },
        ]
    },

];