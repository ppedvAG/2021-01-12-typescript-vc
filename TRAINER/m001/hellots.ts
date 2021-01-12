let myHTMLElement = document.getElementById('divId')
// (method) Document.getElementById(elementId: string): HTMLElement | null
// im Unterschied zu js hat man hier als Rückgabe einen Uniontype mit null-Option
console.log('myHTMLElement', myHTMLElement)

// Versuch 1, textContent zu setzen
// myHTMLElement.textContent = 'Inhalt für divId' //Fehler Object is possibly 'null'.

// Versuch 2
// if (myHTMLElement === HTMLElement) { // This condition will always return 'false' since the types 'HTMLElement | null' and '{ new (): HTMLElement; prototype: HTMLElement; }' have no overlap.
    // myHTMLElement.textContent = 'Inhalt für divId'

// }

// Versuch 3
// if (myHTMLElement instanceof HTMLElement) { // funktioniert 
//     myHTMLElement.textContent = 'Inhalt für divId'
// }

// Versuch 4
let myHTMLElementOhneNull = myHTMLElement!
//mit dem Operator '!' entfernt man die null-Option vom Datentyp 'HTMLElement | null'
myHTMLElementOhneNull.textContent = 'Inhalt für divId' // funktioniert

//tsconfig.json mit watch-Option versehen
console.log('test watch bei tsc')
console.log('test compileOnSave')
console.log('test tsc -w') // funktioniert
