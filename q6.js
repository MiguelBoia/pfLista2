const quantosIguais = (a, b, c) => {
    if (a==b && b==c){
        return "Todos iguais!" 
    }
    if (a != b && b!=c && a!=c){
        return "Todos diferentes."
    }
    else { return "Apenas um diferente."  }
};

const a = 1
const b = 2
const c = 1

console.log(quantosIguais(a,b,c));
