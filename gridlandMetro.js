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
    
    var cellsGridLand = Array(n); //Arreglo de n posiciones (filas)
    var output = 0;
    var fila, pos1, pos2;
    
    for(let n_=0; n_ < n; n_++){
        cellsGridLand[n_] = new Array(m); //Cada fila tiene un arreglo de m posiciones (columnas)
    }
    //Inicializo la matriz de celdas n x m a 0 en cada posicion
    for(let n_=0; n_ < n; n_++){
        for(let l_=0; l_ < m; l_++){
            cellsGridLand[n_][l_]=0;
        }
    }
    
    //Cargo 1 en las posiciones entre las cuales estan los tracks
    for(let x=0; x < k; x++){
        fila = parseInt(track[x][0]);
        pos1 = parseInt(track[x][1]);
        pos2 = parseInt(track[x][2]);
        
        for(let l_=pos1-1; l_<=(pos2-1); l_++){
            cellsGridLand[fila-1][l_] = 1;    
        }   
    }

    //Contabilizo cuales cuantas posiciones quedaron con 0
    for(let n_=0; n_ < n; n_++){
        for(let l_=0; l_ < m; l_++){
            if(cellsGridLand[n_][l_]==0) output++;
        }
    }
    
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
