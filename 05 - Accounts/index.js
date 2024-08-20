// Importa o módulo `inquirer` para criar prompts interativos no terminal
const inquirer = require('inquirer');

// Importa o módulo `chalk` para estilizar o texto no terminal com cores
const chalk = require('chalk');

// Importa o módulo `fs` para manipulação de arquivos no sistema de arquivos
const fs = require('fs');

// Inicia o processo de operação chamando a função `operation`
operation();

function operation() {
  // Exibe um prompt de lista para o usuário escolher uma ação
  inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'Create Account',
          'Check Balance',
          'Deposit',
          'Withdraw',
          'Exit',
        ],
      },
    ]).then((answer) => {
      const action = answer['action'];

      // Chama a função correspondente com base na escolha do usuário
      if (action === 'Create Account') {
        createAccount();
      } else if (action === 'Deposit') {
        deposit();
      } else if (action === 'Check Balance') {
        getAccountBalance();
      } else if (action === 'Withdraw') {
        withdraw();
      } else if (action === 'Exit') {
        // Exibe uma mensagem de agradecimento e encerra o processo
        console.log(chalk.bgBlue.black('Thank you for using Accounts!'));
        process.exit();
      }
    });
}

// Função para criar uma nova conta
function createAccount() {
  console.log(chalk.bgGreen.black('Congratulations on choosing our bank!'));
  console.log(chalk.green('Define your account options below'));

  // Chama a função para construir a conta
  buildAccount();
}

function buildAccount() {
  // Exibe um prompt para o usuário inserir o nome da conta
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Enter a name for your account:',
      },
    ])
    .then((answer) => {
      console.info(answer['accountName']);

      const accountName = answer['accountName'];

      // Cria o diretório "accounts" se ele não existir
      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts');
      }

      // Verifica se a conta já existe e solicita um novo nome se necessário
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black('This account already exists, choose another name!')
        );
        buildAccount();
      }

      // Cria um arquivo JSON para a nova conta com saldo inicial de 0
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance":0}',
        function (err) {
          console.log(err);
        }
      );

      console.log(chalk.green('Congratulations, your account has been created!'));
      // Volta para o menu principal
      operation();
    });
}

// Função para depositar dinheiro em uma conta
function deposit() {
  // Exibe um prompt para o usuário inserir o nome da conta
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'What is your account name?',
      },
    ])
    .then((answer) => {
      const accountName = answer['accountName'];

      // Verifica se a conta existe e solicita um novo nome se necessário
      if (!checkAccount(accountName)) {
        return deposit();
      }

      // Exibe um prompt para o usuário inserir o valor a ser depositado
      inquirer
        .prompt([
          {
            name: 'amount',
            message: 'How much would you like to deposit?',
          },
        ])
        .then((answer) => {
          const amount = answer['amount'];

          // Adiciona o valor ao saldo da conta
          addAmount(accountName, amount);
          // Volta para o menu principal
          operation();
        });
    });
}

// Função para verificar se uma conta existe
function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('This account does not exist, choose another name!'));
    return false;
  }
  return true;
}

// Função para ler os dados da conta a partir do arquivo JSON
function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: 'utf8',
    flag: 'r',
  });

  return JSON.parse(accountJSON);
}

// Função para adicionar um valor ao saldo da conta
function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black('An error occurred, please try again later!')
    );
    return deposit();
  }

  // Atualiza o saldo da conta com o valor depositado
  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.green(`An amount of R$ ${amount} has been deposited into your account!`)
  );
}

// Função para consultar o saldo da conta
function getAccountBalance() {
  // Exibe um prompt para o usuário inserir o nome da conta
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'What is your account name?',
      },
    ])
    .then((answer) => {
      const accountName = answer['accountName'];

      // Verifica se a conta existe e solicita um novo nome se necessário
      if (!checkAccount(accountName)) {
        return getAccountBalance();
      }

      const accountData = getAccount(accountName);

      // Exibe o saldo da conta
      console.log(
        chalk.bgBlue.black(
          `Hello, the balance of your account is R$${accountData.balance}`
        )
      );
      // Volta para o menu principal
      operation();
    });
}

// Função para sacar dinheiro da conta
function withdraw() {
  // Exibe um prompt para o usuário inserir o nome da conta
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'What is your account name?',
      },
    ])
    .then((answer) => {
      const accountName = answer['accountName'];

      // Verifica se a conta existe e solicita um novo nome se necessário
      if (!checkAccount(accountName)) {
        return withdraw();
      }

      // Exibe um prompt para o usuário inserir o valor a ser sacado
      inquirer
        .prompt([
          {
            name: 'amount',
            message: 'How much would you like to withdraw?',
          },
        ])
        .then((answer) => {
          const amount = answer['amount'];

          // Remove o valor do saldo da conta
          removeAmount(accountName, amount);
          // Volta para o menu principal
          operation();
        });
    });
}

// Função para remover um valor do saldo da conta
function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black('An error occurred, please try again later!')
    );
    return withdraw();
  }

  // Verifica se o saldo é suficiente para o saque
  if (accountData.balance < amount) {
    console.log(chalk.bgRed.black('Insufficient funds!'));
    return withdraw();
  }

  // Atualiza o saldo da conta com o valor sacado
  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.green(`A withdrawal of R$${amount} has been made from your account!`)
  );
}
