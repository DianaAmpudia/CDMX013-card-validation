# Tarjeta de crédito válida

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Investigación UX](#3-investigación-ux)

***

## 1. Resumen del proyecto

Este proyecto está enfocado a una de las pantallas del proceso del método de pago de una tienda de bisutería. Los principales usuarios son los clientes de la tienda, que durante su pago, deben validar su tarjeta de crédito para poder continuar con su proceso de compra.

El objetivo principal es que tanto la tienda como el cliente tengan la seguridad de que la tarjeta que se usa es legítima. La tienda evita cualquier tipo de estafa al asegurar que es válida y el cliente que coloco los datos correctos.


Para lograr esto, se utilizo el algoritmo de Luhn, método utilizado para validar números de identificación.


## 2. Imagen final del proyecto

![pantalla tarjeta invalida](https://raw.githubusercontent.com/DianaAmpudia/CDMX013-card-validation/main/src/img/PF_TarjetaV.png)
![pantalla tarjeta invalida](https://raw.githubusercontent.com/DianaAmpudia/CDMX013-card-validation/main/src/img/PF_TarjetaI.png)

## 3. Investigación UX

El primer prototipo que se tuvo del proyecto fue el siguiente:

En papel:
![boceto](https://raw.githubusercontent.com/DianaAmpudia/CDMX013-card-validation/main/src/img/boceto.jpg)


En figma:

![figma1](https://raw.githubusercontent.com/DianaAmpudia/CDMX013-card-validation/main/src/img/Figma1.png)

Gracias al feedback recibido, se decidió hacer modificaciones para que diera a entender que en efecto se trataba de la interfaz de una tienda, por ello se agregó el carrito de compra.

Además, se buscó que el diseño correspondiera a la identidad de la tienda. Para lograr este objetivo, se hizo uso de un moodboard, una paleta de colores y una imagen background que respondiera a dicha identidad. 

Moodboard: 

![moodboard](https://raw.githubusercontent.com/DianaAmpudia/CDMX013-card-validation/main/src/img/moodboard.png)

Prototipo Final:

![figma2](https://raw.githubusercontent.com/DianaAmpudia/CDMX013-card-validation/main/src/img/Figma2.png)


Finalmente, la interfaz creada permite al usuario:
* Insertar el número que queremos validar y ver el resultado si es válido o no. 
*En caso de que el usuario no haya colocado el mínimo de dígitos correspondientes a una tarjeta de crédito, le aparece una leyenda solicitándole que lo haga. Además  de que no puede ingresar el campo vacío.
* Oculta todos los dígitos de su número de tarjeta menos los 4 últimos
