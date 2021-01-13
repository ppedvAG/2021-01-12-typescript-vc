// selektieren Sie die Elemente in der HTML Datei, die ein ß haben
// ß muss durch ss ersetzt werden

// die Sammlung von Elemente muss mit for-each durchiteriert werden
// denkt an die string-Methoden wie find() replaceAt(), replace()


// // Versuch, alle HTML tags von Document zu selektieren
// let rootNode = document.getRootNode();
// console.log('rootNode :>> ', rootNode);

// let children = rootNode.childNodes
// console.log('children :>> ', children);

// // Tristan
// document.getElementsByTagName('*')


let myStreets = document.getElementsByTagName('li')

let arrayFromStreetsColl = Array.from(myStreets)

function replaceLetter(arrayFromStreetsColl2: any[]) {
    arrayFromStreetsColl2.forEach(element => {
        let text = element.innerText
        console.log('text :>> ', text);
        return text.replace('ß', 'ss')
    }​​);
    // forEach() ändert das Array nicht, an welchem es ausgeführt wurde
    console.log('arrayFromStreetsColl2 :>> ', arrayFromStreetsColl2);

    let arrayFromStreetsColl3 = arrayFromStreetsColl2.map(element => {
        let text = element.innerText
        console.log('text :>> ', text);
        return text.replace('ß', 'ss')
    })
    console.log('arrayFromStreetsColl3 :>> ', arrayFromStreetsColl3);
    // return arrayFromStreetsColl2
    return arrayFromStreetsColl3
}​​

// replaceLetter(arrayFromStreetsColl)
// console.log('replaceLetter(arrayFromStreetsColl) :>>', replaceLetter(arrayFromStreetsColl))

// console.log('arrayFromStreetsColl :>>', arrayFromStreetsColl) // das ursprüngliche Array von Elemente beinhaltet die alten Strings

// die alten Strings durch neue ersetzen
let replacedText = replaceLetter(arrayFromStreetsColl)
for (let index = 0; index < arrayFromStreetsColl.length; index++) {
    arrayFromStreetsColl[index].innerText = replacedText[index];    
}
console.log('arrayFromStreetsColl :>> ', arrayFromStreetsColl);
