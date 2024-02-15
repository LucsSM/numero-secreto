let listaDeNumerosAleatorios = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let campoTitulo = document.querySelector("h1");
let campoInstrucao = document.querySelector(".texto__paragrafo");
let campoChute = document.querySelector(".container__input");
let botaoReiniciar = document.getElementById("reiniciar");
let imagem = document.querySelector(".container__imagem-pessoa");

console.log(numeroSecreto);
console.log(listaDeNumerosAleatorios);

exibirTextoInicial();

function mudarTexto(campo, texto) {
    campo.innerText = texto;
};

function focarInput () {
    campoChute.focus();
}

function erroAnimacao () {
    campoChute.classList.add("erro-animacao");
    setTimeout(() => {campoChute.classList.remove("erro-animacao")}, 1000 );
}

function exibirTextoInicial() {
    mudarTexto(campoTitulo, "Jogo do Numero Secreto");
    mudarTexto(campoInstrucao, "Informe um número de 1 a 10");
}

function gerarNumeroAleatorio() {
    let numeroAleatorio =  parseInt((Math.random() * 10) + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosAleatorios.length;

    if (quantidadeDeNumerosNaLista == 10) {
        listaDeNumerosAleatorios = [];
    }

    listaDeNumerosAleatorios.includes(numeroAleatorio) ? gerarNumeroAleatorio() : listaDeNumerosAleatorios.push(numeroAleatorio);
    
    return numeroAleatorio;
}

function chutar() {
    
    let textoTentativa = tentativas == 1 ? "tentativa" : "tentativas";
    botaoReiniciar.removeAttribute("disabled");
    focarInput();

    if (campoChute.value > numeroSecreto) {
        mudarTexto(campoTitulo, "Errou!");
        mudarTexto(campoInstrucao, "O numero secreto é menor...");
        erroAnimacao ();
        tentativas++;
    } else if (campoChute.value < numeroSecreto) {
        mudarTexto(campoTitulo, "Errou!");
        mudarTexto(campoInstrucao, "O numero secreto é maior...");
        erroAnimacao ();
        tentativas++;
    } else {
        mudarTexto(campoTitulo, "Acertou!");
        mudarTexto(campoInstrucao, ` Você acertou com ${tentativas} ${textoTentativa}`);
        botaoReiniciar.focus();
        botaoReiniciar.classList.add("acerto-animacao");
        imagem.src = "./img/robot.png";
        imagem.classList.add(".container__imagem-vitoria");
    }
}

function reiniciarJogo() {
    campoChute.value = "";
    focarInput();
    tentativas = 1;
    exibirTextoInicial();
    numeroSecreto = gerarNumeroAleatorio();
    botaoReiniciar.setAttribute("disabled", true);
    botaoReiniciar.classList.remove("acerto-animacao");
    imagem.src = "./img/ia.png";

    console.log(numeroSecreto);
    console.log(listaDeNumerosAleatorios);
}
