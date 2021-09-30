"use strict";

// el query selector captura el id de un elemento o tag html.
var color = document.querySelector('#color');
var salida = document.querySelector('#salida');
var storage = localStorage.getItem('colorValue') || '#ffffff';