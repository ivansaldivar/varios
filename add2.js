function add2(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } 
        else {
            return x;
        }
    };
}

function add3(n) {
  sum = n;
  const proxy = new Proxy(function a () {}, {
    get (obj, key) {
      return () => sum;
    },
    apply (receiver, ...args) {
      sum += args[1][0];
      return proxy;
    },
  });
  return proxy
}

//Necesita () al final
console.log( add2(2)(5)(7)() );
console.log( add2(2)(5)() );

//Sin () al final
console.log( add3(2)(5)(7) );
console.log( add3(2)(5) );
