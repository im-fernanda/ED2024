import Lista from "../structures/Lista";

export default function substring(pos1, pos2, lista){
    // Verifica se as posições são válidas
    if (pos1 < 0 || pos2 >= lista.length() || pos2 < 0 || pos1 >= lista.length()) {
        throw new Error("Posições inválidas");
    }

    let novaLista = new Lista();

    //ARRUMAR A PARTIR DAQUI
    
     // Itera sobre os nós da posição A até a posição B
    if(pos2 > pos1) {
         let atual = "";
         for (let i = pos1; i <= pos2; i++) {
            atual = lista.searchForPos(i);
            novaLista.add(atual.dado); // Adiciona o caractere atual à nova lista
            atual = atual.proximo; // Move para o próximo nó
        }
    }
    if (pos2 > pos1) {
        let atual = "";
        for (let i = pos1; i >= pos2; i++) {
            atual = lista.searchForPos(i);
            novaLista.add(atual.dado); 
            atual = atual.proximo; 
        }
    }

    let subString = novaLista.toString();
    return subString;
};
