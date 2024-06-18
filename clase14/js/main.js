
/**clase 14 : Condicionales js */
//If elsa if else

/*
let numero = 3;

if (numero > 3){
   console .log ("el numero es mayor a 3");
} else if (numero === 3){
   console .log ("el numero es igual a 3")
}
else {
   console .log ("el numero es menor a 3 ")
}
console .log ("Continua con la ejecucion")
/*

//operador condicional ternario
//else resumido
/*
let edad = 16 ;
let esMayorEdad;


if (edad >18){
   esMayorEdad = true;
} else {
   esMayorEdad = false;

}
console .log ('es mayor de edad?', esMayorEdad)



//con ot
let edad =20

let esMayorEdad = edad >18 ? true : false ;
console .log ('es mayor de edad?', esMayorEdad)

*/

//switch

/*
let powerRanger = "Black";

switch(powerRanger) {
   case "red":
      console .log("Red ranger! Jason");

      break;
      case "blue":
         console .log ("Blue ranger! Billy");
         break;
         case "black":
         console .log("Black ranger! Zack");
         break;
         case "pink":
            console .log("Pink ranger! Kimberly");
            break;
            case "yellow":
               console .log("Yellow ranger! Trini")
               break;
               default:
                  console .log("No sos un power Ranger")
   
}
*/
//dia de la semana con switch
/*
let dia = new Date().getDay();
console.log(dia);
switch (dia){
   case 0:
      console.log("Hoy es Domingo");
      break;
   case 1:
      console.log("Hoy es Lunes");
      break;
   case 2:
      console.log("Hoy es Martes");
      break;
   case 3:
      console.log("Hoy es Miercoles");
      break;
   case 4:
      console.log("Hoy es Jueves");
      break;
   case 5:
      console.log("Hoy es Viernes");
      break;
   case 6:
      console.log("Hoy es Sabado");
      break;
   
default:
   console .log("Dia no disponible");
}
*/


//

let edad = prompt("Por favor , ingresa tu edad");

if(edad !==null){
   edad = Number(edad);
   if(edad >= 18){
      document.write("Sos mayor de edad")
    } else{
         document.write("Sos menor de edad")
      }
   } else{
      document.write("No ingresaste una edad")

   }
   
   

