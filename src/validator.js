const validator = {
  
  isValid(creditCardNumber){

    /*convertimos el string a array con el método split y lo fragmentamos por elemento. Con map(number) iteramos
     a través de los elementos, en este caso,los numeros*/

    let arraydnumeros= creditCardNumber.split("").map(Number);

    
    /*Duplicar los números en posiciones pares después de tener la tarjeta al reverso. En este caso, en vez de 
    hacer el reverso, lo que se aplica es que si el length de mi tarjeta es un núm par, va a duplicar cada dos 
    dígitos comenzando con la primera posición de mi array (0). 
    
    Ejemplo: 

    1234 = [1*, 2, 3*, 4]
    
    Si es un número impar, va a empezar desde la posición 1
    
    Ejemplo: 

    12345 = [1, 2*, 3, 4*, 5]

   Entonces, si el lenght de mi tarjeta se le aplica el operador % 2 y es igual a 0 (es decir es un número par)
  se le va aplicar lo anterior.
  
  "?, :" son operadores condicionales (operador ternario)
  */

  if (arraydnumeros.length % 2 === 0){
      arraydnumeros = arraydnumeros.map((numero,idx)=> idx % 2 === 0 ? numero * 2 : numero);
      }
        else{
         arraydnumeros = arraydnumeros.map((numero,idx)=> idx % 2 === 1 ? numero * 2 : numero);
        }

      
  /*Despues de duplicar, si los numeros pasan de 9 restar 9, si no pasan de 9 se queda así el número. En el
  Algoritmo de Luhn, esto se explica como sumar los digitos, pero es lo mismo que restarle 9 */
  
      arraydnumeros = arraydnumeros.map(numero => numero > 9 ? numero -9 : numero);


      
  /*Hecho todo lo anterior se tiene que sumar todo. Usamos .reduce() para poder realizar operaciones (en este
    caso suma) a cada uno de los elementos del array, de forma que nos devuelva un valor único.
  acc= accumulator
  */

      let suma= arraydnumeros.reduce((acc, numero)=> acc += numero, 0);
  

  /*Después de la suma se aplica el operador residuo. Si el resultado es 0 entonces 
  mi tarjeta es valida, de lo contrario es invalida*/
       let resultado= suma % 10 === 0;
       if(resultado){
       true
       }else{
         false
       }
       return resultado

       
    }, 
  //enmascarar
  maskify(creditCardNumber) {
    return creditCardNumber.split("").map((nums, idx) => 
      idx < creditCardNumber.length - 4 ? "#" : nums).join("");
    }
  };

/* Otra forma de hacer el maskify
 maskify(creditCardNumber){

    /*.slice (0,-4) El cero indica desde la posición del index de donde queremos empezar y el segundo parametro 
    indica hasta donde queremos llegar. 
    En este caso, el -4, quiere decir que va a llegar hasta las últimas cuatro posiciones del array.
    Ejemplo:
    
    const numbers = [1,2,3,4,5,6]
    const numbers2 = numbers.slice(0,-3);

    [1, 2, 3]
    
    
    let numerosaremplazar = creditCardNumber.slice(0, -4);

    Con el replace, le estamos diciendo que remplace 'numeroaremplazar' por #, y que se repita por
    todo el legth del array
    
    let numeroenmascarado = creditCardNumber.replace(numerosaremplazar, "#".repeat(numerosaremplazar.length));
    return numeroenmascarado;
    }*/

export default validator