function triangulo (lado1,lado2,lado3) {
    return (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2 )
} ;
//console.log(triangulo(5,6,2));

function verificarTriangulo(lado1,lado2,lado3) {
    if (lado1==lado2==lado3){
        return "Equilátero"
    }
    if  (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        return "Isóceles "
    }
    else {return "Escaleno"}


}
const lado1 = 2
const lado2 = 2
const lado3 = 2
if(triangulo(lado1,lado2, lado3)){
    console.log(verificarTriangulo(lado1,lado2,lado3))
};