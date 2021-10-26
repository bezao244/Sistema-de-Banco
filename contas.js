//criando uma classe de pessoa
class Pessoa{
    nome 
    idade
    cpf
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
        if(valor > this.saldo){
            console.log("Saldo insuficiente para realizar o saque!");
        }else{
            this.saldo -= valor;
            return valor;
        }
    }
}
//adicionando informacoes a pessoa 1
const Pessoa1 = new Pessoa;
Pessoa1.nome = "Bernardo Afonso";
Pessoa1.idade = 16;
Pessoa1.cpf = "01847131611";
//adicionando informacoes a conta da pessoa 1
const Conta1 = new Conta;
Conta1.codigo = "9734";
Conta1.cliente =Pessoa1;
Conta1.data = "26-10-2021"
Conta1.depositar(500);
Conta1.sacar(300);

//adicionando informacoes a pessoa 2
const Pessoa2 = new Pessoa;
Pessoa2.nome = "Arthur Silva";
Pessoa2.idade = "21";
Pessoa2.cpf = "16254788943";
//adicionando informacoes a conta da pessoa 2
const Conta2 = new Conta;
Conta2.codigo ="4454";
Conta2.cliente = Pessoa2;
Conta2.data ="26-10-2021";
Conta2.depositar(100);

console.log("Conta do Bernardo:");
console.log(Conta1);
console.log("Conta do Arthur:");
console.log(Conta2);