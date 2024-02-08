let campoTitulo = document.querySelector("h1");
let campoInstrucao = document.querySelector(".texto__paragrafo");

function mudarTexto(campo, texto) {
    campo.innerText = texto;
};

function textoInicial() {
    mudarTexto(campoTitulo, "Jogo do Numero Secreto");
    mudarTexto(campoInstrucao, "Informe um número de 1 a 10");
}

textoInicial();