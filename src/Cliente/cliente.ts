import { Pessoa } from "./cliente_interface";

export class Cliente implements Pessoa{
    nome: string  = ""
    idade: number = 0
    cpf: string = ""

    adotar(): void {
        
    }
    exibirDados(): void {
        throw new Error("Method not implemented.");
    }


}