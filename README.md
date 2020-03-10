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
