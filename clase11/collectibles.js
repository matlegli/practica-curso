const fs = require('fs')
const path = require('path')
function figuras1(){
    const rutaArchivo = path.resolve(__dirname, 'figuras1.json')
    const figuras1File = fs.readFileSync(rutaArchivo, "utf-8")
    const figuras1Array = JSON.parse(figuras1File)
    return figuras1Array
}
    function figuras2(){
    const rutaArchivo = path.resolve(__dirname, 'figuras2.json')
    const figuras2File = fs.readFileSync(rutaArchivo, "utf-8")
    const figuras2Array = JSON.parse(figuras2File)
    return figuras2Array
}
function figuras3(){
    const rutaArchivo = path.resolve(__dirname, 'figuras3.json')
    const figuras3File = fs.readFileSync(rutaArchivo, "utf-8")
    const figuras3Array = JSON.parse(figuras3File)
    return figuras3Array
}

console.log(figuras1())
console.log(figuras2())
console.log(figuras3())