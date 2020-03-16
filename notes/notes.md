#### Clase 1: Bienvenida al curso y qué es ECMAScript


ECMAScript es la especificacion del lenguaje propuresto por ECMA internacional, javascript es el lenguaje que usa esta especificación para trabajar sobre estas caracteristicas que van siendo añadidas año con año a partier del 2015 que es la version 6.

Desde el 2015 cada año se lanza una nueva version en Junio las cuales añaden nuevas caracteristicas.



#### Clase 2: Default Params y Concatenación

Antes que nada configura tu entorno

```
git init
npm init
```

Creamos la estructura inicial del proyecto `src/es6/index.js`

**Ejercicio 1 parametros en funciones**


```
// Parametros por defecto
function newFunction(name, age, country) {
    var name = name || 'rusbel';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// Version ES6
function newFunction2(name = 'rusbel', age=32, country='MX') {
  console.log(name, age, country);
}  

newFunction2();
newFunction2('ada', 35, 'Mich')
```

**Uso de Template Literals**
```
let hello = "Hello";
let world = "World"
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world} "2"`
console.log(epicPhrase2)
```


### Clase 3: LET y CONST, Multilínea, Spread Operator y Desestructuración


**uso de multilinea**
```
let lorem = "esta es la primer frase del \n"
  + "ejercicio de salto de linea"

let lorem2 = `Este es otro ejercicio usando
tempalte literals para multilinea
`

console.log(lorem)
console.log('')
console.log(lorem2)
```


**Destructuracion de objetos**

```
let person = {
  'name': 'rusbel',
  'age': 32,
  'country': 'MX'
}

console.log(person.name, person.age, person.country);

let { name, age, } = person;

console.log(name, age);
```

**Operador de propagación**
```
let team1 = ['rusbel', 'julian', 'ricardo'];
let team2 = ['oscar', 'yesica', 'camila'];


let education = ['david', ...team1, ...team2];

console.log(education);
```


**scopes de var y let**

```
{
  var globalVar = "Global var";
}

{
  let globalLet = "Global let";
  console.log(globalLet)
}

console.log(globalVar)
```

### Clase 4 Arrow Functions, Promesas y Parámetros en objetos

**Creacion de Objetos**
```
let name = 'oscar';
let age = 32;

// ES5
obj = { name: name, age: age };

// ES6
obj2 = { name, age }
console.log(obj2)
```

**Arrow fuction sitaxis reducina y this no vinculado**
```
const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));
```

**Promesas**
```
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
  ```

### Clase 5: Clases, Módulos y Generadores


// Clase 5 Clases, Módulos y Generadores

**Clases**
```
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
```

**modulos e imports**
```
import { hello } from './module';
hello()
```

**Generators**

`function*` nos indica que vamos a crear una funcion de tipo generator, llamamos al siguiente valor la iteración con `yield` como si fuera un while o un for loop pero step by step a medida que requerimos el nuevo valor en lugar de generar toda la serie como si quisieramos llenar un array.

```
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

```

** Clase 6 ¿Qué se implemento en ES7?

Cada año en junio sale una version nueva de JS, en esta version destaca el incorporar `includes` y hacer operaciones en forma exponencial

include trabaja sobre un array o un string, nos va a permitir saber si hay algun elemento dentro de este valor.


**built-in includes**
```
let numbers = [1,2,3,7,8];

if (numbers.includes(6)) {
    console.log('Si se encuentra el valor 7')
} else {
    console.log('No se encuentra lo que buscas')
}
```


**Operador Exponente**

```
let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result)
```

### ¿Qué se implemento en ES8?

El standar ES8 añade el metodo `object.entries` este devueve la clave y los valores de una matriz.

```
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    designer: 'Ana',
}

const entries = Object.entries(data);
console.log(entries); 
console.log(entries.length); 
```

Visualizamos la salida de esta manera
```
[Running] node "d:\Escuela de Javascript\Adicionales\Curso de ECMAScript 6+\src\es8\tempCodeRunnerFile.js"
[
  [ 'frontend', 'Oscar' ],
  [ 'backend', 'Isabel' ],
  [ 'designer', 'Ana' ]
]
```


```
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    designer: 'Ana',
}


const values = Object.values(data);
console.log(values);
console.log(values.length);

```
Nuestro output se muestrade esta manera
```
[ 'Oscar', 'Isabel', 'Ana' ]
3
```


**Padding** 

Tambien incorporamos metodos de padding `padStart` y `padEnd`
que nos permiten agregar espacios con relleno personalizado o en blanco segun sea la necesidad, siempre contando desde el indice 1 a diferencia de lenguajes como python que inicia desde 0 un string
```

const string = 'hello';
console.log(string.padStart(7, ' '));
console.log(string.padEnd(12, ' -----'));
console.log('coca'.padEnd(12, ' -----'));
```

### clase 8 Async Await


```
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
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
```
