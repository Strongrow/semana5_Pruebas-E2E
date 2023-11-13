# Pruebas a Ghost con Kranken

Kraken is an open source automated android and web E2E testing tool that supports and validates scenarios that involve the inter-communication between two or more users. It works in a Black Box manner meaning that it is not required to have access to the source code of the application but instead it can be run with the APK (Android package file format) and web page URL. Kraken uses signaling for coordinating the communication between the devices using a file based protocol.

## Instalación

# Requisitos previos
- SDK de Android (ADB y AAPT configurados)
- apio
- NodeJS (Versión ≥ 12) (Aunque en la documentación oficial indical que cualquier version mayor a la 12 en la experiencia corre con la version 16.20.2 de node)
- Java

Compruebe si todos los requisitos previos están instalados
Kraken ofrece el siguiente comando para verificar si toda la configuración requerida antes de ejecutar Kraken está instalada correctamente.

kraken-node doctor

### Writing your first test

## Crear proyecto NodeJS
npm init -y
Instalar Kraken
npm install kraken-node --save
## Generar esqueleto de características de pepino
Debe generar el esqueleto de características del pepino donde se guardarán sus pruebas. Para lograr esto debes ejecutar.

npx kraken-node gen

### Notas Adicionales

En Kraken, cada característica es una prueba y cada escenario dentro de una característica es un caso de prueba que se ejecuta en un dispositivo. Cada dispositivo se identifica como un usuario y se numera del 1 al N. Ej: @usuario1, @usuario2, @usuario3. Además, cada usuario debe especificar qué tipo de dispositivo va a ejecutar el escenario, para pruebas web use @web y para pruebas móviles use @mobile.

Después de identificar qué número tiene cada dispositivo, puede escribir su caso de prueba dando a cada escenario la etiqueta de un dispositivo determinado de la siguiente manera:

Característica: característica de ejemplo

  @usuario1 @móvil
  Escenario: como primer usuario saludo a un segundo usuario
  Dado que espero 
  , luego envío una señal al usuario 2 que contiene " hola " .

  @usuario2 @web
  Escenario: como segundo usuario, espero a  que el usuario 1 salude
  Dado que espero  una señal que contenga " hola " , 
  luego espero
