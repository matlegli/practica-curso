let deportista = {
    energia:100,
    experiencia:10,
    nombre:'Aimar',
    entrenarHoras: function(horas){
        this.energia -= horas * 5;
        this.experiencia += horas * 2;

    }
}
//console.log(deportista.entrenarHoras)
console.log(deportista.energia)
console.log(deportista.experiencia)
deportista.entrenarHoras(5)
console.log(deportista.energia)
console.log(deportista.experiencia)