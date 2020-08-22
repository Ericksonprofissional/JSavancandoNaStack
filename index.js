import {Cliente} from "./Cliente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("erickso", 10000, 2838904108);
diretor.cadastrarSenha("12345");
const gerente = new Gerente("erickso", 10000, 2838904108);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Jaq", 4012921185, 1020)

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteSstaLogado = SistemaAutenticacao.login(cliente, "10120");
console.log(diretorEstaLogado)
console.log(gerenteEstaLogado)
console.log(clienteSstaLogado)