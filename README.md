# dojoAtdd

## Objetivos

Los objetivo de este dojo son los siguientes:

* Demostrar cómo se desarrolla usando ATDD.
* Duración unas 2 horas.
* Descubrir mediante un caso práctico ventajas e inconvenientes.

## Audiencia

* Entre 8 y 10 personas.
* Personas con experiencia en desarrollo de software.

## Dinámica

* ¿Qué dudas han surgido en la implementación del problema previo?
* Explicación que es un dojo.
* Presentación de kata que vamos a desarrollar.
* Desarrollo del dojo
  * El dojo será de tipo kake.
  * Se programa en parejas.
  * 3 turnos de 25 min. con 5 de descanso entre cada turno.
  * Cada turno se cambia de pareja.
* 25 min. de retrospectiva, feedback y preguntas.

## Kata

Se ha elegido un kata de la lista de katas clásicos de la lista de Dave Thomas http://codekata.com/kata/kata09-back-to-the-checkout es un kata que consiste en añadir productos a la cuenta de un supermercado. Existe una lista de precios cerrada con la que se calculara el valor total de la cuenta del supermercado.

## Requisitos del sistema

* NodeJS: ~4.4.5
* NPM: ~2.15.5

## Ejercicio previo

El ejecicio previo sirve para familiarizarse con las tecnologías sobre las que va a versar el coding dojo. 

Cada participante deberá hacer un fork de este proyecto de github  

```
#language: en

Feature: Heartbeat
    In order to check that the server is up
    As a client application
    I want to know the server status

    Scenario: GET Heartbeat
        When I request the heartbeat
        Then the response code must be 200
        
```

## Implementación

La implementación se hará usando un servicio rest implementado en nodejs. El servicio implementa el siguiente API:

```
Crear un nuevo checkout

POST /api/checkout

Response 201

Location: /api/checkout/{id}

```

```
Dar el valor de un checkout existente

GET /api/checkout/{id}

Response 200

Response: {
   total: {
     value: 20,
     currency:"EUR"
   }
}
```

```
POST /api/checkout/{id}/items

Response 201

Location: /api/checkout/{id}/items/{id}

```

## Uso

```
npm install

```

Ejecutar los test de unitarios

```
npm run test

```

Comprobación de la calidad del código

```
npm run jshint

```

Arrancar el servidor

```

npm start

```

Pasar las pruebas de aceptación

```

npm run cucumber

```

