"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { 
  if (innerThis !== boundThis) { 
    throw new TypeError("Cannot instantiate an arrow function"); 
  } 
}

var setColor = function setColor() {
  _newArrowCheck(this, _this);

  //en value almacena el valor del color.
  var value = color.value; 
  
  //esta propiedad de los selectores, destruyen el contenido anterior y coloca el nuevo
  salida.innerHTML = value; 
  
  //estas línea cambian el color del fondo.
  salida.style.background = value;
}.bind(void 0);