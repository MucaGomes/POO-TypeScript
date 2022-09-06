import { Animal } from "./animal";

export class Preguica extends Animal{
    
    emitirSom(): void {
        console.log("AAaaan, aaAAaaA , pula da árvore...")
        
    }

    correr(): void {
        console.log("Ela não corre , mas rasteja")
    }
    
    subirArvore(): void {
        console.log("Subindo na árvoe como uma preguiça")
    }


}