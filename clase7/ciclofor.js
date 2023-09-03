// for(let i = 0; i<=10; i++){
//     console.log('El valor de i es igual a ' + i)
// }
// function imprimirAzul4(){
//     for (let i=0; i<4; i++){
//      console.log("Azul");
// }
// }
// imprimirAzul4()

function noParesDeContarImparesHasta(numero) {
    let contadorImpares = 0;
   for (let i = 1; i <=numero; i++) {  
       if (i % 2 !== 0)
       contadorImpares++
   }   
   return contadorImpares;
}
console.log(noParesDeContarImparesHasta(6))

