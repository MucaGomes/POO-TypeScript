import { Pessoa } from "./cliente_interface";

export class Cliente implements Pessoa{
    nome: string  = ""
    idade: number = 0
    cpf: string = ""
        
    exibirDados(): void {
        console.log("Nome: " + this.nome)
        console.log("Idade: " + this.idade)
        console.log("CPF: " + this.cpf)

    }


}