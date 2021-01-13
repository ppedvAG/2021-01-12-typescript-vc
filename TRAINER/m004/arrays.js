"use strict";
console.log('\n\n ARRAYS');
// Literale
var names = ['Anna', 'Bernhardt', 'Caroline'];
var numbers = [34, 546.234, 143];
var mischmasch = [1, true, "text"];
// nicht generischer Konstruktor
var names2 = new Array();
var namesWithDefinedItemsAmount = new Array(4);
console.log('names2[0] :>> ', names2[0]); //undefined
console.log('typeof names2[0] :>> ', typeof names2[0]); //undefined
var names3 = new Array('Dagmar', 'Tristan', 'Vadzim');
console.log('typeof names3[0] :>> ', typeof names3[0]); //string
// generischen Konstruktor
var numbers2 = new Array(3);
console.log('typeof numbers2[0] :>> ', typeof numbers2[0]); //undefined, obwohl Datentyp beim Konstruktor angegeben
console.log('numbers2 :>> ', numbers2); // [empty × 3]
var numbers3 = new Array(345, 324, 234);
console.log('typeof numbers3[0] :>> ', typeof numbers3[0]); // number
// Eine Kollektion zu einem Array umwandeln
console.log('this.Array() :>> ', this.Array()); // hat mehrere nützliche Methoden
var myHTMLCollection = document.getElementsByTagName('li');
console.log('myHTMLCollection :>> ', myHTMLCollection); // HTMLCollection(3) [li, li, li]
console.log('this.HTMLCollection :>> ', this.HTMLCollection); // hat nur 2 Methoden
// in TS heißt diese Struktur HTMLCollectionOf<T>
var myNodeList = document.getElementsByName('elName');
console.log('myNodeList :>> ', myNodeList);
console.log('this.NodeList :>> ', this.NodeList); // hat weniger Methoden als Array
// in TS heißt diese Struktur NodeListOf<T>
// let arrayFromHTMLColl = [...[myHTMLCollection]] // array aus einem El
// let arrayFromHTMLColl = [...myHTMLCollection] // Type 'HTMLCollectionOf<HTMLLIElement>' is not an array type
// Funktioniert in JS aber nicht in TS
var arrayFromHTMLColl = Array.from(myHTMLCollection);
console.log('arrayFromHTMLColl :>> ', arrayFromHTMLColl); // (3) [li, li, li], also ein Array
// arrays haben map(), die HTMLCollection und NodeList nicht haben
// hier z.B. wird die Property innerText von den Array-Elementen ausgelesen
var liContents = arrayFromHTMLColl.map(function (item) {
    return item.innerText;
});
console.log('liContents :>> ', liContents); // (3) ["Lorem ipsum dolor sit.", "Quisquam minus nulla dolor.", "Assumenda eligendi eius voluptatibus?"]
var arrayFromNodeList = Array.from(myNodeList);
var elementsNodeNames = arrayFromNodeList.map(function (item) {
    return item.nodeName;
});
console.log('elementsNodeNames :>> ', elementsNodeNames); // (4) ["META", "H1", "H2", "SCRIPT"]
// Array of never: []
// Destructuring und Array
var _a = [3, 4], a = _a[0], b = _a[1];
console.log('a :>> ', a);
