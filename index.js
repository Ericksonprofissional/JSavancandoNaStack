import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new Conta(0, 1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);
const contaPoupanca1 = new Conta(1000, cliente1, contaCorrenteRicardo.agencia)

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(contaPoupanca1);