// function decodificar(arr){
//     const arrayInvertido = arr.reverse();
//     const mensaje = '';
//     for (let i = 0; i < arrayInvertido.length; i++){
//         if (arrayInvertido[i] !== '*'){
//             mensaje += arrayInvertido[i];
//         }
//     }
//     }
// return mensaje;

// const laClaveSecreta = ["s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"];
// const mensajeDecodificado = decodificar(laClaveSecreta);
// console.log(mensajeDecodificado);

function decodificarClaveSecreta(arr) {
    const arrInvertido = arr.reverse();
      let mensaje = '';
    for (let i = 0; i < arrInvertido.length; i++) {
      if (arrInvertido[i] !== '*') {
        mensaje += arrInvertido[i];
      }
    }
    return mensaje;
  }
  const claveSecreta = ["s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"];
  const mensajeDecodificado = decodificarClaveSecreta(claveSecreta);
  console.log(mensajeDecodificado); 
  