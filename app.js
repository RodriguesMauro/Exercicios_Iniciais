// Desafios

// 1   Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

alert('Ola, sejam bem vindos ao nosso site')

//    Exiba um alerta com o texto "Erro! Preencha todos os campos"

alert('Erro! Preencha todos os campos');


// 2    Declare uma variável chamada nome e atribua a ela o valor "Lua".

let nome = "lua"; // usando aspas duplas

//    Crie uma variável chamada idade e atribua a ela o valor 25.

let idade = 25;

//    Defina uma variável numeroDeVendas e atribua a ela o valor 50.

let numeroDeVendas = 50;

//    Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

let saldoDisponivel = 1000;

//    Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

let mensagemDeErro = ("Erro! Preencha todos os campos")

//    Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

let usuario = prompt('Qual é o nome do usuário? ');

//    Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

idade = prompt('Digite sua idade: ');

//    Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

// =================================

if (idade >= 18) {
    alert('Pode tirar sua habilitação');
} else {
    alert('Você é menor de idade e não pode tirar sua habilitação');
}

