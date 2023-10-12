# Asincronismo

## Que es el asincrinismo?

    Para entender el asincronismo en JavaScript, primero debemos comprender la naturaleza de un código sincrónico. En un flujo de ejecución sincrónico, cada paso se realiza uno tras otro. Esto implica que si hay, por ejemplo, tres pasos en nuestro código, se comenzará con el paso 1 y no se avanzará al paso 2 hasta que el paso 1 se haya completado. Una vez finalizado el paso 1, se procederá al paso 2, y así sucesivamente hasta completar el paso 3.

    En contraste, el asincronismo implica dar una instrucción que puede resolverse en otro momento. Mientras se espera que esta instrucción asíncrona se complete, el programa continúa ejecutando otras instrucciones. Regresando al ejemplo anterior con tres pasos, supongamos que el primer paso es asíncrono. En este caso, se inicia el primer paso, pero en lugar de esperar a que se complete, el programa avanza y ejecuta el paso 2 y luego el paso 3. Finalmente, cuando se resuelve la instrucción asíncrona del primer paso, se muestra el resultado correspondiente.
