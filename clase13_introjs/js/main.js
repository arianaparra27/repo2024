


/**clase 13 : intro js */


/*
console.log("Hola Mundo");


//variables



let edad = 32;

let tenerMascotas = true;
console.log(edad, tenerMascotas)

// operaciones basicas
/*

let numeroA = 2;
let numeroB =5;


let resultadoSuma=numeroA + numeroB;
console.log (resultadoSuma);
console.log (numeroA / numeroB)


let nombre = "Cosme";
let apellido ="Fulanito"
const ESPACIO = " ";




let nombreCompleto = nombre +ESPACIO + apellido 


console.log (nombreCompleto);
*/

//PROMPT
/* entrada= prompt ("ingrese su nombre");
let salida = "Hola" + entrada ;
alert (salida );



let numero= parseInt( prompt ("ingrese su numero"));
const NUMEROB = 30 ;

let salidaNumero= numero + NUMEROB;
alert(salidaNumero );

*/
/*
//arrays
//unidimensional
let numeros = [1, 2, 3, 5, 8];
let colores = ["rojo", "verde", "azul"];


console.log(numeros[1]);
console.log(colores[0]);

//multidimensionales

let colorMascotas = [
   ['perro', 'marron', 'gris','rojo'],
   ['gato','blanco','negro'],
   ['pez','amarillo'],
   ['jirafa','naranja'],
]
console .log(colorMascotas [1][2]);
console .log(colorMascotas [0][2].length);

*/
//objeto utilizado como array asociativo

let persona =  {
   nombre: "Ariana",
   edad: 32,
   profesion: "Desarrollador"

};
console .log (persona["nombre"]);
console .log (persona.edad);


let empleados = [
   {nombre: "Juan", edad:32, profesion: "desarrollador"},
   {nombre: "cosme", edad: 22, profesion: "tester"},
   {nombre: "pepito", edad: 33, profesion: "frontend"}
];
console .log (empleados [1].nombre);