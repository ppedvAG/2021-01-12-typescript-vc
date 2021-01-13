"use strict";
console.log('\n\n INTERFACES');
// Interfaces werden in TS unter anderem auch als Datentypen verwendet
var myTable = {
    name: 'table',
    material: 'wood',
    height: 100,
    width: 150,
    depth: 70
};
// Check, ob material geändert werden kann
// myTable.material = 'metal' // Cannot assign to 'material' because it is a read-only property.
