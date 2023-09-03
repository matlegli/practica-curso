function asientosDisponibles(disponibles, aOcupar){
    if (disponibles.includes(aOcupar)){
        return "Felicitaciones, el asiento número " + aOcupar + " está disponible";
        }
        return "Lo sentimos, el asiento número " + aOcupar + " está ocupado, pero aún quedan " + disponibles.length + " asientos disponibles";      
}