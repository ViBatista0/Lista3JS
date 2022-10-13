var real, dolar, cotacao

dolar = parseFloat(prompt("Digite quantos dólares você quer converter"))
cotacao = parseFloat(prompt("Digite qual é a cotação atual do dólar"))

real = dolar * cotacao

document.write("Você possui: R$" + real)