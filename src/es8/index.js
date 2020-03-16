//es8 anade object.entries
// devueve la clave y los valores de una matriz un array

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    designer: 'Ana',
}

const entries = Object.entries(data);
console.log(entries); 
console.log(entries.length); 
console.log(entries.length); 

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    designer: 'Ana',
}


const values = Object.values(data);
console.log(values);
console.log(values.length);



//padding 
const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '-----'))
