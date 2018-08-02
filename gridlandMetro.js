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
// Calculate total cells (n x m), and calculate cells occupied with tracks, 
// then return the rest of total cells minus cells occupied with tracks.
//
// SOLUCION: 
// calcule las celdas totales (n x m) y calcule las celdas ocupadas con las pistas,
// luego regrese el resto del total de celdas menos las celdas ocupadas con las pistas.
function gridlandMetro(n, m, k, track) {
    
    var lampostCellPossibles = n * m;
    var cellTracks = 0;

    for(let x=0; x < k; x++){
        cellTracks = cellTracks + parseInt(track[x][2])- parseInt(track[x][1])+1;
    }

    return (lampostCellPossibles-cellTracks);

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
