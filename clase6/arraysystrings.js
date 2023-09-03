// Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:
// 1. Un texto.
// 2. La palabra que vamos a buscar para reemplazar.
// 3. La palabra que vamos a usar para reemplazar.
// La función deberá devolver el texto con la palabra reemplazada.

function reemplazoFastFast(texto,palabraBuscar,palabraReemplazar){
    return texto.replace(palabraBuscar,palabraReemplazar)

}
console.log(reemplazoFastFast("Este es un texto","texto","tema"))

function menciona(texto,palabra){
   if  (texto.indexOf(palabra) != -1)
   return true
    else{
    return false
    }
}

console.log(menciona("texto largo","enano"))