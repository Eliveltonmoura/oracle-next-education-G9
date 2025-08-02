


let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirNaTela() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}



function verificarChute() {
    
    let chute = document.querySelector('input').value;

    if ( Number (chute) === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou, parabéns!!! ');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`

        exibirTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O Número secreto é menor');
    }
    else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limpaCampo();

}

function gerarNumeroAleatorio() {
    
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeDeElementos = listaNumerosSorteados.length;

    if(quantidadeDeElementos == numeroLimite){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limpaCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}


function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}













