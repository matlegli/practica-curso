const autosImportados = require('./autos');

const concesionaria = {
    autos: autosImportados,
   buscarAuto: function(patente) {
      const auto = this.autos.find((auto) =>{
         return auto.patente === patente;
      });
      if (auto === undefined){
         return null;
      }
         return auto;
   },
   venderAuto:function(patente){
      const auto = this.buscarAuto(patente);
      if (auto !==null){
         auto.vendido = true;
      }
   },
   autosParaLaVenta: function(){
      return autos = this.autos.filter((auto) => auto.vendido=== false);
   },
   autosNuevos: function(){
    const autos =  this.autosParaLaVenta();
    return autos.filter((auto) => auto.km < 100);
   },
   listaDeVentas: function(){
      const autos = this.autos.filter((auto) => auto.vendido === true);
      return autos.map((auto) => auto.precio);
   },
   totalDeVentas: function(){
      const listaDeVentas = this.listaDeVentas();
      return listaDeVentas.reduce((total,precio) => total + precio,0);
   }
}
