"use strict";
console.log('\n\n UNIONS');
var datum;
datum = new Date();
console.log('datum :>> ', datum);
console.log('typeof datum :>> ', typeof datum);
datum = '2021-01-13';
console.log('datum :>> ', datum);
console.log('typeof datum :>> ', typeof datum);
datum = new Date(datum);
console.log('datum :>> ', datum); // reservierter Wert 'Invalid Date' bei '13.01.2021'
var datum2;
