import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);
conta1.sacar(50);

const conta2 = new ContaCorrente(cliente2, 102);
const contaPoupanca1 = new ContaPoupanca(1000, cliente1, conta1._agencia)

let valor = 200;
conta1.tranferir(valor, conta2);
conta2.sacar(10)
console.log(conta2);
console.log(conta1);
console.log(contaPoupanca1);