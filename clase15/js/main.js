
/**clase 15 : Bucles en js */
/*

let frutas = [
   "Manzana",
   "Pera",
   "Mora",
   "limon",
   "Kiwi"

];
console.log(
   frutas[0].length);
frutas[1].length;
frutas[2].length;
frutas[3].length;
frutas[4].length;

/*

//while
/*urno

let i = 0;

while (i <= 15) {
console .log('El valor de i: ' + i);
i = i + 1;
}

//Decremento

let numero = 100;

while (numero > 0 ) {
document.write('Te queda de saldo: ', numero,
   "<br>"
);
numero = numero -
}*/
//ciclo for
/*
for (let i = 0; i <= 10; i++){
   alert(i)

}



for (let i = 1; i <= 5; i++) {
//solicitar en cada repeticion un nombre
let ingresarNombre = prompt("ingrese un nombre");

//informa el turno asignado

alert ("turno nro " + i + " Nombre: " +ingresarNombre);


}
*/
//propiedad length del array
let frutas = [
   "Manzana",
   "Pera",
   "Mora",
   "Limon",
   "Kiwi"
];

for( let i = 0 ; i <= frutas.length; i++){
   let fruta = frutas [i];
   console .log(fruta , 'tiene ', fruta.length + ' letras');
}


