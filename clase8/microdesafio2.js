let GrdeHtml5 = "30 45 25 34 18 23 16 50 72 70"
let GrdeCss3 = "50 45 71 34 23 45 65 75 63 43 74 70"
let GrdeJavascript= "70 65 58 45 23 57 34 17 72"
let GrdeNodejs = "45 56 73 34 65 72 70 32"

let arrayNodejs = GrdeNodejs.split(" ")
let arrayGrdeCss3 = GrdeCss3.split(" ")
let arrayGrdeJavascript = GrdeJavascript.split(" ")
let arrayGrdeHtml5 = GrdeHtml5.split(" ")

function promedioGraduados(arrayGrdeCss3,arrayGrdeHtml5,arrayGrdeJavascript,arrayNodejs,promedioElegido){
    if (promedioElegido === 1) {
        let resultado = 0
        for (let i = 0; i < arrayGrdeHtml5.length; i++) {
            resultado += Number(arrayGrdeHtml5[i]);        }
        return (resultado / arrayGrdeHtml5.length)
    } 
   else if (promedioElegido === 2) {
        let resultado = 0
        for (let i = 0; i < arrayGrdeCss3.length; i++) {
            resultado += Number(arrayGrdeCss3[i]);
        }
        return (resultado / arrayGrdeCss3.length)
    }
    else if (promedioElegido === 3) {
        let resultado = 0
        for (let i = 0; i < arrayGrdeJavascript.length; i++) {
            resultado += Number(arrayGrdeJavascript[i]);
        }
        return (resultado / arrayGrdeJavascript.length)
    } 
    else if (promedioElegido === 4) {
        let resultado = 0
        for (let i = 0; i < arrayNodejs.length; i++) {
            resultado += Number(arrayNodejs[i]);
        }
        return (resultado / arrayNodejs.length)
    } 
    return console.log("Elegir un numero entre el 1 y el 4 ")
}

console.log(promedioGraduados(arrayGrdeCss3,arrayGrdeHtml5,arrayGrdeJavascript,arrayNodejs,5))