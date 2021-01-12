// VOID

let myVoid: void
console.log(myVoid + 'test string') // undefined
myVoid = function giveVoid():void {
    console.log('ausgabe in giveVoid')
}()
console.log('myVoid', myVoid) // undefined
// myVoid = null // Type 'null' is not assignable to type 'void'

console.log('typeof myVoid', typeof myVoid) // undefined

//=============================================================
//=============================================================
// ANY

let myAny: any
myAny = 4
console.log('myAny', myAny)

myAny = 'string wert'
console.log('myAny', myAny)

// any akzeptiert Werte von allen Datentypen

let myString: string = 'wert von myString'

myAny = 4

// wie man sieht, ist Type Checking bei Zuweisungen mit any ausgeschaltet
myString = myAny
console.log('myString :>> ', myString) //4

//=============================================================
//=============================================================
// UNKNOWN

let myUnknown: unknown

// nimmt Werte von verschiedenen Datentypen an, wie any
myUnknown = '   wert von unknown   '
myUnknown = 345
myUnknown = true

// beinhaltet Type-Checking im Unterschied zu any
myAny = '   wert von unknown   '
console.log('myAny :>> ', myAny);
console.log('myAny.trim() :>> ', myAny.trim());
// console.log('myUnknown.trim() :>> ', myUnknown.trim()); // Object is of type 'unknown'.ts(2571)
console.log('myUnknown.trim() :>> ', (myUnknown as string).trim()); // es funktioniert nur mit type assertion


//=============================================================
//=============================================================
// NEVER

function neverEndingStory(argument: number):never {
    if (argument === 5)
    throw new Error('Error for fun')
    console.log('diese Zeile wird nie ausgeführt');
    return [][0] //das erste Element aus dem array von never
}

// console.log('neverEndingStory(5) :>> ', neverEndingStory(5));

try {
    neverEndingStory(5)
} catch (e) {
    console.log('e.message :>> ', e.message);
    console.log('funktion abgelaufen wie geplant');
}
finally {
    console.log('Versuch durchgeführt');
}

// if (typeof(neverEndingStory(5))=== typeof([][0])){
//     console.log('funktion abgelaufen wie geplant');
// }



