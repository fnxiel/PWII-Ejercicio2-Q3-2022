
const arregloNumeros = []

arregloNumeros.push(5) //0
arregloNumeros.push(6) //1
arregloNumeros.push(7) //2
arregloNumeros.push(8) //3

//Funcion map
/*
//1
for (let i = 0; i < arregloNumeros.length; i++) {
    console.log(arregloNumeros[i])   
}

//2
function imprimirNumero(numero){
    console.log(numero)   
}
arregloNumeros.map(imprimirNumero)

//3
arregloNumeros.map(function (numero){
    console.log(numero)   
})

//4
arregloNumeros.map(numero => console.log(numero))
*/

//Funcion forEach
//arregloNumeros.forEach(numero => console.log(numero))


//Diferencia entre map y forEach
//var resultado = arregloNumeros.forEach(numero => numero*2)
//var resultado2 = arregloNumeros.map(numero => `El doble de ${numero} es ${numero*2}`)
var resultado3 = arregloNumeros.map(numero => {    
    return {
        "Multiplicacion2": `El doble de ${numero} es ${numero*2}`,
        "Multiplicacion3": `El triple de ${numero} es ${numero*3}`,
        "Multiplicacion4": `El cuadruple de ${numero} es ${numero*4}`,
    }
})

//console.log(resultado)
//console.log(resultado2)
console.log(resultado3)