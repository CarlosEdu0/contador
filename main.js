let numero = 0

function mais() {
    numero++
    resultadoNaTela()
}

function menos() {
    numero--
    resultadoNaTela()
}

function resultadoNaTela() {
    const p = document.getElementById("resultado")
    p.innerText = numero
}

function zerar() {
    numero = 0
    resultadoNaTela()
}

resultadoNaTela()