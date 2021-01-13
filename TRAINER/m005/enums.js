"use strict";
console.log('\n\n ENUMS');
// Ziel: einheitlicheit bei bestimmten Werten innerhalb von einem Team
var lengthUnit;
(function (lengthUnit) {
    lengthUnit[lengthUnit["cm"] = 0] = "cm";
    lengthUnit[lengthUnit["meter"] = 1] = "meter";
    lengthUnit[lengthUnit["kilometer"] = 2] = "kilometer";
    lengthUnit[lengthUnit["mile"] = 3] = "mile";
})(lengthUnit || (lengthUnit = {}));
var shiffGeschwindigkeitEinheit = lengthUnit.mile;
var autoGeschwindigkeitEinheit = lengthUnit.kilometer;
console.log('lengthUnit[0] :>> ', lengthUnit[0]); // cm
console.log('typeof lengthUnit[0] :>> ', typeof lengthUnit[0]); // string
// Die Indizes bei den enums dürfen angegeben werden
var cuttlery;
(function (cuttlery) {
    cuttlery[cuttlery["spoon"] = 1] = "spoon";
    cuttlery[cuttlery["fork"] = 10] = "fork";
    cuttlery[cuttlery["knife"] = 100] = "knife";
})(cuttlery || (cuttlery = {}));
// Zugriff auf die Indizes:
console.log('cuttlery["spoon"] :>> ', cuttlery["spoon"]); // 1
// Zugriff auf die Werte:
console.log('cuttlery[1] :>> ', cuttlery[10]); // fork
