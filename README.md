# ecommerce-homepage

Este proyecto es una página estática que consume el endpoint `https://gradistore-spi.herokuapp.com/products/all` para mostrar un carousel de productos y una sección de newsletter con un formulario para ingresar y validar correos electrónicos. Está construido con React y TypeScript, y usa Vite para su creación y GitHub Pages para su publicación.

## Instalación

Para instalar el proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio usando el comando `git clone https://github.com/takeshi31/ecommerce-homepage.git`.
2. Navega a la carpeta del proyecto con el comando `cd ecommerce-homepage`.
3. Instala las dependencias del proyecto con el comando `npm install`.

## Uso

Para correr el proyecto en tu máquina local, sigue estos pasos:

1. Navega a la carpeta del proyecto con el comando `cd ecommerce-homepage`.
2. Corre el comando `npm run dev` para correr el servidor de desarrollo. Esto abrirá el proyecto en tu navegador en `http://localhost:3000/`.

## Scripts

El proyecto tiene los siguientes scripts disponibles:

```
    "scripts": {
        "dev": "vite",
        "build": "tsc && vite build --base=/ecommerce-homepage/",
        "preview": "vite preview",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
    }
```


### `npm run dev`

Corre el servidor de desarrollo en `http://localhost:3000/`.

### `npm run build`

Construye el proyecto para producción en la carpeta `dist`.

### `npm run preview`

Sirve la carpeta `dist` en un servidor local para previsualizar la versión construida.

### `npm run predeploy`

Construye el proyecto para producción en la carpeta `dist`. Este script se ejecuta automáticamente antes de correr el comando `npm run deploy`.

### `npm run deploy`

Publica la carpeta `dist` en GitHub Pages.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
