Este proyecto ha sido creado con [Create React App](https://github.com/facebook/create-react-app).

## Pasos para descargar y arrancar el proyecto

### Primero clonamos el proyecto `git clone`

Primero clonamos el proyecto en la carpeta que deseemos:
git clone [https://github.com/rqlromo/samyroad-test.git](https://github.com/rqlromo/samyroad-test.git).

### Despues realizamos `npm install`

Entramos en la carpeta del proyecto que acabamos de clonar y hacemos un `npm install` para que se instale el proyecto con todas sus dependencias.

### A continuación arrancamos el json-Server con `npm run json:server`

Una vez instalado arrancamos nuestro json server para poder simular el comportamiento de la api, con el comando `npm run json:server`.

### Por ultimo arrancamos el proyecto con `npm start`

Para arrancar el proyecto hacemos `npm start`, esto nos arrancara nuestro proyecto en el puerto 3006.

### Lanzar test con `npm test`

Para poder lanzar los test que comprueban el buen funcionamiento de la aplicación ejecutaremos `npm test`.

## Explicación del proyecto

En este proyecto lo que se ha hecho es recoger los datos de un endpoint que se ha simulado con json-server.

Estos datos se recogen y se pintan segun el diseño proporcionado, el diseño es responsive según especificaciones.

Cuando cargamos las imagenes, solo cargamos las 5 primeras hasta que llegamos al final de la página y se pintan las 5 siguientes, esto es posible gracias a un scroll infinito que detecta cuando hemos llegado al final de la página y hace otra petición al servidor para que nos traiga las 5 siguientes.

En esta visualización de las imágenes podemos dar a "me gusta" a las imagenes que mas nos gusten y si no nos gustan podemos quitarle el like, tambien se actualiza el contador de likes.

Ademas tenemos un buscador que filtra las imagenes por titulo y por autor.

