'use strict';

// Almacenar en una variable el resultado de sumar 1 y 2
var a = 1 + 2;
console.log(a);
// alert(a); // Esto muestra una ventana emergente
alert(a);
// Almacenar en una variable el resultado de dividir 6 entre 2
var b = 12/2;
console.log(b)
// Almacenar en una variable el precio de un artículo de 20€ aplicándole el 21% de IVA .
var c = 20;
var v =c*1.21
console.log(v)
// Definir una variable con el valor 4 y utilizar el operador (```++```) para incrementar en uno su valor.var d = 4 ++;
var d = 4
d++
console.log(d)
// Definir una variable que almacene la concatenación de dos cadenas de texto.
var e = "hola"+"mundo";
console.log(e)
// Definir una variable ```price``` con el valor ```19.99```y aplicar la abreviación ```/=``` para dividirlo entre ```1.21``` para obtener el precio sin IVA.

var price = 19.99
// Asignar a dos variables valores booleanos y hacer al menos una operación combinando un operador lógico: **AND** (```&&```) o **OR** (```||```)


// Realizar 4 expresiones que utilicen operadores relacionales (```<```, ```==```, ```!=``` y ```===```) y almacenen los valores en tres variables distintas.
/*
 +  Crear un bucle for que imprima los mensajes:
 +
 +  Valor de i: 0
 +  Valor de i: 1
 +  ... hasta ...
 +  Valor de i: 9
 +*/
 var i;
 for (i=0;i<10; i++){
console.log ("valor de i " +i)
 }
 
 
 /*
 +  Crear un bucle for que imprima los mensajes: con números pares
 +
 +  Valor de i: 0
 +  Valor de i: 2
 +  Valor de i: 4
 +  ... hasta ...
 +  Valor de i: 8
 +*/
 var i;
 for (i=0;i<10; i=i+2){
  console.log ("valor de i " +i)
 }
 /*
 +  Crear un bucle dentro de otro (anidados) que imprima
 +
 +  Valor de i: 0
 +  Valor de j: 0
 +  
 +  Valor de i: 0
 +  Valor de j: 1
 +  
 +  Valor de i: 0
 +  Valor de j: 2
 +  
 +  ... hasta ...
 +  
 +  Valor de i: 9
 +  Valor de j: 9
 +*/
 var i = 0, j;

  for (i;i<10; i++){
    console.log ("valor de i: " +i);
    console.log ("valor de j: " + j);
    
  }