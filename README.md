# Nombre del Proyecto

Billetera virtual con diferentes funcionalidades para gestión de monedas: depositar, retirar, exchange. Además cuenta con impresión del balance por cada moneda operada y un reporte de cada transaccion realizada.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Autor](#autor)
- [Capturas de Pantalla](#capturas-de-pantalla)

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1. Clona el repositorio: `git clone https://github.com/gabolezama/wallet-kata.git`
2. Instala las dependencias: `npm install`
3. Correr el servidor de Expo: `npx expo start` (puedes utilizar flags '--web', '--tunnel', '--android')

## Uso

La billetera se puede utilizar seleccionando cualquier opcion para gestión del dinero, el cual por ahora no valida si hay fondos disponibles, sencillamente ejecuta las acciones requeridas. Si alguna moneda no cuenta con fondos probablemente al 'retirar' o 'cambiar' quedará en negativo. La idea del proyecto es que las operaciones matemáticas y la logica de la aplicacion funcionen apropiadamente y puedan rendir un balance y un reporte en base a las transacciones realizadas con ella a lo largo del tiempo.

## Características

El proyecto ha sido desarrollado utilizando React Native, Redux, Javascript, React Navigation y Expo cli.
## Autor

Ing. Freddy Lezama, Software Developer (stack MERN).

## Capturas de Pantalla

Capturas de pantalla a modo de demostración:

![Alt text](image.png) ![Alt text](image-1.png) ![Alt text](image-2.png) ![Alt text](image-3.png) ![Alt text](image-4.png) ![Alt text](image-5.png) ![Alt text](image-6.png) ![Alt text](image-7.png)
