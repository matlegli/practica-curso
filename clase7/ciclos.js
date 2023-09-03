let operacionesBancarias = [100,50,-50,-20];
function saldo(operacionesBancarias) {
   let saldoDepositos = 0;
   let retiros = 0;
   let saldoActual = 0;
    for (let i = 0; i <= operacionesBancarias.length; i++) {
     if(operacionesBancarias[i] > 0){
        saldoDepositos = saldoDepositos + operacionesBancarias[i];
     }
   }
return [saldoDepositos,retiros,saldoActual]
}
console.log(saldo(operacionesBancarias))
