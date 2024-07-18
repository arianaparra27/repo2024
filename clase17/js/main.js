
/**clase 17: Funciones y DOM */
/*

class Mascota {
   constructor(nombre) {
      this.nombre = nombre;
      this.adoptada = false;
   }



   //metodo

   adoptar() {
      this.adoptada = true;

   }

}
const inputMascota = document.getElementById
   ("nuevaMascota");
const nombreMascota = inputMascota.value.trim();
console .log(inputMascota);
console.log(nombreMascota);
*/

//funcion para agregar mascota a la lista 

function agregarMascota() {
   const inputMascota = document.getElementById
      ("nuevaMascota");
   const nombreMascota = inputMascota.value.trim();
   if(nombreMascota != ""){
      const nuevaMascota = new Mascota(nombreMascota);

      //crear el elemento de la lista 

      const elementoLista = document.createElement("li");
      elementoLista.textContent = nuevaMascota.nombre ;
      if (nuevaMascota.adoptada){
         elementoLista.classList.add ("adoptada")
      }
      
//boton para eliminar 

const botonEliminar = document.createElement("span");
botonEliminar.textContent = "Eliminar";
botonEliminar.classList.add("eliminar")

//evento para eliminar
botonEliminar.addEventListener("click",function(){
   elementoLista.remove();
})


      //evento

      elementoLista.addEventListener("click",function(){
         nuevaMascota.adoptar();
         elementoLista.classList.add("adoptada")
      })
const listaMascota = document.getElementById
("listaMascotas");
listaMascota.appendChild(elementoLista)

}

}

const botonAgregarMascotas = document.getElementById
("agregarMascota");
botonAgregarMascotas.addEventListener("click", agregarMascota);