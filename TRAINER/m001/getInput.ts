let myInput = document.getElementById('inputId')

// narrowing type

// Version 1
// entweder mit einer Typenabfrage als Bedingung bei if
// if (myInput instanceof HTMLInputElement)
//     console.log('myInput!.value', myInput!.value)

// Version 2
// mit type assertion in <>-Notation
console.log('myInput!.value', (<HTMLInputElement>myInput).value)
// mit type assertion mit as-Operator
console.log('myInput!.value', (myInput as HTMLInputElement).value)
