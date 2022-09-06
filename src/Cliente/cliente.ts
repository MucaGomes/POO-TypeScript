import { Pessoa } from "./cliente_interface";

export class Cliente implements Pessoa{
    nome: string
    idade: number 
    cpf: string 

    constructor(
        nome : string,
        idade: number,
        cpf: string
    ){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }
        
    exibirDados(): void {
        console.log("Nome: " + this.nome)
        console.log("Idade: " + this.idade)
        console.log("CPF: " + this.cpf)

    }


}