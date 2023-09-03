function reporteDePasajeros(estaciones){
  let resultado = [];
  let pasajeros = 0
for (let i = 0; i <= estaciones; i++){
    if (i >= 5) {
        pasajeros = 200 + i * 20 + 20;        
    }
    else{
        pasajeros = 200 + i * 20;
    }
    resultado.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
}
return resultado
}

console.log(reporteDePasajeros(2))