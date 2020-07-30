const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// know which random shuffled question quiz is on
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// starts game
function startGame() {

  // starts timer
  var total_seconds = 30 * 1;
  var c_minutes = parseInt(total_seconds / 60);
  var c_seconds = parseInt(total_seconds % 60);
  var timer;

  function CheckTime() {
    document.getElementById("timers").innerHTML = 'Time Left: ' + c_seconds + ' seconds ';

    if (total_seconds < 0) {
      clearInterval(timer)
      alert("Time is up!");

    } else {
      total_seconds = total_seconds - 1;
      c_minutes = parseInt(total_seconds / 60);
      c_seconds = parseInt(total_seconds % 60);
      timer = setTimeout(CheckTime, 1000);
    }
  }
  timer = setTimeout(CheckTime, 1000);
  // stop timer

  startButton.classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - .5) // shuffles questions
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

  // wrong answer subtract 5 sec

}

// random shuffled question on next
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

// shows questions and answers
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

// resets questions and answers to default state on each new question
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
      (answerButtonsElement.firstChild)
  }
}

// effect when an answer is selected
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
    startButton.innerText = 'Enter Your High Score!'
    startButton.classList.remove('hide')
    alert("You Win!")

  }
}

// effect if answer is correct or wrong
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

// removes correct or wrong answer effect
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// score begin
var answers =

  function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
      if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
  }

function returnScore() {
  alert("Your score is " + getScore() + "/" + tot);
}
// score end

// question and answer arrays
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
