// script.js

// Lista de palavras secretas e suas dicas correspondentes

// Seleciona uma palavra secreta e sua dica aleatoriamente
let randomIndex = Math.floor(Math.random() * words.length);
let secretWord = words[randomIndex].word;
let hint = words[randomIndex].hint;

let attempts = 5;  // Número de tentativas
const feedbackElement = document.getElementById('feedback');
const attemptsElement = document.getElementById('attempts');
const hintElement = document.getElementById('hint');
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-btn');
const hintButton = document.getElementById('hint-btn');

// Botão para reiniciar o jogo

// Função para verificar a entrada do usuário
function checkGuess() {
    const guess = userInput.value.toLowerCase();
    userInput.value = '';  // Limpa o campo de entrada
    
    if (guess === secretWord) {
        feedbackElement.innerText = "Parabéns! Você adivinhou a palavra secreta!";
        submitButton.disabled = true;  // Desabilita o botão após vencer
        hintButton.disabled = true;    // Desabilita o botão de dica

        // Adiciona o efeito de confete ao acertar a palavra
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.7 }  // Origem do confete na tela (ajuste conforme necessário)
        });
    } else {
        attempts--;
        attemptsElement.innerText = `Tentativas restantes: ${attempts}`;

        if (attempts > 0) {
            feedbackElement.innerText = "Não é isso, tente novamente.";
        } else {
            feedbackElement.innerText = `Você perdeu! A palavra secreta era "${secretWord}".`;
            submitButton.disabled = true;  // Desabilita o botão após perder
            hintButton.disabled = true;    // Desabilita o botão de dica
        }
    }
}
// function launchConfetti() {
//     confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.6 }
//     });
// }

// Função para mostrar a dica
function showHint() {
    hintElement.style.display = 'block';
    hintElement.innerText = `Dica: ${hint}`;
    hintButton.disabled = true;  // Desabilita o botão de dica após usá-lo
}


// Adiciona o evento de clique aos botões
submitButton.addEventListener('click', checkGuess);
hintButton.addEventListener('click', showHint);

// Adiciona a função de verificar quando o usuário pressiona Enter
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

//função para mudar a cor do background

const restartBackground = document.getElementById('submit-btn');
restartBackground.addEventListener('click', alterarFundoEVerificarResposta);

function alterarFundoEVerificarResposta() {
    // Array com as cores que você deseja usar
    const cores = ['#0000CD', '#8B008B', '#FF4500', '#FF69B4', '#b0b0b0'];

    // Obter um índice aleatório para escolher a cor
    const indiceAleatorio = Math.floor(Math.random() * cores.length);

    // Alterar o fundo da página
    document.body.style.backgroundColor = cores[indiceAleatorio];

}

const restartButton = document.getElementById('restart-btn');
restartButton.addEventListener('click', startGame);

function startGame() {
    // Reinicia a palavra secreta e a dica
    randomIndex = Math.floor(Math.random() * words.length);  // alterado para let
    secretWord = words[randomIndex].word;
    hint = words[randomIndex].hint;
    
    // Reinicia o número de tentativas
    attempts = 5;
    attemptsElement.innerText = `Tentativas restantes: ${attempts}`;
    
    // Limpa o campo de entrada e o feedback
    userInput.value = '';
    feedbackElement.innerText = '';
    
    // Mostra o botão de dica e desabilita o botão de enviar
    hintButton.disabled = false;
    submitButton.disabled = false;
    
    
    // Esconde a dica (caso tenha sido mostrada)
    hintElement.style.display = 'none';
}



