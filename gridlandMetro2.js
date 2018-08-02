'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the gridlandMetro function below.
// SOLUTION: 

function gridlandMetro(n, m, k, track) {
    
   var cellsGridLand = Array(k); //Arreglo de k posiciones (filas)
    var output = 0;
    var fila, pos1, pos2;
    var listaIndicesFilas_en_arreglo_K="";
    var filas_k = 0;
    
    //Creo un nuevo arreglo con la cantidad de filas distintas del índice 0 del arreglo k
    for(let n_=0; n_ < k; n_++){
        //Cada fila tiene un arreglo de m posiciones (columnas)
        cellsGridLand[n_] = new Array(m+1); 

        //console.log(track[n_][0]);
        if(listaIndicesFilas_en_arreglo_K.indexOf( (track[n_][0]).toString() ) == -1){
            cellsGridLand[filas_k][0] = track[n_][0];    
            filas_k++;
            listaIndicesFilas_en_arreglo_K = listaIndicesFilas_en_arreglo_K +
                                             "-"+ 
                                            (track[n_][0]).toString()+"-";
        }
    }
    //console.log("listaIndicesFilas_en_arreglo_K= "+listaIndicesFilas_en_arreglo_K);
    //console.log(cellsGridLand);
    
    //Cargo 1 en las posiciones entre las cuales estan los tracks
    var filasel;
    for(let x=0; x < k; x++){
        fila = parseInt(track[x][0]);
        pos1 = parseInt(track[x][1]);
        pos2 = parseInt(track[x][2]);
        
        for(let p=0; p < filas_k;p++){
            if(cellsGridLand[p][0]==fila){
             filasel=p;
             break;
            }
        }
        
        for(let l_=pos1; l_<=(pos2); l_++){
            cellsGridLand[filasel][l_] = 1;    
        }   
    }

    //console.log(cellsGridLand);
    //console.log("filas_k= "+filas_k);

    //Contabilizo cuales cuantas posiciones quedaron con valor 1
    for(let n_=0; n_ <filas_k; n_++){
        for(let l_=1; l_ < m+1; l_++){
            if(cellsGridLand[n_][l_]==1) output++;
        }
    }
    output = (n * m) - output;
    
    return output; 

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nmk = readLine().split(' ');

    const n = parseInt(nmk[0], 10);

    const m = parseInt(nmk[1], 10);

    const k = parseInt(nmk[2], 10);

    let track = Array(k);

    for (let i = 0; i < k; i++) {
        track[i] = readLine().split(' ').map(trackTemp => parseInt(trackTemp, 10));
    }

    //let result = track[0][2].toString();
    let result = gridlandMetro(n, m, k, track);

    ws.write(result + "\n");

    ws.end();
}
