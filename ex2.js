var volume, comprimento, largura, altura

comprimento = parseFloat(prompt("Digite o comprimento do retângulo"))
largura = parseFloat(prompt("Digite a largura do retângulo"))
altura = parseFloat(prompt("Digite a altura do retângulo"))

volume = comprimento * largura * altura

document.write("O volume do retângulo é: " + volume + "m³")