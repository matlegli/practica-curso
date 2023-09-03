
function alquiler (tipoDeVehiculo, diasDeAlquiler, sillaDeBebe) {
    let montoAPagar=0
    switch(tipoDeVehiculo){
        case "compacto":
       montoAPagar=diasDeAlquiler*14000;
       break
        case "mediano":
        montoAPagar=diasDeAlquiler*17000;
        break
        case "camioneta":
        montoAPagar=diasDeAlquiler*28000;
        break
        default:
        return "Ingrese un dato valido";
    
    }
    if(sillaDeBebe=="si"){
        montoAPagar=montoAPagar+(diasDeAlquiler*1200)
    }
    return "Estimado cliente: en base al tipo de vehiculo " + tipoDeVehiculo + " alquilado, considerando los " + diasDeAlquiler + " utilizados, el monto total a pagar es de " + montoAPagar

}

console.log(alquiler("compacto",3,"si"))