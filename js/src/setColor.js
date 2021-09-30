const setColor = () => {
    //en value almacena el valor del color.
    const value = color.value;
    
    //esta propiedad de los selectores, destruyen el contenido anterior y coloca el nuevo
    salida.innerHTML = value;
    
    //estas línea cambian el color del fondo.
    salida.style.background = value;
};