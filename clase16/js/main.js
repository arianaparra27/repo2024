
/**clase 16: Funciones en js */

/*
function saludar(nombre,apellido, edad){
   console .log ("Hola", nombre,apellido, "tu edad es", edad)
}

saludar("Ariana","Parra",32);

//declaracion de la funcion con parametros

function sumar(num1,num2){
   return num1 + num2;
}

//declaracion de la funcion con argumentos

sumar(5,6);
let resultado = sumar(9,12);

console .log (resultado); */

/*
//funcion anonima y le asignamos variable 
let suma = function(num1, num2){
   return num1 + num2;

}

let resultado = suma(12, 10);
console .log(resultado);



function saludar(nombre, apellido, serieFavorita){
   return ("Hola" + nombre + apellido + "tu serie favorita es "+ serieFavorita);
}
saludar("Ariana", "Parra", "Harry Potter");

console.log(saludar ("Ariana", "Parra", "Harry Potter"))



function devolverLargoNombre(nombre){
   return nombre.length;

}

document.write(" El largo del nombre es " + devolverLargoNombre ("Ariana"));


//Scope 

function multiplicar(num1, num2){
   const num3 = 10;
   return(num1 + num2) *num3;


} 

let resultado = multiplicar(10,2)
console.log(resultado)


console.log(document.body);
console.log(document.head);
console.dir(document/head);
console.dir(document.body);

*/


//seleccion de elementos del DOM querySelector


let titulo = document.querySelector('#tutulo');
let parrafos = document.querySelectorAll('.parrafo');
let cambiarTextoBtn = document.querySelector('#cambiarTexto');
let cambiarColorBtn = document.querySelector('#cambiarColor');
let cambiarClaseBtn = document.querySelector('#cambiarClase');

console.log(titulo);
console.log(parrafos);
console.log(cambiarTextoBtn);

//funcion para cambiar texto del tttulo

function cambiarTexto(){
   titulo.textContent = 'Texto nuevo';

}
// funcion para cambiar colorde todos los parrafos seleccionados 

function cambiarColor(){
   parrafos.forEach(parrafo => {
      parrafo.classList.toggle('cambiarColor')
      
   });
}


function cambiarClase(){
   parrafos.forEach(parrafo => {
      parrafo.classList.toggle('nuevaClase')
      
   });
}




//asignar evento CLICK a los botones


cambiarTextoBtn.addEventListener('click',cambiarTexto);
cambiarColorBtn.addEventListener('click', cambiarColor);
cambiarClaseBtn.addEventListener('click', cambiarClase);