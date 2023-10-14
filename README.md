# Asincronismo

## Que es el asincrinismo?

    Para entender el asincronismo en JavaScript, primero debemos comprender la naturaleza de un código sincrónico. En un flujo de ejecución sincrónico, cada paso se realiza uno tras otro. Esto implica que si hay, por ejemplo, tres pasos en nuestro código, se comenzará con el paso 1 y no se avanzará al paso 2 hasta que el paso 1 se haya completado. Una vez finalizado el paso 1, se procederá al paso 2, y así sucesivamente hasta completar el paso 3.

    En contraste, el asincronismo implica dar una instrucción que puede resolverse en otro momento. Mientras se espera que esta instrucción asíncrona se complete, el programa continúa ejecutando otras instrucciones. Regresando al ejemplo anterior con tres pasos, supongamos que el primer paso es asíncrono. En este caso, se inicia el primer paso, pero en lugar de esperar a que se complete, el programa avanza y ejecuta el paso 2 y luego el paso 3. Finalmente, cuando se resuelve la instrucción asíncrona del primer paso, se muestra el resultado correspondiente.\

## Correr proyecto

El proyecto tiene dependencias descargadas por npm. Para correr algunos archivos, se necesita instalar algunos módulos con el siguiente comando.

```
npm i
```

En el proyecto se instalaron las siguientes dependencias

```
npm i xmlhttprequest
npm i node-fetch
```

## Definicones

### CallBacks

Son funciones que se pasan como argumento a otra función. Puedes ver ejemplos en el archivo **callBack/example.js**

- para correr el programa desde el terminal usar el siguiente comando

```
npm run callback
```

### fetchData con CallBacks

Es una función nativa de JS que nos permite hacer llamados a API's. Hay un ejemplo en el archivo **callBack/fetchData.js.** En ese ejemplo se usan callbacks para hacer peticiones a una API, lo cual no es la mejor manera de manejar el asincronismo, ya que se puede caer en el Callback Hell.

- para correr el programa desde el terminal usar el siguiente comando

```
npm run callbackApi
```

### Promise

Una promesa es un objeto que representa la eventual finalización o el fracaso de una operación asíncrona. Una promesa puede estar en uno de los siguientes estados:

1. Pendiente (Pending): Estado inicial, la promesa está en curso.
2. Cumplida (Fulfilled): La operación se completó con éxito, y la promesa tiene un resultado.
3. Rechazada (Rejected): La operación falló, y la promesa tiene un motivo de rechazo.

para ver ejemplos se pueden ver en la carpeta **promise**

- para correr los programa desde el terminal usar los siguientes comandos

```
npm run promise
npm run promiseApi
```

en el archivo **promise/fetchData-post.js** podremos agregar productos al API para esto podremos cambiar los valores que estan en la constante **dataProduct** y correr el siguiente comando

```
npm run postData
```

Hara el POST al API y nos retorna el objeto que acabo de agregar
