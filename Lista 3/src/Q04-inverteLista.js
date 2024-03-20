import Lista from "../structures/Lista";

export default function inverteLista(lista){
    let copia = new Lista();

    for(let i = 0; i <= lista.length(); i++){
        copia.append(lista.get(i))
    }

    let listaInvertida = new Lista();

    while(!copia.isEmpty()){
        listaInvertida.append(copia.removeLast().dado);
    }

    return listaInvertida.join(', ');
}
