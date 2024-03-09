let listaDeNumerosEscolhidos = [];
let numeroMaximo = 100;
let chute;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('head', `B-Search`);
    exibirTextoNaTela('textoInicial', `Escolha um número entre 1 e ${numeroMaximo}`);
}
exibirMensagemInicial();

function regras() {
    exibirTextoNaTela('headRegras', 'Regras do jogo:');
    exibirTextoNaTela('regras', `1 - O objetivo do jogo é adivinhar o número secreto, de 1 a ${numeroMaximo}<br>2 - A cada novo jogo, um número novo é sorteado, e ele nunca vai ser igual a nenhum número sorteado anteriormente`)
}
regras();

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

function msgMaiorOuMenor(maiorOuMenor) {
    exibirTextoNaTela('head', `Quase lá! Tentativa N°${tentativas}`);
    exibirTextoNaTela('textoInicial', `O número secreto é ${maiorOuMenor} que ${chute}.`);
}

function botaoChute() {
    chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('head', 'Parabéns!');
        exibirTextoNaTela('textoInicial', mensagemTentativas);
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
