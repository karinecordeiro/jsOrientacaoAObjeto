import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

////
const cliente1 = new Cliente();
cliente1.nome = "Silvia";
cliente1.cpf = 22233344455;
const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 3003;

const cliente2 = new Cliente();
cliente2.nome = "Paola";
cliente2.cpf = 33344455566;
const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 4004;
////

////

conta1.depositar(200);
console.log(conta1);

conta2.depositar(300);
console.log(conta2);

console.log("Após tranferência");
conta1.tranferir(50, conta2);
console.log(conta1, conta2);
////


