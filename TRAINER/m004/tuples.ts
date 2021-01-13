console.log('\n\n TUPLES');

// Tuple, de: Tupel

// Idee: irgendeine Struktur, wo ich die benötigten Infos zu einem Feiertag abspeichern kann
// Infos: Name vom Feiertag und Datum vom Feiertag
// andere uns bekannte Optionen, um solche Daten abzulegen
// Option1: Objekt Feiertag {name: string, datum: Date}, und ein Array davon
// Option2: Array von Arrays mit name, datum
// Option3: Tuples

let feiertag: [string, Date] = ['Allerheiligen', new Date()];

console.log('feiertag :>> ', feiertag);

// INITIALISIEREN und ÄNDERN von Tupels
let passwords: [string, string]
// passwords[0] // einzeln befüllen die Inhalte geht es nicht
passwords = ['Meier', 'e453f'] // der Wert muss gleich dem angegebenen Typ entsprechen
passwords[0] = 'Müller' // Änderung von Inhalten über Index ist nur nach dem ersten Initialisieren möglich
console.log('passwords[0] :>> ', passwords[0]);

// Idee: ein Polygon per Script anlegen
// als Übung
let coordinate1: [number, number] = [123, 45]
let coordinate2: [number, number] = [23, 354]
let coordinate3: [number, number] = [56, 76]
let coordinate4: [number, number] = [300, 4]
let coordinate5: [number, number] = [33, 58]

let myPolygon = document.createElement('polygon')
let stringForPolygon: string = `
<polygon points="
${coordinate1}
${coordinate2}
${coordinate3}
${coordinate4}
" style="fill:lime;stroke:purple;stroke-width:1" />
`
// (myPolygon as SVGGeometryElement).points
let mySVG = document.getElementsByTagName('svg')[0]
mySVG.innerHTML = stringForPolygon



// string vs String
// string ist primitive und String ist eine Objekt
// Datentyp von string-Variable ist string
// Datentyp von String-Variable ist object

