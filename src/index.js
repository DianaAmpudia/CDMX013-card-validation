import validator from './validator.js';

const botonValidar=document.getElementById("btnValidar")
const creditCardNumber= document.getElementById("cardNumber")
const mValido= document.getElementById("Valida")
const mValido2= document.getElementById("Valida2")
const mInvalido= document.getElementById("Invalida")
const mInvalido2= document.getElementById("Invalida2")

botonValidar.addEventListener("click", validarNumTarjeta);

function validarNumTarjeta() {
 if(validator.isValid(creditCardNumber.value)){
     mValido.innerHTML="TU TARJETA FUE VALIDADA CON EXITO."
     mValido2.innerHTML= "Puedes continuar con tu compra."
 }
  else{
    mInvalido.innerHTML="TU TARJETA NO ES VALIDA"
    mInvalido2.innerHTML="Por favor ingresa otra tarjeta para poder continuar con tu compra."
  }

  creditCardNumber.value= validator.maskify(creditCardNumber.value);
} 


console.log(validator);
