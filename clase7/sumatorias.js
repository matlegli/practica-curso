let unPeriodo = [100, 20, 0, -10, 10]
function saldoMesesConGanancia(unPeriodo) {
    let saldosPositivos = [];
    for (let i = 0; i < unPeriodo.length;i++) {
     if (unPeriodo[i] > 0) {
    saldosPositivos.push(unPeriodo[i])
     }
    }
    return saldosPositivos;
  }
saldosPositivos = saldoMesesConGanancia(unPeriodo)
console.log(saldosPositivos)