function biciDatos(){
    const fs = require('fs')
    const bicicletasFile = fs.readFileSync("./bicicletas.json", "utf-8")
    const bicicletas = JSON.parse(bicicletasFile)
    return bicicletas

}

// console.log(biciDatos())

module.exports = biciDatos
