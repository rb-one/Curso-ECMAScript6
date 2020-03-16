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
console.log(string.padStart(7, ' '));
console.log(string.padEnd(12, ' -----'));
console.log('coca'.padEnd(12, ' -----'));



//clase 8 Async Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello mundo'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);       
    } catch (error) {
        console.log(error)
        
    }
}

anotherFunction()
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '-----'))
