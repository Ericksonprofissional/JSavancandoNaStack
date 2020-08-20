export class Cliente{
    //nome; boa pratica é declarar as propriedades dentro de um metodo
    //_cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome; // declarando a propriedade da class dentro do contrutor
        this._cpf = cpf;
    }
}