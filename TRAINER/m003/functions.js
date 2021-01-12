"use strict";
// Deklarationen von Funktionen
// Variante 1: Mit dem Schlüsselwort 'function'
function fName() {
    console.log('fName');
}
// Aufruf:
fName();
// Variante 2:
var fName2 = function () {
    console.log('fName2');
};
// Aufruf:
fName2();
// Variante 3:
var fName3 = function () {
    console.log('fName3');
};
// Aufruf:
fName3();
// Variante 4 (Deklaration und gleich Ausführen):
(function () {
    console.log('Deklaration von der anonymen Funktion wurde ausgeführt');
})();
// OPTIONALE ARGUMENTE
// Variante 1, mit Fragezeichen
// Fragezeichen bedeutet, dass das zweite Argument eventuell auch undefined sein wird
function fktMitOptArgs(str, separator) {
    console.log('str. :>> ', str.replace(':', '/'));
    console.log('separator :>> ', separator);
}
fktMitOptArgs('3:4'); // nur mit argument aufgerufen, weil das zweite Argument optional ist
fktMitOptArgs('4:2', 'leerzeichen');
// Variante 2, mit zugewiesenem Wert
function fktMitOptArgs2(str, separator) {
    if (separator === void 0) { separator = '/'; }
    console.log('str. :>> ', str.replace(':', separator));
    console.log('separator :>> ', separator);
}
fktMitOptArgs2('5:2');
fktMitOptArgs2('5:2', ' durch ');
// PFEILFUNKTIONEN
var arrowFunction = function (s, b) {
    console.log('arrowFunction works');
};
// Datentyp der Variable arrowFunction ist: (s: string, b: number) => void
// alle Funktionen / Funktionsvariablen können auch den Datentyp 'Function' haben
var anyFunction = function () { };
// GENERIC FUNCTIONS
// Funktion, die an einen bestimmten Datentyp angepasst ist, hat Nachteile
var myStringArray = ['a', 'b', 'c'];
var myNumberArray = [2, 3, 4];
function makeBigger(arr) {
    var biggerArray = arr.concat(arr);
    return biggerArray;
}
console.log('makeBigger(myStringArray) :>> ', makeBigger(myStringArray));
// oft braucht man Funktionen, die mit jedem Datentyp arbeiten können
// ein neuer Datentyp wird nicht helfen. Man kann nicht alles auflisten
// type universal = string | number | boolean | ...
function makeBiggerGeneric(arr) {
    var biggerArrayGeneric = arr.concat(arr);
    return biggerArrayGeneric;
}
//Stelle für Typ-Variable ist direkt vor den runden Klammern für Argumente
// der typische Name für den generischen Datentyp heißt 'T'
console.log('makeBiggerGeneric(myStringArray) :>> ', makeBiggerGeneric(myStringArray));
console.log('makeBiggerGeneric(myNumberArray) :>> ', makeBiggerGeneric(myNumberArray));
// UNBESTIMMTE ANZAHL VON ARGUMENTEN
// Idee: eine Funktion, die ihre Argumente addiert. Man weiß aber nicht, wie viele es sein werden
function addManyNumbers() {
    var argumentsList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argumentsList[_i] = arguments[_i];
    }
    var summe = 0;
    for (var index = 0; index < argumentsList.length; index++) {
        var element = argumentsList[index];
        summe = summe + element;
    }
    return summe;
}
console.log('addManyNumbers(3) :>> ', addManyNumbers(3));
console.log('addManyNumbers(3,4) :>> ', addManyNumbers(3, 4));
console.log('addManyNumbers(3,4,6) :>> ', addManyNumbers(3, 4, 6));
console.log('addManyNumbers(3,4,6,7,1245,346523) :>> ', addManyNumbers(3, 4, 6, 7, 1245, 346523));
