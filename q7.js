const menorValor = (a,b,c) => {
    if (a<b && c){
        return a
    }
    if (b<a && c ){
        return b
    }
    if (c<a && b){
        return c
    }
    else return a
}
console.log(menorValor(5,2,3));
