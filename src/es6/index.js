// Parametros por defecto
function newFunction(name, age, country) {
  var name = name || 'rusbel';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}

//es6 
function newFunction2(name = 'rusbel', age = 32, country = 'MX') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('ada', 35, 'Mich')


//Template Literals

let hello = "Hello";
let world = "World"
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world} "2"`
console.log(epicPhrase2)


// uso de multilinea
let lorem = "esta es la primer frase del \n"
  + "ejercicio de salto de linea"

let lorem2 = `Este es otro ejercicio usando
tempalte literals para multilinea
`

console.log(lorem)
console.log('')
console.log(lorem2)



// Destructuracion de objetos
let person = {
  'name': 'rusbel',
  'age': 32,
  'country': 'MX'
}

console.log(person.name, person.age, person.country);

let { name, age, } = person;

console.log(name, age);



// Operador de propagación.
let team1 = ['rusbel', 'julian', 'ricardo'];
let team2 = ['oscar', 'yesica', 'camila'];


let education = ['david', ...team1, ...team2];

console.log(education);


//scopes de var y let
{
  var globalVar = "Global var";
}


{
  let globalLet = "Global let";
  console.log(globalLet)
}

console.log(globalVar)


// Clase 4 Arrow Functions, Promesas y Parámetros en objetos

// Creacion de Objetos
let name = 'oscar';
let age = 32;

// ES5
obj = { name: name, age: age };

// ES6
obj2 = { name, age }
console.log(obj2)


//  Arrow fuction sitaxis reducina y this no vinculado
const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

// Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    let state = false
    if (state) {
      resolve('Hey!!');
    } else {
      reject('Ups Promise rejected!!')
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('hola'))
  .catch(error => console.log(error));

// Clase 5 Clases, Módulos y Generadores

// **clases**
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));


// modulos e imports
import { hello } from './module';
hello()


//generators*
function* helloWorld() {
 if (true) {
   yield 'hello, ';
 }
 if (true) {
   yield 'World'
 }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
