var real, dolar, cotacao

real = parseFloat(prompt("Digite quantos reais você quer converter"))
cotacao = parseFloat(prompt("Digite a cotação atual do dólar"))

dolar = real / cotacao

document.write("A conversão de R$" + real + " em dólar é: $" + dolar.toFixed(2))