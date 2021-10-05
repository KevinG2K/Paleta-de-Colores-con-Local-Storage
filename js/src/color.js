color.value = storage;

//una vez renderizado la pagina llama a la funcion setColor
getColors();
setColor();

//toma el selector color, y como parametro tiene una función, y lo que va a retornar
color.addEventListener("input", setColor);
//color.addEventListener('change', () => saveColor(color.value));