let listaDeNumerosEscolhidos = [];
let numeroMaximo = 10;
let chute;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', `Jogo do número secreto`);
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}
exibirMensagemInicial();


function numeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroMaximo + 1);
    let tamanhoDaLista = listaDeNumerosEscolhidos.length;
    if (tamanhoDaLista == numeroMaximo) {
        listaDeNumerosEscolhidos = [];
    }
    if (listaDeNumerosEscolhidos.includes(numeroEscolhido)) {
        console.log(listaDeNumerosEscolhidos);
        return numeroAleatorio();
    } else {
        listaDeNumerosEscolhidos.push(numeroEscolhido);
        console.log(listaDeNumerosEscolhidos);
        return numeroEscolhido;
    }
}



function botaoChute() {
    chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);
    } else {
        if (chute > numeroSecreto) {
            msgMaiorOuMenor('menor');        
        } else {
            msgMaiorOuMenor('maior');
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('chute').removeAttribute('disabled')
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function msgMaiorOuMenor(maiorOuMenor) {
    exibirTextoNaTela('h1', `Quase lá! Tentativa N°${tentativas}`);
    exibirTextoNaTela('p', `O número secreto é ${maiorOuMenor} que ${chute}.`);
}
