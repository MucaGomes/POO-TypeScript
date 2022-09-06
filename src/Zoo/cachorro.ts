import { Animal } from "./animal";

export class Cachorro extends Animal{
    
    emitirSom(): void {
        console.log("Au Au , Morde...")
    }
    correr(): void {
        console.log("Correndo como um cachorro e esbarrando em todos no caminho!! >:(")
    }
}