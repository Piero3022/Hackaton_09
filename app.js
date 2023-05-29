//1. 
function calcularPotencia(numero, potencia) {
    return Math.pow(numero, potencia);
}

const numero = 2;
const potencia = 3;
const resultado = calcularPotencia(numero, potencia);
console.log(resultado);

//2 

function sumOfCubes(...numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += Math.pow(numeros[i], 3);
    }
    return suma;
}


const resultado2 = sumOfCubes(1, 5, 9);
console.log(resultado2);

//3 
const obtenerMensaje = (nombre, apellido, edad) => {
    return `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`;
}


const nombre = "Sebastián";
const apellido = "Yabiku";
const edad = 33;
const mensaje = obtenerMensaje(nombre, apellido, edad);
console.log(mensaje);

// 4

function sumar(...numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}


const resultado4 = sumar(2, 4, 6, 8);
console.log(resultado4);

//5 

function filtrarStrings(valores) {
    return valores.filter(valor => typeof valor === 'string');
}


const arrayValores = [1, 'Hola', true, 'Mundo', 5, 'JavaScript'];
const valoresFiltrados = filtrarStrings(arrayValores);
console.log(valoresFiltrados);

//6 

function minMax(numeros) {
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);
    return [min, max];
}


const arrayNumeros1 = [1, 2, 3, 4, 5];
const resultado6 = minMax(arrayNumeros1);
console.log(resultado6);

// 7 

function formatPhoneNumber(arrayNumeros) {
    const numero = arrayNumeros.join('');
    const codigoArea = numero.slice(0, 3);
    const primeraParte = numero.slice(3, 6);
    const segundaParte = numero.slice(6);
    return `(${codigoArea}) ${primeraParte}-${segundaParte}`;
}


const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const resultado7 = formatPhoneNumber(arrayNumeros);
console.log(resultado7);

// 8 

function charIndex(palabra, caracter) {
    const indices = [];
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            indices.push(i);
        }
    }
    return [indices[0], indices[indices.length - 1]];
}

const palabra = "hello";
const caracter = "l";
const resultadoX = charIndex(palabra, caracter);
console.log(resultadoX);

const palabra2 = "circumlocution";
const caracter2 = "c";
const resultadoC = charIndex(palabra2, caracter2);
console.log(resultadoC);

//9 

function getBudgets(personas) {
    let sumaPresupuestos = 0;
    for (let i = 0; i < personas.length; i++) {
        sumaPresupuestos += personas[i].budget;
    }
    return sumaPresupuestos;
}

const personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];
const resultadoV = getBudgets(personas);
console.log(resultadoV);

// 10 

function getStudentNames(estudiantes) {
    return estudiantes.map(estudiante => estudiante.name);
}

const estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
];
const nombresEstudiantes = getStudentNames(estudiantes);
console.log(nombresEstudiantes);


//11

function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += Math.pow(i, 2);
    }
    return suma;
}

const resultadoN = squaresSum(3);
console.log(resultadoN);

//12

function multiplyByLength(array) {
    const length = array.length;
    return array.map(valor => valor * length);
}

const array = [2, 3, 1, 0];
const resultadoM = multiplyByLength(array);
console.log(resultadoM);

//13

function countdown(numero) {
    const matriz = [];
    for (let i = numero; i >= 0; i--) {
        matriz.push(i);
    }
    return matriz;
}


const resultadoK = countdown(5);
console.log(resultadoK);

//14 

function diffMaxMin(arrayA) {
    const max = Math.max(...arrayA);
    const min = Math.min(...arrayA);
    return max - min;
}


const arrayA = [10, 4, 1, 4, -10, -50, 32, 21];
const resultadoA = diffMaxMin(arrayA);
console.log(resultadoA);

//15 
function filterList(array) {
    return array.filter(elemento => typeof elemento === 'number');
}


const arrayJ = [1, 2, 3, "x", "y", 10];
const resultadoJ = filterList(arrayJ);
console.log(resultadoJ);

///16

function repeat(elementoA, vecesA) {
    const resultadoi = [];
    for (let i = 0; i < vecesA; i++) {
        resultadoi.push(elementoA);
    }
    return resultadoi;
}


const elemento = 13;
const vecesA = 5;
const resultadoi = repeat(elementoA, vecesA);
console.log(resultadoi);











