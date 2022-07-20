const validator = {
  
  isValid(creditCardNumber){

    /*convertimos el string a array y a numero. Con el split fragmentamos por elemento. Con map(number) iteramos
     a través de los elementos (bucle para avanzar de un elemento a otro en una lista, manteniendo el orden y
       la posición de cada elemento):*/

    let arraydnumeros= creditCardNumber.split("").map(Number);

    /*Duplicar los números en posiciones pares después de tener la tarjeta al reverso. En vez de hacer el reverso, lo que se aplica es que si el length de mi tarjeta es un 
    núm par, va a duplicar cada dos dígitos comenzando con la primera posición de mi array (0). 
    
    Ejemplo: 

    1234 = [1*, 2, 3*, 4]
    
    Si es un número impar, va a empezar desde la posición 1
    
    Ejemplo: 

    12345 = [1, 2*, 3, 4*, 5]

   Entonces, si el lenght de mi tarjeta se le aplica el operador % 2 y es igual a 0 (es decir es un número par)
  se le va aplicar lo anterior, según corresponda
  
  Los operadores "?, :" son formas cortas de la condición if-else
  */

  if (arraydnumeros.length % 2 === 0){
      arraydnumeros = arraydnumeros.map((numero,idx)=> idx % 2 === 0 ? numero * 2 : numero);
      }
        else{
         arraydnumeros = arraydnumeros.map((numero,idx)=> idx % 2 === 1 ? numero * 2 : numero);
        }
      
  /*Despues de multiplicar, si los numeros pasan de 9 restar 9, si no pasan de 9 se queda así el número. En el
  Algoritmo de Luhn, esto se explica como sumar los digitos, pero es lo mismo que restarle 9 */
  
      arraydnumeros = arraydnumeros.map(numero => numero > 9 ? numero -9 : numero);
      
  /*Hecho todo lo anterior se tiene que sumar todo. El .reduce() aplica una función al acumulador 
  y a cada valor del array (de izquierda a derecha) para reducirlo a un único valor.

  acc= accumulator
  += es un operador aritmético, se utiliza para sumarle una valor a cierta variable.
  Se usa para acortar la expresión.
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
  //maskify
  maskify(creditCardNumber) {
    
    if (creditCardNumber < 5) {
      return creditCardNumber;
    }else{

      /*fragmentamos el string creditcardnumber en un array y comienza a iterar 
      a través de los elementos del array. Al length de nuestro array se le se remplaza
      por # menos los últimos 4 digitos. Al final queremos volver a convertirlo
      en un string por eso se usa el join 
      */

      return creditCardNumber.split("").map(function(nums, idx){
        return (creditCardNumber.length - idx < 5) ? nums : "#";
     }).join("");
    }
  }
};

          

export default validator