console.log('\n\n UNIONS');

let datum: string | Date

datum = new Date()
console.log('datum :>> ', datum);
console.log('typeof datum :>> ', typeof datum);

datum = '2021-01-13'
console.log('datum :>> ', datum);
console.log('typeof datum :>> ', typeof datum);

datum = new Date(datum)
console.log('datum :>> ', datum); // reservierter Wert 'Invalid Date' bei '13.01.2021'


// wird dieser Union-Type mehrmals im Projekt genutzt, kann man auch den entsprechenden Datentyp anlegen
type stringDateUnion = string | Date
let datum2: stringDateUnion;
