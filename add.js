//Esta función permite sumar dos parámetros en dos formas posibles:
// add(1,2)  == add(1)(2)
//
function add(x, y) {
  return x && y ? x + y : function (z) { return x + z; };
}

console.log( add(2,5) );
console.log( add(2)(5) );

/*
//Otro formato:

function add(x, y) {
  if (x && y) {
    return x + y;
  }
  else {
    return (function (z) {
      return x + z;
    });
  }
}

En sintaxis ES6 haces esto bonito y simple:

const add = (a, b) => a + b;

console.log(add(2, 5)); 
// output: 7

const add2 = a => b => a + b;

console.log(add2(2)(5));
*/
