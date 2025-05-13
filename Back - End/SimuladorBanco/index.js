const inquirer = require('inquirer');
const chalk = require('chalk');

async function iniciarBanco() {
  const resposta01 = await inquirer.prompt([
    {
      type: 'input',
      name: 'afirmacao',
      message: "Deseja acessar o banco? (Sim/Não)"
    }
  ]);

  if (resposta01.afirmacao.toLowerCase() === "sim") {
    console.log(chalk.green('Você digitou Sim, seja bem-vindo!'));

    const resposta02 = await inquirer.prompt([
      {
        type: 'list',
        name: 'escolha',
        message: 'Você deseja criar uma conta:',
        choices: ['Sim', 'Não'],
      }
    ]);

    if (resposta02.escolha === 'Sim') {
      const resposta03 = await inquirer.prompt([
        {
          type: 'input',
          name: 'criar',
          message: 'Digite o nome da sua conta:'
        }
      ]);

      const nomeUsuario = resposta03.criar;
      let saldo = 1000;

      console.log(chalk.blue(`Seja bem-vindo(a) ao nosso sistema, ${nomeUsuario}`));

      let continuar = true;

      while (continuar) {
        const resposta04 = await inquirer.prompt([
          {
            type: 'list',
            name: 'opcoes_bancarias',
            message: `Escolha uma das opções abaixo, ${nomeUsuario}:`,
            choices: ['Sacar', 'Depositar', 'Ver Saldo', 'Sair'],
          }
        ]);

        const escolha = resposta04.opcoes_bancarias;

        if (escolha === 'Sacar') {
          const saque = await inquirer.prompt([
            {
              type: 'input',
              name: 'valor',
              message: 'Digite o valor a sacar:',
              validate: valor => {
                return !isNaN(valor) && parseFloat(valor) > 0 ? true : 'Digite um valor válido!';
              }
            }
          ]);
          if (parseFloat(saque.valor) <= saldo) {
            saldo -= parseFloat(saque.valor);
            console.log(chalk.yellow(`Saque de R$ ${saque.valor} realizado com sucesso!`));
          } else {
            console.log(chalk.red('Saldo insuficiente!'));
          }

        } else if (escolha === 'Depositar') {
          const deposito = await inquirer.prompt([
            {
              type: 'input',
              name: 'valor',
              message: 'Digite o valor a depositar:',
              validate: valor => {
                return !isNaN(valor) && parseFloat(valor) > 0 ? true : 'Digite um valor válido!';
              }
            }
          ]);
          saldo += parseFloat(deposito.valor);
          console.log(chalk.green(`Depósito de R$ ${deposito.valor} realizado com sucesso!`));

        } else if (escolha === 'Ver Saldo') {
          console.log(chalk.blue(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`));

        } else if (escolha === 'Sair') {
          continuar = false;
          console.log(chalk.magenta(`Até mais, ${nomeUsuario}! Obrigado por usar nosso banco.`));
        }
      }

    } else {
      console.log(chalk.red('Você optou por não criar uma conta.'));
    }

  } else {
    console.log(chalk.red('Você digitou Não, então tenha um bom dia!'));
  }
}

iniciarBanco();
