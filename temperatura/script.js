function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultElement = document.getElementById('result');

    if (isNaN(temperatureInput) || temperatureInput === '') {
      resultElement.textContent = 'Por favor, digite uma temperatura válida.';
      return;
    }

    const temperature = parseFloat(temperatureInput);

    let result;

    if (conversionType === 'celsiusToFahrenheit') {
      result = celsiusToFahrenheit(temperature);
      resultElement.textContent = `${temperature}°C é igual a ${result.toFixed(2)}°F.`;
    } else if (conversionType === 'fahrenheitToCelsius') {
      result = fahrenheitToCelsius(temperature);
      resultElement.textContent = `${temperature}°F é igual a ${result.toFixed(2)}°C.`;
    }
  }