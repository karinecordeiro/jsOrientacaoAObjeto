import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    //atributos publicos
    static numeroDeContas = 0; //atributo estático
    agencia;

    //atributo privado
    _cliente;
    _saldo = 0; // underline na frente do nome do atributo tem como referência que o mesmo é privado e não deve ser alterado fora da classe


    //proteção para que apenas o valor de Cliente seja atribuido
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    
    //consutar os atributos
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; //contador
    }
    
    sacar(valor){
        if(this._saldo >= valor){ // this referencia ao "cliente" que está fazendo a operação no momento
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) return; // (condição falsa => early return)
        this._saldo += valor;
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor); //tirar de uma conta
        conta.depositar(valorSacado); // enviar para outra conta
    }
}