function triangulo (lado1,lado2,lado3) {
    return (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2 )
} ;
console.log(triangulo(2,2,2));

function verificarTriangulo(lado1,lado2,lado3) {
    if (lado1==lado2 && lado2==lado3){
        return "Equilátero"
    }
    if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        return "Escaleno "
    }
    else {return "Isóceles"}


}
const lado1 = 3
const lado2 = 3
const lado3 = 3
if(triangulo(lado1,lado2,lado3)){
    console.log(verificarTriangulo(lado1,lado2,lado3))
};