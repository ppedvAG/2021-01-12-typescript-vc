// Deklarationen von Funktionen

// Variante 1: Mit dem Schlüsselwort 'function'
function fName() {
    console.log('fName');
}
// Aufruf:
fName()

// Variante 2:
let fName2 = function () {
    console.log('fName2');
}
// Aufruf:
fName2()

// Variante 3:
let fName3 = () => {
    console.log('fName3');
}
// Aufruf:
fName3();

// Variante 4 (Deklaration und gleich Ausführen):
(function () {
    console.log('Deklaration von der anonymen Funktion wurde ausgeführt');
})()

// OPTIONALE ARGUMENTE
// Variante 1, mit Fragezeichen
// Fragezeichen bedeutet, dass das zweite Argument eventuell auch undefined sein wird
function fktMitOptArgs(str: string, separator?: string) {
    console.log('str. :>> ', str.replace(':', '/'));
    console.log('separator :>> ', separator);
}
fktMitOptArgs('3:4') // nur mit argument aufgerufen, weil das zweite Argument optional ist
fktMitOptArgs('4:2', 'leerzeichen')

// Variante 2, mit zugewiesenem Wert
function fktMitOptArgs2(str: string, separator: string = '/') {
    console.log('str. :>> ', str.replace(':', separator));
    console.log('separator :>> ', separator);
}
fktMitOptArgs2('5:2')
fktMitOptArgs2('5:2', ' durch ')


// PFEILFUNKTIONEN
let arrowFunction = (s: string, b: number): void => {
    console.log('arrowFunction works');
}
// Datentyp der Variable arrowFunction ist: (s: string, b: number) => void

// alle Funktionen / Funktionsvariablen können auch den Datentyp 'Function' haben
let anyFunction: Function = () => {}


// GENERIC FUNCTIONS

// Funktion, die an einen bestimmten Datentyp angepasst ist, hat Nachteile
let myStringArray: Array<string> = ['a', 'b', 'c']

let myNumberArray: Array<number> = [2, 3, 4]

function makeBigger(arr: Array<string>): Array<string>{
    let biggerArray = arr.concat(arr)
    return biggerArray
}

console.log('makeBigger(myStringArray) :>> ', makeBigger(myStringArray));


// oft braucht man Funktionen, die mit jedem Datentyp arbeiten können
// ein neuer Datentyp wird nicht helfen. Man kann nicht alles auflisten
// type universal = string | number | boolean | ...

function makeBiggerGeneric<genericType>(arr: Array<genericType>): Array<genericType>{ 
    let biggerArrayGeneric = arr.concat(arr)
    return biggerArrayGeneric
}
//Stelle für Typ-Variable ist direkt vor den runden Klammern für Argumente
// der typische Name für den generischen Datentyp heißt 'T'

console.log('makeBiggerGeneric(myStringArray) :>> ', makeBiggerGeneric(myStringArray));
console.log('makeBiggerGeneric(myNumberArray) :>> ', makeBiggerGeneric(myNumberArray));



// UNBESTIMMTE ANZAHL VON ARGUMENTEN
// Idee: eine Funktion, die ihre Argumente addiert. Man weiß aber nicht, wie viele es sein werden
function addManyNumbers(...argumentsList: Array<number>): number { //spread-Operator
    let summe: number = 0
    for (let index = 0; index < argumentsList.length; index++) {
        const element = argumentsList[index];
        summe = summe + element        
    }
    return summe
}

console.log('addManyNumbers(3) :>> ', addManyNumbers(3));
console.log('addManyNumbers(3,4) :>> ', addManyNumbers(3,4));
console.log('addManyNumbers(3,4,6) :>> ', addManyNumbers(3,4,6));
console.log('addManyNumbers(3,4,6,7,1245,346523) :>> ', addManyNumbers(3,4,6,7,1245,346523));