export class ContaCorrente{
    //atributos publicos
    cliente;
    agencia;


    //atributo privado
    _saldo = 0; // underline na frente do nome do atributo tem como referência que o mesmo é privado e não deve ser alterado fora da classe

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