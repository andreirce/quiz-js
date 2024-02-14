import questions from "./questions.js"
import { imagens } from "./imagens.js"

const iniciarJogo = document.querySelector(".start-quiz")
const proximaQuestao = document.querySelector(".next-question")
const questoesContainer = document.querySelector(".questions-container")
const questaoTexto = document.querySelector(".question")
const respostaContainer = document.querySelector(".answers-container")

let index = 0
let totalCorreto = 0

iniciarJogo.addEventListener("click", startGame)
proximaQuestao.addEventListener("click", displayNextQuestion)

function startGame() {
  iniciarJogo.classList.add("hide")
  questoesContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()

  if (questions.length === index) {
    return finishGame()
  }

  questaoTexto.textContent = questions[index].question
  questions[index].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    respostaContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })

  document.querySelector(".imagem").src = imagens[index]
}

function resetState() {
  while(respostaContainer.firstChild) {
    respostaContainer.removeChild(respostaContainer.firstChild)
  }

  document.body.removeAttribute("class")
  proximaQuestao.classList.add("hide")
}

function selectAnswer(event) {
  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })

  proximaQuestao.classList.remove("hide")
  index++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorreto * 100 / totalQuestions)

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

  questoesContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorreto} de ${totalQuestions} questões!
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
