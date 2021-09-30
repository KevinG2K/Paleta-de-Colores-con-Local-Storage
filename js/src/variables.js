// el query selector captura el id de un elemento o tag html.
const color = document.querySelector('#color');
const salida = document.querySelector('#salida');

const storage = localStorage.getItem('colorValue') || '#ffffff';