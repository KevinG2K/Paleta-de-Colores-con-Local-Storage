"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { 
  if (innerThis !== boundThis) { 
    throw new TypeError("Cannot instantiate an arrow function"); 
  } 
}

//esta función guarda el value en la clave colorValue de la consola.
var saveColor = function saveColor(value) {
  _newArrowCheck(this, _this);

  localStorage.setItem('colorValue', value);
}.bind(void 0);