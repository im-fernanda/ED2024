import Lista from "../structures/Lista";

export default function substring(pos1, pos2, lista){
    // Verifica se os índices são válidos
    if (pos1 < 0 || pos1 >= lista.length() || pos2 < 0 || pos2 >= lista.length() || pos1 > pos2) {
        throw new Error("Índices inválidos");
    }

    let novaLista = new Lista();
    let atual = lista.searchForPos(pos1);

    // Itera sobre os nós da posição pos1 até a posição pos2
    for (let i = pos1; i <= pos2; i++) {
        novaLista.add(atual.dado); // Adiciona o dado do nó atual à nova lista
        atual = atual.proximo; // Move para o próximo nó
    }

    return novaLista.toString(); // Retorna a representação em string da nova lista
};