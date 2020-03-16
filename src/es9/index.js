//el operador de reposo permite extraer las propiedades de un objeto que aun no se ha construido

const obj = {
    name: 'rusbel',
    age: 32,
    country: 'MX',
};


// usaremos operador de reposo ({name, ...x}) para separar los elementos

let {
    name, // variable requerida
    ...all //operador de reposo
} = obj;

console.log(name)

let {
    country, // variable no requerida
    ...all //operador de reposo
} = obj;

console.log(all)

// De esta manera podemos destructurar una parte del objeto y quedarnos
// unicamente con la informacion que requerimos



// unir varias propiedades de objetos a un nuevo objeto con la propiedad de propagacion

const obj = {
    name: 'rusbel',
    age: 32,
};

const obj1 = {
    ...obj, //operador de propagacion
    country: 'MX',
};

console.log(obj1)



// Promise.finally


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello mundo'), 3000)
            : reject(new Error('Test Error'))
    })
};


helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))



// ES9 incorpora mejoras en las REGEX

// Creamos un regex para recibir fechas 2020/03/15

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-03-15');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)

//asi podemos trabajar desde un regex hacia un grupo