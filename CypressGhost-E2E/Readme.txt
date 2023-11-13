Las pruebas E2E se realizan al Cms Ghost en el entorno local
por lo anterior es importante tener instalado ghost en su versión 5.68.0 
para lograr replicar el ambiente de pruebas.

version sugerida y testeada en  windows 11
Es necesario tener instalado 
  Node.js version - found v18.18.1
  Ghost-CLI version: 1.25.2
  Ghost version: 5.68.0
  npm 9.8.1 

Es necesario descargar o clonar el este proyecto 
asegurese de tener previamente instalado Ghost,posterior
con el comando 
  npm install 
el anterior comando descarga las dependencias necesarias 



IMPORTANTE.
Las pruebas a realizar necesariamente requieren de un usuario y contraseña
Agregue la usuario y contraseña en el archivo example.json  que se encuentra en la carpeta fixtures
de la siguiente manera.

{
  "email": "<SU CORREO>",
  "password": "<SU CLAVE>"
}

Posterior guarde el archivo.


INICIAR PRUEBAS E2E

Para iniciar las pruebas utilice el comando 

  npx cypress run   

El anterior comando permite correr las pruebas sin interfaz grafica
si considera necesario la intefaz grafica puede probar con el comando 

  npx cypress open


