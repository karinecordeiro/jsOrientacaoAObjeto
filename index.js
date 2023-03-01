import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

////
const cliente1 = new Cliente();
cliente1.nome = "Silvia";
cliente1.cpf = 22233344455;
const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 3003;


const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();//Chamada pela instanciação direta de um novo Cliente.
conta2.cliente.nome = "Paola";
conta2.cliente.cpf = 33344455566;
conta2.agencia = 4004;
////

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


