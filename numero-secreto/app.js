let listaDeNumerosAleatorios = [];
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

let campoTitulo = document.querySelector("h1");
let campoInstrucao = document.querySelector(".texto__paragrafo");
let campoChute = document.querySelector(".container__input");

textoInicial();

console.log(numeroAleatorio);
console.log(listaDeNumerosAleatorios);

function mudarTexto(campo, texto) {
    campo.innerText = texto;
};

function textoInicial() {
    mudarTexto(campoTitulo, "Jogo do Numero Secreto");
    mudarTexto(campoInstrucao, "Informe um número de 1 a 10");
}

function gerarNumeroAleatorio() {
    let numeroAleatorio =  parseInt((Math.random() * 10) + 1);

    if (listaDeNumerosAleatorios.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio();
    } else if (listaDeNumerosAleatorios.length == 10) {
        listaDeNumerosAleatorios = [];
        listaDeNumerosAleatorios.push(numeroAleatorio);
    } else {
        listaDeNumerosAleatorios.push(numeroAleatorio);
    }
    
    return numeroAleatorio;
}

function chutar() {
    
    let textoTentativa = tentativas == 1 ? "tentativa" : "tentativas";

    if (campoChute.value > numeroAleatorio) {
        mudarTexto(campoTitulo, "Errou!");
        mudarTexto(campoInstrucao, "O numero secreto é menor...");
        tentativas++;
    } else if (campoChute.value < numeroAleatorio) {
        mudarTexto(campoTitulo, "Errou!");
        mudarTexto(campoInstrucao, "O numero secreto é maior...");
        tentativas++;
    } else {
        mudarTexto(campoTitulo, "Acertou!");
        mudarTexto(campoInstrucao, ` Você acertou com ${tentativas} ${textoTentativa}`);
    }
}