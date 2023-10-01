function palindrom(x) {

    var len = x.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (x[i] !== x[len - 1 - i]) {
            console.log('bukan palindorm');
            return false;
        }
    }
    console.log('palindorm');
    return true;
}
palindrom('malam');