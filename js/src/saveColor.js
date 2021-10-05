//esta función guarda el value en la clave colorValue de la consola.
const saveColor = (value) => {
    //localStorage.setItem('colorValue', value);  
    colorList.push(value);
    localStorage.setItem('colorValue',JSON.stringify(value));
    localStorage.setItem('colorList',JSON.stringify(colorList));

    getColors();
};