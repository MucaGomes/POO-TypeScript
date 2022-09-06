import { Animal } from "./animal";

export class Cavalo extends Animal{
    
    emitirSom(): void {
        console.log("Inharararam ")
    }

    correr(): void {
        console.log("Galopando.....")
    }

}