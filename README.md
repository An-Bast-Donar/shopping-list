# shopping-list
Mi primera App Web con Angular. Proyecto con el objetivo de fortalecer conocimientos en Angular, Backend y Frontend


DESCRIPCIÓN DEL PROYECTO

Este proyecto es una lista de compras personalizada. El usuario puede añadir artículos a la lista de compras, cada artículo tiene un nombre, un precio y la cantidad a comprar. En la lista de artículos, el usuario puede marcar los comprados y eliminarlos. La aplicación le muestra al usuario el precio total a pagar por todos los artículos.
Cada artículo añadido es agregado a una base de datos en el lado del backend, que posteriormente es consultada y modificada para mostrarle al usuario su lista de artículos.

Lista de compra:

![Lista](https://user-images.githubusercontent.com/49569043/112118599-8818b380-8b8a-11eb-93bd-163e706531f9.JPG)

Nueva articulo:

![Nuevo](https://user-images.githubusercontent.com/49569043/112118163-15a7d380-8b8a-11eb-8da6-344df9a36379.JPG)

Prueba del servidor iniciado:

![Servidor](https://user-images.githubusercontent.com/49569043/112118018-f5781480-8b89-11eb-8f1b-c481df195c5f.JPG)


EJECUTAR EL PROYECTO

Esta es la forma de ejecutar el proyecto en Windows:
1.	Tener instalado Nodejs, que se puede hacer desde https://nodejs.org/es/
2.	Tener instalado Angular, para esto se puede consultar la documentación oficial de Angular (https://angular.io/) o correr el comando $ npm install -g @angular/cli, desde el CMD
3.	Tener instalado las librerías express cors y uuid. La cuales instalamos con el siguiente comando $ npm i express cors uuid
4.	Desde el CMD nos ubicamos en la carpeta backend del proyecto y ejecutamos el comando $ node server, para inicializar el backend.
5.	Si nos pide cambiar de puerto, esto podemos hacerlo en la última función del archivo server.js en la carpeta backend.
6.	Posteriormente nos ubicamos en la carpeta raíz del proyecto y ejecutamos el comando $ ng serve --open, para poder visualizar en la web el proyecto.
7.	Ya podemos añadir artículos, visualizar la lista y modificarla.


REFERENCIAS

Esta aplicación fue realizada gracias al buen tutorial titulado -TU PRIMERA APP CON ANGULAR 11- del canal de Youtube -Vida MRR-.
Enlace: https://www.youtube.com/watch?v=tP42hCXf-Ro&ab_channel=VidaMRR
