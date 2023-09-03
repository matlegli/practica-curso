//objeto
let curso = {
//propiedad
    cantidadDeAlumnos : 32,
    docentes : ["Nacho","Javier"],
    horario : "de 19 a 21hs",
    notificaciones : function (){
        return "El horario de la cursada es " + this.horario;
    }

}
console.log(curso.notificaciones())

//funcion constructora
function Curso(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos
    this.docentes = docentes
    this.horario = horario
}

let cursoProgramacion = new Curso(50, ["Nacho","Javier"], "de 19 a 21")
let cursoMarketing = new Curso(45, ["Diego","Leticia"], "de 21 a 23")

console.log(cursoProgramacion)
console.log(cursoMarketing)