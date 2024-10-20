// Seleciona elementos
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const feedback = document.getElementById('feedback');
const attempts = document.getElementById('attempts');
const playAgainBtn = document.getElementById('play-again-btn');

// Configurações iniciais
let maxNumber = 100;
let numeroSecreto = Math.floor(Math.random() * maxNumber) + 1;
let tentativas = 0;

// Função para verificar a adivinhação
function verificarTentativa() {
    const tentativa = parseInt(guessInput.value);
    tentativas++;

    if (isNaN(tentativa) || tentativa < 1 || tentativa > maxNumber) {
        feedback.textContent = "Por favor, introduz um número válido!";
    } else if (tentativa < numeroSecreto) {
        feedback.textContent = "Muito baixo! Tenta um número maior.";
    } else if (tentativa > numeroSecreto) {
        feedback.textContent = "Muito alto! Tenta um número menor.";
    } else {
        feedback.textContent = `Parabéns! Acertaste o número ${numeroSecreto} em ${tentativas} tentativas.`;
        feedback.style.color = "green";
        guessBtn.style.display = "none";
        playAgainBtn.style.display = "block";
    }
    
    attempts.textContent = `Tentativas: ${tentativas}`;
}

// Função para reiniciar o jogo
function jogarNovamente() {
    numeroSecreto = Math.floor(Math.random() * maxNumber) + 1;
    tentativas = 0;
    feedback.textContent = "";
    attempts.textContent = "";
    guessInput.value = "";
    guessBtn.style.display = "block";
    playAgainBtn.style.display = "none";
    feedback.style.color = "black";
}

// Eventos
guessBtn.addEventListener('click', verificarTentativa);
playAgainBtn.addEventListener('click', jogarNovamente);
