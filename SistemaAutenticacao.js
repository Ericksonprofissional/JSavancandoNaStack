/*
Ser autenticavel significa ter um método "senha"
*/
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}