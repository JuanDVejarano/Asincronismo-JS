# Asincronismo

## Que es el asincrinismo?

    Para entender el asincronismo en JavaScript, primero debemos comprender la naturaleza de un código sincrónico. En un flujo de ejecución sincrónico, cada paso se realiza uno tras otro. Esto implica que si hay, por ejemplo, tres pasos en nuestro código, se comenzará con el paso 1 y no se avanzará al paso 2 hasta que el paso 1 se haya completado. Una vez finalizado el paso 1, se procederá al paso 2, y así sucesivamente hasta completar el paso 3.

    En contraste, el asincronismo implica dar una instrucción que puede resolverse en otro momento. Mientras se espera que esta instrucción asíncrona se complete, el programa continúa ejecutando otras instrucciones. Regresando al ejemplo anterior con tres pasos, supongamos que el primer paso es asíncrono. En este caso, se inicia el primer paso, pero en lugar de esperar a que se complete, el programa avanza y ejecuta el paso 2 y luego el paso 3. Finalmente, cuando se resuelve la instrucción asíncrona del primer paso, se muestra el resultado correspondiente.\

## Correr proyecto

El proyecto tiene dependencias descargadas por npm. Para correr algunos archivos, se necesita instalar algunos módulos con el siguiente comando.

```
npm i
```

## Definicones

### CallBacks

Son funciones que se pasan como argumento a otra función. Puedes ver ejemplos en el archivo **callBack.js**

- para correr el programa desde el terminal

```
npm run callback
```

### fetchData

Es una función nativa de JS que nos permite hacer llamados a API's. Hay un ejemplo en el archivo indexFetchData.js. En ese ejemplo se usan callbacks para hacer peticiones a una API, lo cual no es la mejor manera de manejar el asincronismo, ya que se puede caer en el Callback Hell.

- para correr el programa desde el terminal

```
npm run callbackApi
```
