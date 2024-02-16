import questions from "./questions.js"

const startGameButton = document.querySelector(".start-quiz")
const nextQuestionButton = document.querySelector(".next-question")
const questionContainer = document.querySelector(".questions-container")
const questionText = document.querySelector(".question")
const answerContainer = document.querySelector(".answers-container")
const title = document.querySelector(".title")
const countdown = document.getElementById("countdown")

let interval;
let index = 0
let totalCorrect = 0
let shuffledQuestions = []

startGameButton.addEventListener("click", startGame)
nextQuestionButton.addEventListener("click", displayNextQuestion)
 
var nome = prompt("Qual é o seu nome?");
window.alert( `Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()}! Pronto para essa aventura? `);

function startGame() {
  startGameButton.classList.add("hide")
  title.classList.add("hide")
  countdown.classList.remove("hide")
  questionContainer.classList.remove("hide")
  shuffledQuestions = shuffle(questions)
  displayNextQuestion()
}

function timeQuestion() {
  var count = 10;
  clearInterval(interval)
   interval = setInterval(function(){
    document.getElementById('countdown').innerHTML=count;
    if (count <= 0){
      clearInterval(interval);
      document.getElementById('countdown').innerHTML='Done';
     
      alert("Acabou o seu tempo!");
      window.location.reload()
    }else{
      count--;
    }
  }, 1000);
}

function displayNextQuestion() {
  resetState()
  countdown.classList.remove("hide")
  
  if (shuffledQuestions.length === index) {
    return finishGame()
  }
  
 questionText.textContent = shuffledQuestions[index].question
  shuffledQuestions[index].answers.forEach(answer => {
    const newAnswer = document.createElement("button")
    newAnswer.classList.add("button", "answer")
    newAnswer.textContent = answer.text
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct
    }
    answerContainer.appendChild(newAnswer)

    newAnswer.addEventListener("click", selectAnswer)
  })

  
  clearInterval(interval)
  timeQuestion()

  document.querySelector(".imagem").src = questions[index].imagem
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
    clearInterval(interval);
  } else{
    document.body.classList.add("incorrect")
    clearInterval(interval);
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
  const totalQuestions = shuffledQuestions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  countdown.classList.add("hide")
  
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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}


