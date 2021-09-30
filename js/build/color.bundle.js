"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { 
  if (innerThis !== boundThis) { 
    throw new TypeError("Cannot instantiate an arrow function"); 
  } 
}

color.value = storage; 

//una vez renderizado la pagina llama a la funcion setColor
setColor(); 

//toma el selector color, y como parametro tiene una función, y lo que va a retornar
color.addEventListener("input", setColor);
color.addEventListener('change', function () {
  _newArrowCheck(this, _this);

  return saveColor(color.value);
}.bind(void 0));