// Gerar um número aleatório entre 1 e 10
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const message = document.getElementById('message');
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Por favor, insira um número válido entre 1 e 10.';
    return;
  }

  attempts++;

  if (userGuess === targetNumber) {
    message.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
  } else {
    const hint = userGuess < targetNumber ? 'maior' : 'menor';
    message.textContent = `Tente novamente. O número é ${hint} que o seu palpite.`;
  }
}