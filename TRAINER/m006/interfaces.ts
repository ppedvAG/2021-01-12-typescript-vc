console.log('\n\n INTERFACES');

// Interfaces definieren, welche Props und Methoden Instanzen von diesem Typ haben dürfen
// es gibt read-only Props
// und auch optionale Props/Members
interface Furniture {
    name: string
    readonly material: string
    height: number
    width: number
    depth: number
    // price: number
    setPrice?(newPrice: number): void
    // Methode ohne Körper, nur Name, Argumente und Rückgabetyp
}

// Interfaces werden in TS unter anderem auch als Datentypen verwendet
let myTable: Furniture = {
    name: 'table',
    material: 'wood',
    height: 100,
    width: 150,
    depth: 70    
}

// Check, ob material geändert werden kann
// myTable.material = 'metal' // Cannot assign to 'material' because it is a read-only property.