import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

////
const cliente1 = new Cliente("Silvia", 22233344455);
// cliente1.nome = "Silvia";
// cliente1.cpf = 22233344455;
const conta1 = new ContaCorrente(3003, cliente1);//metodo construtor
conta1.cliente = cliente1;


const conta2 = new ContaCorrente(4004); //chamando apenas o primeiro atributo
conta2.cliente = new Cliente("Paola", 33344455566);//Chamada pela instanciação direta de um novo Cliente com o construtor
////

console.log("Número de contas abertas: " +ContaCorrente.numeroDeContas);

////

conta1.depositar(200);
console.log(conta1);

conta2.depositar(300);
console.log(conta2);

console.log("Após tranferência");
conta1.tranferir(50, conta2);
console.log("Conta "+ conta1.cliente.nome +": " + conta1.saldo +" reais.");
console.log("Conta "+ conta2.cliente.nome +": " + conta2.saldo +" reais.");
////



