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
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
      (answerButtonsElement.firstChild)
  }
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

const questions = [
  {
    question: 'Where did Australian Shepherds originate?',
    answers: [
      { text: 'Australia', correct: false },
      { text: 'Germany', correct: false },
      { text: 'United States', correct: true },
      { text: 'Area 51', correct: false }
    ]
  },
  {
    question: 'What are Australian Shepherds energy levels like?',
    answers: [
      { text: 'Non-existent', correct: false },
      { text: 'Moderate', correct: false },
      { text: 'Sluggish', correct: false },
      { text: 'Very Energetic', correct: true }
    ]
  },
  {
    question: 'Where did Australian Shepherds gain popularity?',
    answers: [
      { text: 'Rodeos', correct: true },
      { text: 'The Circus', correct: false },
      { text: 'Netflix', correct: false },
      { text: 'Ranchers', correct: false }
    ]
  },
  {
    question: 'How long do Australian Shepherds live for?',
    answers: [
      { text: '50-60 Years', correct: false },
      { text: '9-11 Years', correct: false },
      { text: '12-14 Years', correct: true },
      { text: '15-20 Years', correct: false }
    ]
  },
  {
    question: 'How much exercise do Australian Shepherds need daily?',
    answers: [
      { text: '1 hour a day', correct: false },
      { text: 'More than 2 hours a day', correct: true },
      { text: '30 Minutes a day', correct: false },
      { text: 'Less than 10 minutes a day', correct: false }
    ]
  }
]
