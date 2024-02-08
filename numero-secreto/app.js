let listaDeNumerosAleatorios = [];
let campoTitulo = document.querySelector("h1");
let campoInstrucao = document.querySelector(".texto__paragrafo");
let numeroAleatorio = gerarNumeroAleatorio();

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