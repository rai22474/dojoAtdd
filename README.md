# Dojo Atdd

## Objetivos

Los objetivo de este dojo son los siguientes:

* Demostrar cómo desarrollar usando ATDD.
* Duración unas 2 horas.
* Descubrir mediante un caso práctico ventajas e inconvenientes.

## Ejercicio previo

El ejecicio previo sirve para familiarizarse con las tecnologías sobre las que va a versar el coding dojo. 

Cada participante deberá hacer un fork de este proyecto e implementar la siguiente feature: 

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

Después de hacer el fork, para poder ejecutar el programa hay que seguir las instrucciones que aparecen en la secciones posteriores.

En el dojo usaremos [cucumber](https://cucumber.io). En su página hay gran cantidad de información muy útil a la hora de poder implementar este ejercicio. 

## Requisitos del sistema

Antés de empezar el sistema debe tener instalada una versión actualizada de nodejs. Se puede encontrar en https://nodejs.org/en .

* NodeJS: ~4.4.5
* NPM: ~2.15.5

## Uso

El primer paso es instalar las librerías que se necesitan para ejecutar el dojo, para ello hay que ejecutar:

```
npm install

```

Para arrancar el servidor hay que ejecutar:

```

npm start

```

Una vez arrancado el servidor, desde otro terminal para pasar las pruebas de aceptación:

```

npm run cucumber

```

Además para ejecutar los test de unitarios:

```
npm run test

```

Comprobación de la calidad del código:

```
npm run jshint

```

## Kata

Se ha elegido un kata de la lista de katas clásicos de la lista de Dave Thomas http://codekata.com/kata/kata09-back-to-the-checkout. Es un kata que consiste en añadir productos a la cuenta de un supermercado. Existe una lista de precios cerrada con la que se calculara el valor total de la cuenta del supermercado.

[Las features no implementadas propuestas para el dojo](https://github.com/rai22474/dojoAtdd/wiki/Features-propuestas-para-el-dojo)


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



