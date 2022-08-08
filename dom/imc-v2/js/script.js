function start() 
{
    var btnCalculateImc = document.querySelector('#btn-calculate-imc');
    btnCalculateImc.addEventListener('click', handleButtonClick)

    handleButtonClick();
}

function calculateImc(weight, height)
{
    return weight / (height * height);
}

function handleButtonClick()
{
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    var paragraphFaixa = document.querySelector('#paragraph-faixa');
    var imcFaixa = document.querySelector('#imc-faixa');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);
    var formattedImc = imc.toFixed(2).replace('.', ',');

    imcResult.textContent = formattedImc;

    imcFaixa.textContent = faixaImc(formattedImc.replace(',', '.'));
}

function faixaImc (formattedImc)
{
    var faixa = "";

    if (formattedImc >= 16 && formattedImc <= 16.99)
    {
        faixa = "muito abaixo do peso";
    }
    else if (formattedImc >= 17 && formattedImc <= 18.49)
    {
        faixa = "abaixo do peso";
    }
    else if (formattedImc >= 18.5 && formattedImc <= 24.99)
    {
        faixa = "peso normal";
    }
    else if (formattedImc >= 25 && formattedImc <= 29.99)
    {
        faixa = "acima do peso";
    }
    else if (formattedImc >= 30 && formattedImc <= 34.99)
    {
        faixa = "obesidade grau I";
    }
    else if (formattedImc >= 35 && formattedImc <= 40)
    {
        faixa = "obesidade grau II";
    }
    else if (formattedImc > 40)
    {
        faixa = "obesidade grau III";
    }
    else
    {
        faixa = "Digite um valor válido";
    }

    return faixa;
}

start();