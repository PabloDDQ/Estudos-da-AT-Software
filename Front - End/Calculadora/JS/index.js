// Seleciona os elementos do DOM para exibir as operações
const displayOperacaoAnterior = document.querySelector("#previous-operation");
const displayOperacaoAtual = document.querySelector("#current-operation");
const botoesCalculadora = document.querySelectorAll("#buttons-container button");

// Classe principal da calculadora
class Calculadora {
    constructor(displayOperacaoAnterior, displayOperacaoAtual) {
        this.displayOperacaoAnterior = displayOperacaoAnterior;
        this.displayOperacaoAtual = displayOperacaoAtual;
        this.valorAtual = ""; // valor que está sendo digitado no momento
    }

    // Adiciona número ou ponto decimal ao valor atual
    adicionarDigito(digito) {
        if (digito === "." && this.displayOperacaoAtual.innerText.includes(".")) {
            return; // impede mais de um ponto
        }

        this.valorAtual += digito;
        this.atualizarDisplay();
    }

    // Processa a operação (+, -, *, /)
    processarOperacao(operador) {
        if (this.valorAtual === "") {
            return; // se nada foi digitado, não faz nada
        }

        if (this.displayOperacaoAnterior.innerText !== "") {
            this.calcular(); // se já tem operação anterior, calcula antes de continuar
        }

        this.operadorSelecionado = operador;
        this.valorAnterior = this.valorAtual;
        this.valorAtual = "";

        this.displayOperacaoAnterior.innerText = `${this.valorAnterior} ${this.operadorSelecionado}`;
        this.displayOperacaoAtual.innerText = "";
    }

    // Realiza o cálculo com base na operação selecionada
    calcular() {
        let resultado;
        const numeroAnterior = parseFloat(this.valorAnterior);
        const numeroAtual = parseFloat(this.valorAtual);

        if (isNaN(numeroAnterior) || isNaN(numeroAtual)) {
            return; // se algum dos valores não for número, cancela
        }

        if (this.operadorSelecionado === "+") {
            resultado = numeroAnterior + numeroAtual;
        } else if (this.operadorSelecionado === "-") {
            resultado = numeroAnterior - numeroAtual;
        } else if (this.operadorSelecionado === "*") {
            resultado = numeroAnterior * numeroAtual;
        } else if (this.operadorSelecionado === "/") {
            resultado = numeroAnterior / numeroAtual;
        } else {
            return; // operador inválido
        }

        this.valorAtual = resultado.toString();
        this.operadorSelecionado = undefined;
        this.valorAnterior = "";
        this.displayOperacaoAnterior.innerText = "";
        this.atualizarDisplay();
    }

    // Apaga o último dígito digitado
    apagarDigito() {
        this.valorAtual = this.valorAtual.slice(0, -1);
        this.atualizarDisplay();
    }

    // Limpa tudo: operação atual, anterior e operador
    limparTudo() {
        this.valorAtual = "";
        this.valorAnterior = "";
        this.operadorSelecionado = undefined;
        this.displayOperacaoAnterior.innerText = "";
        this.atualizarDisplay();
    }

    // Limpa apenas o valor atual
    limparValorAtual() {
        this.valorAtual = "";
        this.atualizarDisplay();
    }

    // Atualiza o visor da calculadora com o valor atual
    atualizarDisplay() {
        this.displayOperacaoAtual.innerText = this.valorAtual;
    }
}

// Instancia a calculadora
const calculadora = new Calculadora(displayOperacaoAnterior, displayOperacaoAtual);

// Adiciona o evento de clique aos botões
botoesCalculadora.forEach((botao) => {
    const valorBotao = botao.innerText;

    botao.addEventListener("click", () => {
        if (botao.classList.contains("number") || valorBotao === ".") {
            calculadora.adicionarDigito(valorBotao);
        } else if (valorBotao === "+") {
            calculadora.processarOperacao("+");
        } else if (valorBotao === "-") {
            calculadora.processarOperacao("-");
        } else if (valorBotao === "*") {
            calculadora.processarOperacao("*");
        } else if (valorBotao === "/") {
            calculadora.processarOperacao("/");
        } else if (valorBotao === "DEL") {
            calculadora.apagarDigito();
        } else if (valorBotao === "CE") {
            calculadora.limparValorAtual();
        } else if (valorBotao === "C") {
            calculadora.limparTudo();
        } else if (valorBotao === "=") {
            calculadora.calcular();
        }
    });
});
