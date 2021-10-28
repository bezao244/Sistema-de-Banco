//criando uma classe de pessoa
class Pessoa{
    nome 
    idade
    cpf

    //criando um construtor para melhorar as atribuicoes as classes
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}
//criando uma classe de conta
class Conta{
    codigo
    cliente
    data
    saldo = 0
    //criando uma funcao para depositar dinheiro na conta
    depositar(valor) {
        this.saldo += valor;
    }
    //criando uma funcao de saque
    sacar(valor){
        //validando se o valor que a pessoa quer sacar, tem saldo suficiente
        if(valor > this.saldo){
            console.log("Saldo insuficiente para realizar o saque!");
        }else{
            this.saldo -= valor;
            return valor;
        }
    }
    //funcao de tranferir
    transferir(valor, conta){
        //criando uma const para salvar o valor que vai ser transferido para ser ultilizado no deposito
        const valorSacado =this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
//adicionando informacoes a pessoa 1
const Pessoa1 = new Pessoa("Bernardo Afonso", "16", "01847131611");

//adicionando informacoes a conta da pessoa 1
const Conta1 = new Conta;
Conta1.codigo = "9734";
Conta1.cliente =Pessoa1;
Conta1.data = "26-10-2021"
Conta1.depositar(500);
Conta1.depositar(300);

//adicionando informacoes a pessoa 2
const Pessoa2 = new Pessoa("Arthur Silva", "21", "16254788943");

//adicionando informacoes a conta da pessoa 2
const Conta2 = new Conta;
Conta2.codigo ="4454";
Conta2.cliente = Pessoa2;
Conta2.data ="26-10-2021";
Conta2.depositar(100);

Conta1.transferir(100, Conta2);

const Pessoa3 = new Pessoa("Samuel Rocha", "19", "11111111111");

const Conta3 = new Conta;
Conta3.codigo = "3035";
Conta3.cliente = Pessoa3;
Conta3.data = "28-10-2021";
Conta3.depositar(100);

console.log("Conta do ", Pessoa1.nome);
console.log(Conta1);
console.log("Conta do ", Pessoa2.nome);
console.log(Conta2);
console.log("Conta do ", Pessoa3.nome);
console.log(Conta3);