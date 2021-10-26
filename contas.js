class Pessoa{
    nome 
    idade
    cpf
}
class Conta{
    codigo
    cliente
    data
}
const Pessoa1 = new Pessoa;
Pessoa1.nome = "Bernardo Afonso";
Pessoa1.idade = 16;
Pessoa1.cpf = "01847131611";
console.log(Pessoa1);

const Pessoa1Conta = new Conta;
Pessoa1Conta.codigo = "9734";
Pessoa1Conta.cliente =Pessoa1;
Pessoa1Conta.data = "26-10-2021"

console.log(Pessoa1Conta);