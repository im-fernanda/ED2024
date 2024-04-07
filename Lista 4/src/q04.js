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
    //console.log("\nVencedor(es) da Quina:", vencedoresQuina);

    return vencedoresSena.length > 0 || vencedoresQuina.length > 0;
}

//Código alternativo:

// import Conjunto from "../structures/Conjunto.js";
// export default function verificarVencedor(numerosSorteados, apostas){

//     const vencedoresSena = new Conjunto();
//     const vencedoresQuina = new Conjunto();
   
//     let count = 0;
//     let ind_sena, ind_quina;
//     for (let aposta of apostas) {
//         const acertos = new Conjunto();

//         for (let numero of aposta) {
//             if (numerosSorteados.has(numero)) {
//                 acertos.add(numero);
//             }
//         }

//         if (acertos.size() === 6) {
//             ind_sena = count;
//             vencedoresSena.add(aposta);
//         } else if (acertos.size() === 5) {
//             ind_quina = count;
//             vencedoresQuina.add(aposta);
//         }
//         count++;
//     }
//     return vencedoresSena.size() > 0 || vencedoresQuina.size() > 0;
// }