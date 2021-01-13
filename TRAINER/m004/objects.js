"use strict";
console.log('\n\n OBJECTS');
// Literale
var myObject1 = {}; // leeres Objekt
console.log('myObject1 :>> ', myObject1);
var myObject11 = {
    a: 'wert von a',
    b: 'wert von b'
};
console.log('myObject11.a :>> ', myObject11.a);
// Konstruktoren
var myObject2 = new Object();
console.log('myObject2 :>> ', myObject2);
// Destructuring
var myObjectXX = {
    c: 'wert von c',
    d: 'wert von d'
};
// let {a} = myObjectXX 
// die Dateien arrays.ts und objects.ts befinden sich im gleichen Scope
// variable 'a' ist schon besetzt
var c = myObjectXX.c;
console.log('c :>> ', c);
// custom Objects
// Besonderheit von TS: Datentyp von 'this' muss noch angegeben werden
function Person(firstNameArg, lastNameArg) {
    this.firstName = firstNameArg;
    this.lastName = lastNameArg;
}
// let myPerson1 = Person('asdf', 'adsfg') // Fehler
// any wäre auch eine schnelle Lösung
// function Person2(this: any, firstNameArg: string, lastNameArg: string) {
//     this.firstName = firstNameArg
//     this.lastName = lastNameArg
// }
var Person3 = /** @class */ (function () {
    function Person3(firstNameArg, lastNameArg) {
        this.firstName = firstNameArg;
        this.lastName = lastNameArg;
    }
    return Person3;
}());
var myPerson = new Person3('Max', 'Mustermann');
console.log('myPerson :>> ', myPerson);
// Besonderheit von TS: man hat Modifier, z.B. 'public'
// plus man hat eine verkürzte Schreibweise zum Anlegen von Properties
var Person4 = /** @class */ (function () {
    function Person4(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person4;
}());
var myPerson4 = new Person4('Vorname', 'Nachname');
// Datentypen von Objects
var myObject5 = new Object(); // als Datentyp können Objekte oder Klassen angegeben
var myObject6 = new Object(); // im Fall mit Objekt 'Object' gibt für sein Datentyp noch zusätzlich ein reserviertes Wort 'object'
console.log('typeof myObject5 :>> ', typeof myObject5); // object
console.log('typeof myObject6 :>> ', typeof myObject6); // object
