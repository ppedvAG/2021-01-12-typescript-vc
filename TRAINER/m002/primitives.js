"use strict";
// VOID
var myVoid;
console.log(myVoid + 'test string'); // undefined
myVoid = function giveVoid() {
    console.log('ausgabe in giveVoid');
}();
console.log('myVoid', myVoid); // undefined
// myVoid = null // Type 'null' is not assignable to type 'void'
console.log('typeof myVoid', typeof myVoid); // undefined
//=============================================================
//=============================================================
// ANY
var myAny;
myAny = 4;
console.log('myAny', myAny);
myAny = 'string wert';
console.log('myAny', myAny);
// any akzeptiert Werte von allen Datentypen
var myString = 'wert von myString';
myAny = 4;
// wie man sieht, ist Type Checking bei Zuweisungen mit any ausgeschaltet
myString = myAny;
console.log('myString :>> ', myString); //4
