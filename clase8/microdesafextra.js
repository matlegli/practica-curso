let arrayNumeros = [20,21,2,49]
function encontrarNumero(arrayNumeros, numero) {
    if(arrayNumeros.includes(numero)) {
        return "El valor " + numero + " se encuentra en el arreglo"
    }
    return "El valor " + numero + " no se encuentra en el arreglo"
}
console.log(encontrarNumero(arrayNumeros,"energia"))