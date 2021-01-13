console.log('\n\n OBJECTS');


// Literale
let myObject1 = {} // leeres Objekt
console.log('myObject1 :>> ', myObject1);

let myObject11 = {
    a: 'wert von a',
    b: 'wert von b'
}
console.log('myObject11.a :>> ', myObject11.a);


// Konstruktoren
let myObject2 = new Object()
console.log('myObject2 :>> ', myObject2);


// Destructuring
let myObjectXX = {
    c: 'wert von c',
    d: 'wert von d'
}
// let {a} = myObjectXX 
// die Dateien arrays.ts und objects.ts befinden sich im gleichen Scope
// variable 'a' ist schon besetzt
let {c} = myObjectXX
console.log('c :>> ', c);


// custom Objects
// Besonderheit von TS: Datentyp von 'this' muss noch angegeben werden
function Person(this: {firstName: string, lastName: string}, firstNameArg: string, lastNameArg: string) {
    this.firstName = firstNameArg
    this.lastName = lastNameArg
}
// let myPerson1 = Person('asdf', 'adsfg') // Fehler
// any wäre auch eine schnelle Lösung
// function Person2(this: any, firstNameArg: string, lastNameArg: string) {
//     this.firstName = firstNameArg
//     this.lastName = lastNameArg
// }
class Person3{
    firstName: string
    lastName: string
    constructor(firstNameArg: string, lastNameArg: string) {
       this.firstName = firstNameArg
       this.lastName = lastNameArg        
    }
}
let myPerson: any = new Person3('Max', 'Mustermann')
console.log('myPerson :>> ', myPerson);

// Besonderheit von TS: man hat Modifier, z.B. 'public'
// plus man hat eine verkürzte Schreibweise zum Anlegen von Properties
class Person4{
    constructor(public firstName: string, public lastName: string) {}
}
let myPerson4: Person4 = new Person4('Vorname', 'Nachname')



// Datentypen von Objects
let myObject5: Object = new Object() // als Datentyp können Objekte oder Klassen angegeben
let myObject6: object = new Object() // im Fall mit Objekt 'Object' gibt für sein Datentyp noch zusätzlich ein reserviertes Wort 'object'

console.log('typeof myObject5 :>> ', typeof myObject5); // object
console.log('typeof myObject6 :>> ', typeof myObject6); // object