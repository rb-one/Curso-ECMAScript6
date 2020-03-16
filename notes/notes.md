
# Curso de ECMAScript 6+

## Tabla de Contenido
  <hr>

- [Curso de ECMAScript 6+](#curso-de-ecmascript-6)
  - [Tabla de Contenido](#tabla-de-contenido)
    - [Clase 1: Bienvenida al curso y qué es ECMAScript](#clase-1-bienvenida-al-curso-y-qu%c3%a9-es-ecmascript)
    - [Clase 2: Default Params y Concatenación](#clase-2-default-params-y-concatenaci%c3%b3n)
    - [Clase 3: LET y CONST, Multilínea, Spread Operator y Desestructuración](#clase-3-let-y-const-multil%c3%adnea-spread-operator-y-desestructuraci%c3%b3n)
    - [Clase 4 Arrow Functions, Promesas y Parámetros en objetos](#clase-4-arrow-functions-promesas-y-par%c3%a1metros-en-objetos)
    - [Clase 5: Clases, Modulos y Generadores](#clase-5-clases-modulos-y-generadores)
    - [Clase 6 ¿Que se implemento en ES7?](#clase-6-%c2%bfque-se-implemento-en-es7)
    - [Clase 7: ¿Que se implemento en ES8?](#clase-7-%c2%bfque-se-implemento-en-es8)
    - [clase 8 Async Await](#clase-8-async-await)
    - [Clase 9¿Que se implemento en ES9?](#clase-9%c2%bfque-se-implemento-en-es9)
    - [Clase 10 ¿Que se implemento en ES10?](#clase-10-%c2%bfque-se-implemento-en-es10)
    - [Clase 11: TC39 y Cierre del curso](#clase-11-tc39-y-cierre-del-curso)


### Clase 1: Bienvenida al curso y qué es ECMAScript

ECMAScript es la especificacion del lenguaje propuresto por ECMA internacional, javascript es el lenguaje que usa esta especificación para trabajar sobre estas caracteristicas que van siendo añadidas año con año a partier del 2015 que es la version 6.

Desde el 2015 cada año se lanza una nueva version en Junio las cuales añaden nuevas caracteristicas.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


### Clase 2: Default Params y Concatenación

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

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


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

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


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

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Clase 5: Clases, Modulos y Generadores

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
<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Clase 6 ¿Que se implemento en ES7?

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

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


### Clase 7: ¿Que se implemento en ES8?

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
<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

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


### Clase 9¿Que se implemento en ES9?


**Operador de reposo**
Es incorpora el operador de reposo permite extraer las propiedades de un objeto que aun no se ha construido

```
const obj = {
    name: 'rusbel',
    age: 32,
    country: 'MX',
};


// operador de reposo ({name, ...x}) para separar los elementos de un objeto


// Ejemplo 1
let {
    name, // variable requerida
    ...all //operador de reposo
} = obj;

console.log(name)


// Ejemplo 2
let {
    country, // variable no requerida
    ...all //operador de reposo
} = obj;

console.log(all)
```
De esta manera podemos destructurar una parte del objeto y quedarnos unicamente con la informacion que requerimos.


**Propiedad de Propagacion**
unir varias propiedades de objetos a un nuevo objeto con la propiedad de propagacion

```
const obj = {
    name: 'rusbel',
    age: 32,
};

const obj1 = {
    ...obj, // operador de propagacion
    country: 'MX',
};

console.log(obj1)

```

resultado

```
{ name: 'rusbel', age: 32, country: 'MX' }
````



**Promise.finally**

Incorpora una clausula finally en el manejo de una promesa que nos permite incorporar una acción adicional cuando esta termina, en este caso indicar que finalizó.


```
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
    // la arrow funcion me permite realizar de cualquier accion

```
[output]

```
[Running] node "d:\Escuela de Javascript\Adicionales\Curso de ECMAScript 6+\src\es9\tempCodeRunnerFile.js"
Hello mundo
Finalizado
```


**ES9 incorpora mejoras en las REGEX**

Creamos un regex para recibir fechas 2020/03/15
```
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-03-15');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
```

[output]
```
[Running] node "d:\Escuela de Javascript\Adicionales\Curso de ECMAScript 6+\src\es9\tempCodeRunnerFile.js"
2020 03 15
```
Así podemos trabajar desde un regex hacia un grupo

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

### Clase 10 ¿Que se implemento en ES10?

**array.flat()** permite devolver una matriz con cualquier submatriz aplanada
```
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat())
```
[output]

```
[Running] node "d:\Escuela de Javascript\Adicionales\Curso de ECMAScript 6+\src\es10\tempCodeRunnerFile.js"
[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
```

[output]
```
// valor de profundidad 2
console.log(array.flat(2))

```

**flatMap**

```
let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))
```

**trimStart y trimEnd functions**
```
let hello = '     hello world';
console.log(hello.trimStart())


let hello = 'hello world      ';
console.log(hello.trimEnd())

```
**Optional Catch Binding**

```
try {
    
} catch {
    //el parametro error pasa pordefecto 
    error
}
```

**Convertir un arreglo en un objeto**

```
let entries = [['name', 'rusbel'], ['age', 32]];
console.log(Object.fromEntries((entries)));
```
[output]

```
{ name: 'rusbel', age: 32 }
```
**Uso de Sybol**

**Symbol** es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados como identificadores _(claves)_ de las propiedades de los objetos.  Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.

La función `Symbol` primitive data type es el constructor de valores del tipo _**Symbol**_. Cuando Symbol es llamado como función nos devuelve una nuevo valor del tipo _**Symbol**_. El constructor Symbol no debe ser usado con el operador ``new``. Tampoco debe ser extendido mediante clases.

```
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description)
```

### Clase 11: TC39 y Cierre del curso

EL [TC39es](https://tc39.es/) el comite tecnico de desarrolladores que se encarga de recibir propuestas, evaluarlas y llevarlas a la siguiente version de nuestro lenguaje.

En el sitio viene como contribuir y las fases en las que se encuentran las propuestas.

