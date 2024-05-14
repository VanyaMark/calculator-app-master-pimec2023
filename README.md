# Reto JavaScript Pair Programming PIMEC 2023

[URL del challenge](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29)
[Demo de la app](https://ab-irami.github.io/calculator-app/)

Os adjunto la demo para que veaís fácilmente como funciona la app. No inspeccioneis el código, ni siquiera por que hay _algo_ que no os sale. Prefiero que me llaméis a mi.

1. Escribir con lenguaje natural una idea de lo que tiene que ocurrir en esta aplicación. Podéis escribirlo en el mismo README.md más abajo
2. En principio todo el CSS necesario y maquetación ya está implementado. Pero puedes añadir tus clases CSS, estilos en línea a partir de la propiedad .style, etc.
3. Fíjate en los atributos data-\* de cada tecla. Te pueden ayudar a determinar fácilmente que botón ha pulsado el usuario
4. Piensa en como asociar un evento a cada tecla aprovechando la propagación de envetos, o bien asociar un evento a cada button usado querySelectorAll
5. Para calcular el resultado de la operación, piensa en [esta función](https://www.w3schools.com/jsref/jsref_eval.asp)
6. Puedes usar alguna variable de estado que puede hacer más fáil la implementación de la app, aunque puede que no sea imprescindible

## Pregunta 1: Describe con lenguaje natural que tiene que hacer la app.

1. Al clickar los números presentar su valor en div data-current-operand 
2. Al clickar */+- pasar los números + el operador a data-previous-operand
3. Al clickar = borrar todo en data-precious-operand y mostrar resultado de la operación en data-current-operand
4. Al clickar al botón res vaciar el data-current-operand
5. Al clickar al botón del vaciar el data-current-operand + previous-operand
6. Investigar como cambiar los 3 estilos
