console.log('\n\n ARRAYS');
// Literale

let names: string[] = ['Anna', 'Bernhardt', 'Caroline']
let numbers: Array<number> = [34, 546.234, 143]
let mischmasch: Array<any> = [1, true, "text"]


// nicht generischer Konstruktor
let names2 = new Array()
let namesWithDefinedItemsAmount = new Array(4)

console.log('names2[0] :>> ', names2[0]); //undefined
console.log('typeof names2[0] :>> ', typeof names2[0]); //undefined

let names3 = new Array('Dagmar', 'Tristan', 'Vadzim')
console.log('typeof names3[0] :>> ', typeof names3[0]); //string


// generischen Konstruktor
let numbers2 = new Array<number>(3)
console.log('typeof numbers2[0] :>> ', typeof numbers2[0]); //undefined, obwohl Datentyp beim Konstruktor angegeben
console.log('numbers2 :>> ', numbers2); // [empty × 3]

let numbers3 = new Array<number>(345, 324, 234)
console.log('typeof numbers3[0] :>> ', typeof numbers3[0]); // number


// Eine Kollektion zu einem Array umwandeln
console.log('this.Array() :>> ', this.Array()); // hat mehrere nützliche Methoden

let myHTMLCollection = document.getElementsByTagName('li')
console.log('myHTMLCollection :>> ', myHTMLCollection); // HTMLCollection(3) [li, li, li]
console.log('this.HTMLCollection :>> ', this.HTMLCollection); // hat nur 2 Methoden
// in TS heißt diese Struktur HTMLCollectionOf<T>

let myNodeList = document.getElementsByName('elName')
console.log('myNodeList :>> ', myNodeList);
console.log('this.NodeList :>> ', this.NodeList); // hat weniger Methoden als Array
// in TS heißt diese Struktur NodeListOf<T>

// let arrayFromHTMLColl = [...[myHTMLCollection]] // array aus einem El
// let arrayFromHTMLColl = [...myHTMLCollection] // Type 'HTMLCollectionOf<HTMLLIElement>' is not an array type
// Funktioniert in JS aber nicht in TS

let arrayFromHTMLColl = Array.from(myHTMLCollection)
console.log('arrayFromHTMLColl :>> ', arrayFromHTMLColl); // (3) [li, li, li], also ein Array

// arrays haben map(), die HTMLCollection und NodeList nicht haben
// hier z.B. wird die Property innerText von den Array-Elementen ausgelesen
let liContents = arrayFromHTMLColl.map((item) => {
    return item.innerText
})
console.log('liContents :>> ', liContents); // (3) ["Lorem ipsum dolor sit.", "Quisquam minus nulla dolor.", "Assumenda eligendi eius voluptatibus?"]

let arrayFromNodeList = Array.from(myNodeList)
let elementsNodeNames = arrayFromNodeList.map((item) => {
    return item.nodeName
})
console.log('elementsNodeNames :>> ', elementsNodeNames); // (4) ["META", "H1", "H2", "SCRIPT"]


// Array of never: []

// Destructuring und Array
let [a, b] = [3, 4]
console.log('a :>> ', a);








