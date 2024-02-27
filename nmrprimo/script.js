function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  function checkPrime() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    if (isNaN(numberInput) || numberInput === '') {
      resultElement.textContent = 'Por favor, digite um número válido.';
      return;
    }

    const number = parseInt(numberInput);

    if (isPrime(number)) {
      resultElement.textContent = `${number} é um número primo.`;
    } else {
      resultElement.textContent = `${number} não é um número primo.`;
    }
  }