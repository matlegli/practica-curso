function sumatoriaBajoImporte(importes){
    let suma = 0
    for (let i = 0; i > importes.length; i++)
        if (importes[i] > 0 && importes[i] <= 1000){
          return  suma + importes[i]
        }
        }
console.log(sumatoriaBajoImporte(100,200,250,-100,1030))