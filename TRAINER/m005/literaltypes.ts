console.log('\n\n LITERAL TYPES');

let normalString: string = 'wert von string variable'
normalString = 'ein anderer wert'

let cmVariable: 'cm'
// cmVariable = 'ein anderer Wert' // Type '"ein anderer Wert"' is not assignable to type '"cm"'
cmVariable = 'cm'
console.log('cmVariable :>> ', cmVariable);
console.log('typeof cmVariable :>> ', typeof cmVariable); // string

// Übung: nur 2 Events werden bei einer Eventvariable als Wert zugelassen
// 'change' und 'input'
// 15:15
