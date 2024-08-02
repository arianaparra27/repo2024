/**CLASE 18: DOM */

/*

console.log(document);
console.dir(document);


console.log(document.head);
console.dir(document.head);


console.log(document.body);
console.dir(document.body);


//metodo para acceder al DOM


let titulo = document.getElementById('titulo');
console.log(titulo)
console.log(titulo.innerHTML);

let nombre = 'Cosme Fulanito';
titulo.innerHTML = "Hola" + nombre;
console.log(titulo.innerHTML);


let parrafos = document.getElementsByClassName('parrafos');
console.log('parrafos')

let parrafosTag = document.getElementsByTagName('p');
console.log(parrafosTag)


// ejemplo modificacion select dinamico



const categorias = [];
let entrada = prompt("Ingresar categoria (Escribir 'ESC'para salir)");
while (entrada. toUpperCase()!= 'ESC') {
   categorias.push(entrada.toUpperCase());
   entrada = prompt("Ingresar categoria (Escribir 'ESC'para salir)")
}

console.log(categorias)
//obtener elemento

let miSelect = document.getElementById('select')
/*
miSelect.innerHTML = '<option>' +categorias[0] + '</option>';
miSelect.innerHTML = '<option>' +categorias[1] + '</option>';*/

//recorremos el array para guardarlo en el nodo select 

/*for (const categoria of categorias){
   miSelect.innerHTML +='<option>' +categoria + '</option>';

}



/*


