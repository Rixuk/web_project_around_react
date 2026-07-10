                                                    Proyecto Around the World

~ Este proyecto tiene como propósito mostrar los lugares que ha visitado el usuario, así como el perfil del mismo usuario.

~ Las tecnologías que se han usado hasta este momento son puras de front-end, como CSS, HTML y JavaScript; unificando estas dos últimas con React para la estructura y lógica de buena parte del proyecto, únicamente dejando "api.js" y "CurrentUserContext.js" con JavaScript puro. Principalmente apoyandome en el uso de los hooks en React.

~ PASOS PARA INSTALAR PROYECTO 
    1.- Se utiliza "vite", para ello vamos a la línea de comandos y en escribimos "npm create vite@latest " y al final ponemos el nombre del proyecto que es como se llama la carpeta, en este caso "web_project_around_react" y tenemos que instalar "React" y "JavaScript".
    2.- Antes de ejecutar el proyecto podemos configurar el archivo "package.json" que se creo junto al proyecto y actualizar en "scripts" el "dev" con lo siguiente: "dev": "vite --open", esto para que abra el navegador apenas se ejecute.
    3.- También podemos cambiar el puerto en el que se ejecuta el proyecto, para eso nos vamos al archivo "vite.config.js" y agregamos lo siguiente:

    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    // https://vitejs.dev/config/
    export default defineConfig({
    plugins: [react()],
    server: {     
        port: 3000,
    },
    });

    EN CASO DE NO TENER ESTE ARCHIVO "vite.config.js", LO PODEMOS CREAR EN LA RAÍZ DEL PROYECTO

~ Una vez realizados los pasos anteriores podemos ejecutar el proyecto con el comando "npm run dev"