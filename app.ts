import { Cachorro } from "./src/Zoo/cachorro"
import { Cavalo } from "./src/Zoo/cavalo"
import { Preguica } from "./src/Zoo/preguica"

import PromptSync from "prompt-sync";
import { Cliente } from "./src/Cliente/cliente";
import { exibirAnimais } from "./funcoes";

console.clear()
const prompt = PromptSync()

let cachorro1 = new Cachorro(
    "Jake",
    2
)

let cavalo1 = new Cavalo(
    "Pé de Pano",
    4
)

let preguica1 = new Preguica(
    "Maria",
    5
)






console.log("==================================")
console.log("| Bem vindo ao Centro de Adoção  |")
console.log("Deseja se cadastrar? [S/N]")
console.log("==================================")
let resp = prompt("opção: ")

if (resp == "S" || resp == "s") {

    let nome = prompt("Digite seu nome: ")
    let idade = Number(prompt("Digite sua idade: "))
    let cpf = prompt("Digite seu CPF: ")

    let cliente1 = new Cliente()

    cliente1.nome = nome
    cliente1.idade = idade
    cliente1.cpf = cpf
    console.clear()

    while (true) {
        console.clear()
        console.log("=================================")
        console.log("|  Escolha o que deseja fazer   |")
        console.log("[1]Adotar um animal             |")
        console.log("[2]Exibir suas informações      |")
        console.log("[3]Sair")
        console.log("=================================")
        let resp = Number(prompt("opção: "))

        if (resp == 1) {
            exibirAnimais()
            let opcao = Number(prompt("opção: "))

            if (opcao == 1) {
                console.log("===================================")
                console.log("Parabens Você adotou um cachorro!!!")
                console.log("Cachorro: ")
                console.log("Nome: " + cachorro1.nome + "\n" + "Idade: " + cachorro1.idade)
                console.clear()

                while (true) {
                    console.log("===================================")
                    console.log("     O que deseja fazer agora?     ")
                    console.log("[1]Fazer o cachorro correr")
                    console.log("[2]Ver o som que o cachorro faz")
                    console.log("[3]Sair")
                    console.log("=================================  ")
                    let opcAnimal = Number(prompt("opção: "))

                    if (opcAnimal == 1) {
                        cachorro1.correr()
                        console.log("")
                    } else if (opcAnimal == 2) {
                        cachorro1.emitirSom()
                        console.log("")
                    } else if (opcAnimal == 3) {
                        console.log("")
                        break
                    }
                }

            } else if (opcao == 2) {
                console.clear()
                console.log("===================================")
                console.log("Parabens Você adotou um cavalo!!!")
                console.log("Cavalo: ")
                console.log("Nome: " + cavalo1.nome + "\n" + "Idade: " + cavalo1.idade)
                console.clear()

                while (true) {
                    console.log("===================================")
                    console.log("     O que deseja fazer agora?     ")
                    console.log("[1]Fazer o cavalo correr")
                    console.log("[2]Ver o som que o cavalo faz")
                    console.log("[3]Sair")
                    console.log("=================================  ")
                    let opcAnimal = Number(prompt("opção: "))

                    if (opcAnimal == 1) {
                        cavalo1.correr()
                        console.log("")
                    } else if (opcAnimal == 2) {
                        cavalo1.emitirSom()
                        console.log("")
                    } else if (opcAnimal == 3) {
                        console.log("")
                        break
                    }
                }

            } else if (opcao == 3) {
                console.clear()
                console.log("===================================")
                console.log("Parabens Você adotou uma preguiça!!!")
                console.log("Preguiça: ")
                console.log("Nome: " + preguica1.nome + "\n" + "Idade: " + preguica1.idade)

                while (true) {
                    console.log("===================================")
                    console.log("     O que deseja fazer agora?     ")
                    console.log("[1]Fazer a preguiça correr")
                    console.log("[2]Fazer a preguiça subir na árvore")
                    console.log("[3]Ver o som que a preguiça faz")
                    console.log("[4]Sair")
                    console.log("=================================  ")
                    let opcAnimal = Number(prompt("opção: "))

                    if (opcAnimal == 1) {
                        preguica1.correr()
                        console.log("")
                    } else if (opcAnimal == 2) {
                        preguica1.subirArvore()
                        console.log("")
                    } else if (opcAnimal == 3) {
                        preguica1.emitirSom()
                        console.log("")
                    } else if (opcAnimal == 4) {
                        console.log("")
                        break
                    }
                }

            }

        } else if (resp == 2) {
            console.clear()
            cliente1.exibirDados()
            break
        } else if (resp == 3) {
            break
        }

    }

} else {
    console.clear()
    console.log("Tenha um bom dia , e volte sempre!!!! ♥")
}


