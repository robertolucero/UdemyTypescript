# UdemyTypescript

## Google API Key
> AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU

## Comando para crear un proyecto básico con Typescript

1) npm init - y (crea el archivo package.json)
2) tsc --init (crea el archivo tsconfig.json)
3) npm install nodemon concurrently (instala librerias para ejecutar y compilar el proyecto)
4) crear las carpetas 'src' y 'build'
5) modificar el archivo **tsconfig.json** :

    a) outDir: './build'
    b) rootDir: './src'

6) modificar el archivo **package.json** :

    a) agregar los siguientes scripts:

        > "start:build": "tsc -w",

        > "start:run" : "nodemon build/index.js"

        > "start" : "concurrently npm:start:*"

7) Al ejecutar 'npm start' la primera vez debería fallar debido a que busca el archivo **index.js** , el cual se genera cuando compila tsc. Corriéndolo la 2da vez debería funcionar.


## Packages para correr un proyecto web

1) Instalar 'npm install -g parcel-bundler' (sirver para levantar el broser y syncronizarlo)
2) Para ejecutar un archivo html se debe correr el comando 'parcel index.html'

## Package para instalar un servidor json

1) Instalar 'npm install -g json-server'
2) Crear un archivo json que servirá como base de datos para el servidor json (ej. 'db.json') en el root.
3) Inicializar el archivo 'db.json'
4) Correr el comando 'json-server -w db.json'
5) Instalar 'Axios' para comunicarse entre el modelo y el servidor.
6) Ejecutar el comando 'npm install axios'.
7) Ejecutar 'parcel index.html'
8) Alternativamente se pueden agregar ambos comandos, el que corre parcel y el del servidor json, y configurar un script en el archivo package.json.

    a. Instalar el package 'Concurrently'. ('npm install -g concurrently')
    b. Crear los comandos en la propiedad 'scripts' del archivo 'package.json'.
        > "start:db": "json-server -w db.json"
        > "start:parcel" : "parcel index.html"
        > "start": "concurrently npm:start:*"
