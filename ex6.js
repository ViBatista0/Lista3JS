var a, b, c, res

a = parseFloat(prompt("Digite um valor"))
b = parseFloat(prompt("Digite outro valor"))
c = parseFloat(prompt("Digite mais um valor"))

a *= a
b *= b
c *= c

res = a + b + c

document.write("O resultado da soma dos quadrados é: " + res)