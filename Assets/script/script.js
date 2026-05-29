const form = document.querySelector('form');
const display = document.querySelector('.display');

function calcularImc (evento) {
    evento.preventDefault();

    const peso = parseFloat(document.getElementById('peso_inp').value);
    const altura = parseFloat(document.getElementById('altura_inp').value);

    if (!peso || !altura) {
        display.innerHTML = '<p>Por favor, insira valores válidos.</p>';
        return;
    }

    const imc = peso / (altura * altura);
    let resultado = '';

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = 'Obesidade grau 2';
    } else {
        resultado = 'Obesidade grau 3';
    }

    display.innerHTML = `<div><p>Seu IMC é ${imc.toFixed(2)}: ${resultado}</p></div>`;
}

form.addEventListener('submit', calcularImc);