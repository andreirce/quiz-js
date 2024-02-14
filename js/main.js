import questions from "./questions.js"
import { imagens } from "./imagens.js"

const startGameButton = document.querySelector(".start-quiz")
const nextQuestionButton = document.querySelector(".next-question")
const questionContainer = document.querySelector(".questions-container")
const questionText = document.querySelector(".question")
const answerContainer = document.querySelector(".answers-container")

let index = 0
let totalCorrect = 0

startGameButton.addEventListener("click", startGame)
nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  startGameButton.classList.add("hide")
  questionContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()

  if (questions.length === index) {
    return finishGame()
  }

  questionText.textContent = questions[index].question
  questions[index].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    answerContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })

  document.querySelector(".imagem").src = imagens[index]
}

function resetState() {
  while(answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild)
  }

  document.body.removeAttribute("class")
  nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else{
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  nextQuestionButton.classList.remove("hide")
  index++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  questionContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}
