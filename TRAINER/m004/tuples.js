"use strict";
console.log('\n\n TUPLES');
// Tuple, de: Tupel
// Idee: irgendeine Struktur, wo ich die benötigten Infos zu einem Feiertag abspeichern kann
// Infos: Name vom Feiertag und Datum vom Feiertag
// andere uns bekannte Optionen, um solche Daten abzulegen
// Option1: Objekt Feiertag {name: string, datum: Date}, und ein Array davon
// Option2: Array von Arrays mit name, datum
// Option3: Tuples
var feiertag = ['Allerheiligen', new Date()];
console.log('feiertag :>> ', feiertag);
// INITIALISIEREN und ÄNDERN von Tupels
var passwords;
// passwords[0] // einzeln befüllen die Inhalte geht es nicht
passwords = ['Meier', 'e453f']; // der Wert muss gleich dem angegebenen Typ entsprechen
passwords[0] = 'Müller'; // Änderung von Inhalten über Index ist nur nach dem ersten Initialisieren möglich
console.log('passwords[0] :>> ', passwords[0]);
// Idee: ein Polygon per Script anlegen
// als Übung
var coordinate1 = [123, 45];
var coordinate2 = [23, 354];
var coordinate3 = [56, 76];
var coordinate4 = [300, 4];
var coordinate5 = [33, 58];
var myPolygon = document.createElement('polygon');
var stringForPolygon = "\n<polygon points=\"\n" + coordinate1 + "\n" + coordinate2 + "\n" + coordinate3 + "\n" + coordinate4 + "\n\" style=\"fill:lime;stroke:purple;stroke-width:1\" />\n";
// (myPolygon as SVGGeometryElement).points
var mySVG = document.getElementsByTagName('svg')[0];
mySVG.innerHTML = stringForPolygon;
// string vs String
// string ist primitive und String ist eine Objekt
// Datentyp von string-Variable ist string
// Datentyp von String-Variable ist object
