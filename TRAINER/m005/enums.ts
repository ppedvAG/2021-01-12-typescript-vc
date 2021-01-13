console.log('\n\n ENUMS');

// Ziel: einheitlicheit bei bestimmten Werten innerhalb von einem Team
enum lengthUnit {cm, meter, kilometer, mile}

let shiffGeschwindigkeitEinheit: lengthUnit = lengthUnit.mile
let autoGeschwindigkeitEinheit: lengthUnit = lengthUnit.kilometer

console.log('lengthUnit[0] :>> ', lengthUnit[0]); // cm
console.log('typeof lengthUnit[0] :>> ', typeof lengthUnit[0]); // string


// Die Indizes bei den enums dürfen angegeben werden
enum cuttlery {spoon = 1, fork = 10, knife = 100}
// Zugriff auf die Indizes:
console.log('cuttlery["spoon"] :>> ', cuttlery["spoon"]); // 1
// Zugriff auf die Werte:
console.log('cuttlery[1] :>> ', cuttlery[10]); // fork


