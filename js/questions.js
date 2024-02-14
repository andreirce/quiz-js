export default [
    {
      question: "Qual a comida mais típica de Salvador?",
      answers: [
        { text: "Leitão a pururuca", correct: false },
        { text: "Pão de queijo", correct: false },
        { text: "Acarajé", correct: true },
        { text: "Chimarrão", correct: false }
      ]
    },
    {
      question: "O que o Baiano fala para se livrar de palavras com duplo sentido?",
      answers: [
        { text: "laele", correct: true },
        { text: "sai fora", correct: false },
        { text: "Deus me livre", correct: false },
        { text: "to fora", correct: false }
      ]
    },
    {
      question: 'Qual a comida tipica de Minas Gerais',
      answers: [
        { text: 'Pão de queijo', correct: true },
        { text: 'Acarajé', correct: false },
        { text: 'Miojo', correct: false },
        { text: "Cachorro quente", correct: false }
      ]
    },
    {
      question: 'O arquivo JavaScript externo deve conter a tag <script>',
      answers: [
        { text: "Verdadeiro", correct: false },
        { text: "Falso", correct: true }
      ]
    },
    {
      question: 'Como escrever "Hello World" numa caixa de alerta?',
      answers: [
        { text: 'msg("Hello World");', correct: false },
        { text: 'alert("Hello World");', correct: true },
        { text: 'msgBox("Hello World");', correct: false },
        { text: 'alertBox("Hello World");', correct: false }
      ]
    },
    {
      question: 'Como podemos criar uma função no JavaScript?',
      answers: [
        { text: 'function:myFunction()', correct: false },
        { text: 'function myFunction()', correct: true },
        { text: 'function = myFunction()', correct: false },
        { text: 'Nenhum desses códigos criaria uma função', correct: false }
      ]
    },
    {
      question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
      answers: [
        { text: 'call minhaFuncao()', correct: false },
        { text: 'call function minhaFuncao()', correct: false },
        { text: 'Nenhum desses códigos chamaria essa função', correct: false },
        { text: 'minhaFuncao()', correct: true },
      ]
    },
]