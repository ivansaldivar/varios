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
console.log( add2(2)(5)(7)() );
console.log( add2(2)(5)() );
