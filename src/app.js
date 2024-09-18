let randomIndex = Math.floor(Math.random() * words.length);
let secretWord = words[randomIndex].word;
let hint = words[randomIndex].hint;

let attempts = 5;
const feedbackElement = document.getElementById('feedback');
const attemptsElement = document.getElementById('attempts');
const hintElement = document.getElementById('hint');
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-btn');
const hintButton = document.getElementById('hint-btn');


function checkGuess() {
    const guess = userInput.value.toLowerCase();
    userInput.value = ''; 
    
    if (guess === secretWord) {
        feedbackElement.innerText = "Parabéns! Você adivinhou a palavra secreta!";
        submitButton.disabled = true;  
        hintButton.disabled = true;   
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.9 }  
        });
    } else {
        attempts--;
        attemptsElement.innerText = `Tentativas restantes: ${attempts}`;

        if (attempts > 0) {
            feedbackElement.innerText = "Não é isso, tente novamente.";
        } else {
            feedbackElement.innerText = `Você perdeu! A palavra secreta era "${secretWord}".`;
            submitButton.disabled = true;
            hintButton.disabled = true; 
        }
    }
}

function showHint() {
    hintElement.style.display = 'block';
    hintElement.innerText = `Dica: ${hint}`;
    hintButton.disabled = true; 
}


submitButton.addEventListener('click', checkGuess);
hintButton.addEventListener('click', showHint);


userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});



const restartBackground = document.getElementById('submit-btn');
restartBackground.addEventListener('click', alterarFundoEVerificarResposta);

function alterarFundoEVerificarResposta() {
    const cores = ['#0000CD', '#8B008B', '#FF4500', '#FF69B4', '#b0b0b0'];

    const indiceAleatorio = Math.floor(Math.random() * cores.length);

    document.body.style.backgroundColor = cores[indiceAleatorio];

}

const restartButton = document.getElementById('restart-btn');
restartButton.addEventListener('click', startGame);

function startGame() {
    randomIndex = Math.floor(Math.random() * words.length);
    secretWord = words[randomIndex].word;
    hint = words[randomIndex].hint;
    
    attempts = 5;
    attemptsElement.innerText = `Tentativas restantes: ${attempts}`;
    
    userInput.value = '';
    feedbackElement.innerText = '';
    
    hintButton.disabled = false;
    submitButton.disabled = false;
    
    hintElement.style.display = 'none';
}



