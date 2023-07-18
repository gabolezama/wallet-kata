# Nombre del Proyecto

Billetera virtual con diferentes funcionalidades para gestión de monedas: depositar, retirar, exchange. Además cuenta con impresión del balance por cada moneda operada y un reporte de cada transaccion realizada.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Autor](#autor)

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1. Clona el repositorio: `git clone https://github.com/gabolezama/wallet-kata.git`
2. Instala las dependencias: `npm install`
3. Correr el servidor de Expo: `npx expo start` (puedes utilizar flags '--web', '--tunnel', '--android')

## Uso

La billetera se puede utilizar seleccionando cualquier opcion para gestión del dinero, el cual por ahora no valida si hay fondos disponibles, sencillamente ejecutas las acciones requeridas. Si alguna moneda no cuenta con fondos probablemente al 'retirar' o 'cambiar' quedará en negativo. La idea del proyecto es que las operaciones matemáticas y la logica de la aplicacion funcionen apropiadamente y puedan rendir un balance y un reporte en base a las transacciones realizadas con ella a lo largo del tiempo.

## Características

Elproyecto ha sido desarrollado utilizando React Native, Redux, Javascript, React Navigation y Expo cli.

## Capturas de Pantalla

Si es relevante, agrega algunas capturas de pantalla del proyecto en acción.


## Autor

Ing. Freddy Lezama, Software Developer.
