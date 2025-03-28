namespace Escola{
    export abstract class Pessoa{
        _nome: string
        _anoNasc: number
        _cpf: string
        _endereco: string
        _telefone: string

        get nome(){
            return this._nome;
        }

        set nome(nome:string){
            this._nome=nome;
        }

        get anoNasc(){
            return this._anoNasc;
        }

        set anoNasc(anoNasc:number){
            this._anoNasc = anoNasc;
        }

        get cpf (){
            return this._cpf;
        }

        set cpf(cpf:string){
            this._cpf = cpf;
        }

        get endereco(){
            return this._endereco;
        }

        set endereco(endereco:string){
            this._endereco = endereco;
        }

        get telefone(){
            return this._telefone;
        }

        set telefone(telefone:string){
            this._telefone = telefone;
        }

        calcularIdade(anoAtual: number): number{
            return anoAtual - this._anoNasc;
        }
    }
}
