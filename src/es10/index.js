//array.flat() permite devolver una matriz con cualquier submatriz aplanada

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat())

// valor de profundidad 2
console.log(array.flat(2))



// flatMap
let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))


let hello = '     hello world';
console.log(hello.trimStart())


let hello = 'hello world      ';
console.log(hello.trimEnd())



try {
    
} catch {
    //el parametro error pasa pordefecto 
    error
}


// convertir un arreglo en un objeto
let entries = [['name', 'rusbel'], ['age', 32]];
console.log(Object.fromEntries((entries)));


let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description)