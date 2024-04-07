import Conjunto from "../structures/Conjunto.js";

export default function verificarVencedor(numerosSorteados, apostas){
    const vencedoresSena = []
    const vencedoresQuina = []
    let i = 0;

    for (let aposta of apostas) {  
        let acertos = []
        i++;
        
        for (let numero of aposta) {
            if (numerosSorteados.has(numero)) {
                acertos.push(numero);
            }
        }
        
        //Guardar o índice dos vencedores
        if (acertos.length === 6) {
            vencedoresSena.push(i); 
        } else if (acertos.length === 5) {
            vencedoresQuina.push(i);
        }
    }

    //console.log("\nVencedor(es) da Sena:", vencedoresSena);
    console.log("\nVencedor(es) da Quina:", vencedoresQuina);

    return vencedoresSena.length > 0 || vencedoresQuina.length > 0;
}

