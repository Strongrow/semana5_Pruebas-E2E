# Entrega Semana 6 VRT y Semana 7 

# Autores

Javier Andrés Acevedo  ja.acevedob1@uniandes.edu.co <br>
Publio Diaz p.diazp@uniandes.edu.co <br>
Juan Camilo Rodríguez  jc.rodriguez2345@uniandes.edu.co <br>
Lucas Omar Blandon   l.blandon@uniandes.edu.co <br>

# Video Semana 6 VRT 
   https://youtu.be/nt6aLvvrR8E
# Funcionalidades 

1. Ingreso Ghost: Esta funcionalidad contribuye a la confirmación de la identidad del usuario y fortalece la protección de los datos en el sitio web al limitar el acceso a información confidencial. <br>

2. Manejo de tags: Esta función permite habilita al administrador de Ghost para estructurar y segmentar las entradas del blog mediante el uso de etiquetas. Ofrece la posibilidad de generar, modificar y eliminar etiquetas, lo que facilita la clasificación y organización de los artículos de una manera más eficiente y efectiva. Esta organización mejora la experiencia de los usuarios del sitio web, permitiéndoles localizar con mayor facilidad el contenido que les interesa.<br>

3. Manejo de posts: Esta funcionalidad facilita que el administrador de Ghost gestione el contenido del blog en su sitio web. A través del panel de control, es posible componer nuevos artículos, incorporar imágenes y diferentes tipos de medios, determinar la fecha y hora para la publicación automática, y realizar actualizaciones o eliminar publicaciones ya existentes. <br>

4. Manejo de paginas: Esta funcionalidad habilita al administrador de Ghost para la creación, modificación y eliminación de páginas en su sitio web. A diferencia de las publicaciones de blog, que se organizan cronológicamente, las páginas se emplean principalmente para contenido estático, sin estar ligadas a fechas específicas. <br>

5. Manejo de Borradores: Esta funcionalidad habilita la gestión de etiquetas y en el manejo de publicaciones que se encuentran en estado de borrador y publicado, facilitando su organización y edición. <br>

7. Manejo de Calendario: Esta funcionalidad habilita la gestión de publicaciones que se encuentran en estado de borrador y publicado, facilitando su organización y edición. <br>

# Escenarios de Prueba tratados - Ghost v3.42

Escenario de prueba PE001: Ingreso con usuario correcto y clave correcta <br>
  * En este esenario, el usuario ingresa la credenciasles de correo y contraseña correctas. 
y el resultado esperado es que pueda ingresar a la plataforma Ghost.<br>

Escenario de prueba PE002: Ingreso con usuario correcto y clave incorrecta <br>
  *  En este esenario, el usuario ingresa la credenciasles de correo  Correcto y contraseña incorrecta.y el resultado esperado es que no pueda ingresar a la plataforma Ghost y mostrar el mensaje la contraseña es incorrecta.<br>
  
Escenario de prueba PE003: Ingreso con usuario incorrecto <br>
  * En este esenario, el usuario ingresa la credenciasles de correo  Correcto Incorrecto y contraseña correcta.y el resultado esperado es que no pueda ingresar a la plataforma Ghost y mostrar el mensaje El usuario es incorrecto.<br>
   
Escenario de prueba PE004: Recuperar contraseña con usuario correcto <br>
  * En este escenario, el usuario ingresa a la opción olvidar, y el resultado esperado es que envie un correo para gestionar el cambio de contraseña. <br>

Escenario de prueba PE005: Recuperar contraseña con usuario incorrecto <br>
  * En este escenario, el usuario ingresa a la opción olvidar, y el resultado esperado es que envie un correo para gestionar el cambio de contraseña. <br>

Escenario de prueba PE006: Crear post sin Imagen <br>
  * En este escenario, el usuario crea un post con los campos de titulo y descripción y se publica. y el resultado esperado es que se muestre el mensaje de post publicado.<br>

Escenario de prueba PE007: Crear post con Imagen <br>
  * En este escenario, el usuario crea un post con los campos de titulo , descripción y se carga una imagen ,da click en el botón publicar. y el resultado esperado es que se muestre el mensaje de post publicado.<br>

Escenario de prueba PE008: Borrar un post <br>
  * En este escenario, el usuario Elimina el primer post que se cree. y el resultado esperado es que se muestre el mensaje de post Eliminado.<br>

Escenario de prueba PE009: Editar un post <br>
  * En este escenario, el usuario Edita el primer post que se cree. y el resultado esperado es que se muestre el mensaje de post Publicado.<br>

Escenario de prueba PE010: Crear nueva pagina <br>
  * En este escenario, el usuario Crear una pagina Con el titulo y la descripción. y el resultado esperado es que se muestre el mensaje de pagina Publicado.<br>

Escenario de prueba PE011: Editar pagina <br>
  * En este escenario, el usuario Edita la primera pagina Creada, y el resultado esperado es que se muestre el mensaje de pagina Publicado.<br>

Escenario de prueba PE012: Borrar pagina <br>
  * En este escenario, el usuario Borra la primera pagina Creada, y el resultado esperado es que se muestre el mensaje de pagina Publicado.<br>

Escenario de prueba PE013: Crear Tag <br>
  * En este escenario, el usuario Crea el tag con el campo name diligenciado y campo slug, despues le da click al botón save, y el resultado esperado es que el número de tag del listado aumente.<br>

Escenario de prueba PE014: Editar Tag <br>
  * En este escenario, el usuario Edita el tag con el campo name diligenciado , despues le da click al botón save, y el resultado esperado es la modificación en el campo name.<br>

Escenario de prueba PE015: Eliminar Tag <br>
  * En este escenario, el usuario Elimina el primer tag creado de la lista , despues le da click al botón Delete Tag, y el resultado esperado es que el número de tags del listado redusca.<br>

Escenario de prueba PE015: Eliminar Tag <br>
  * En este escenario, el usuario Elimina el primer tag creado de la lista , despues le da click al botón Delete Tag, y el resultado esperado es que el número de tags del listado redusca.<br>

Escenario de prueba PE016: Invitar un nuevo Staff <br>
  * En este escenario, el usuario Le da click al boton Invite people y diligencia el correo al que le llegara el correo de invitación a registrarse en Ghost, y el resultado esperado es que envie el correo.<br>

Escenario de prueba PE017: Editar Titulo del sitio <br>
  * En este escenario, el usuario En las configuraciones modifica en settings -> general el titulo del sitio, y el resultado esperado es que en ver sitio aparesca el nombre que se modifica.<br>

Escenario de prueba PE018: Cancelar Eliminación de Tag <br>
  * En este escenario, El usuario al momento de confirmar la eliminacióndel tag le da click al boton Cancel , y el resultado esperado es que no elimine el tag.<br>

Escenario de prueba PE019: Editar un Post en Borrador <br>
  * En este escenario, El usuario edita el campo title en el primer post y lo deja en estado borrador , y el resultado esperado haga la modificación del titulo pero no el cambio de estado.<br>

Escenario de prueba PE020: Crear y publicar un post con tag <br>
  * En este escenario, El usuario crea un post, agrega un tag y pubica el post , y el resultado esperado es que cree el post en estado publicado.<br>

# Escenarios de Prueba tratados - Ghost v4.44

Escenario de prueba PE021: Muestra el menu filtro por Autor de la seccion Draft <br>
  * En este escenario el usuuario valida el correcto de pliegue del la opcion del menu del filtro por Autor y se espera que se despligue de manera correcta y finalmente cierra sesión.<br>

Escenario de prueba PE022: Muestra el menu filtro por Tag seccion Draft <br>
  * En este escenario el usuuario valida el correcto de pliegue del la opcion del menu del filtro por Tag y se espera que se despligue de manera correcta y finalmente cierra sesión.<br>

Escenario de prueba PE023: Muestra el menu filtro por recientes seccion Draft <br>
  * En este escenario el usuario valida el correcto de pliegue del la opcion del menu del filtro por recientes y se espera que se despligue de manera correcta y finalmente cierra sesión.<br>
  
Escenario de prueba PE024: Muestra el menu filtro por Tipo seccion Draft <br>
  * En este escenario el usuario valida el correcto de pliegue del la opcion del menu del filtro por Tipo y se espera que se despligue de manera correcta y finalmente cierra sesión.<br>

Escenario de prueba PE025: Muestra el menu filtro por Autor de la seccion Published<br>
  * En este escenario el usuario valida el correcto de pliegue del la opcion del menu del filtro por Autor y se espera que se despligue de manera correcta y finalmente cierra sesion.<br>

Escenario de prueba PE026: Muestra el menu filtro por Tag seccion Published<br>
  * En este escenario el usuario valida el correcto de pliegue del la opcion del menu del filtro por Tag y se espera que se despligue de manera correcta y finalmente cierra sesión.<br>

Escenario de prueba PE027: Muestra el menu filtro por recientes seccion Published<br>
  * En este escenario el usuario valida el correcto de pliegue del la opcion del menu del filtro por recientes y se espera que se despligue de manera correcta y finalmente cierra sesión.<br>  

Escenario de prueba PE028: Muestra el menu filtro por Tipo seccion Published<br>
  * En este escenario el usuario valida el correcto de pliegue del la opcion del menu del filtro por Tipo y se espera que se despligue de manera correcta y finalmente cierra sesión.<br>  

Escenario de prueba PE029: Muestrar Post desde la  seccion Schedule<br>
  * En este escenario el usuuario valida el correcto de pliegue de la opcion que permite mostrar todos los post desde la seccion Scheduled y se espera que se muestren los todos los post y finalmente cierra sesión.<br>

Escenario de prueba PE030:  Muestra Sitio  desde el administrador <br>
  * En este escenario el usuuario valida el correcto de pliegue de la opcion que permite mostrar el sitio a publicar  desde el admin  y finalmente cierra sesión.<br> 
 

# Pros y contras de las herramientas
Por favor ir al sitio: <br>

https://github.com/Strongrow/semana5_Pruebas-E2E/wiki/Resumen_Herramientas <br>


# Kraken
1. Ir a la carpeta de kraken y a la versión que desea correr las pruebas con cd src/kraken/v3.42 ó src/kraken/v4.44.0 <br>
2. Instalar las dependencias del Package.json ejecutar npm install  <br>
3. Modificar el archivo de configuración para asignar los valores deseados por el usuario. El archivo se encuentra en: src/kraken/properties.json. Es importante notar que acá se encuentran las credenciales a usar en los escenarios de prueba, por lo que es necesario que sean modificados de acorde a las preferencias del tester. <br>
4. Copiar el escenario deseado para ejecutar en el archivo RunningScenario.feature (Los escenarios se encuentran en src/kraken/v3.42/features/scenarios ó src/kraken/v4.44.0/features/scenarios).<br>

Ejecutar el comando npx kraken-node run.<br>


# Versiones de Ghosts (Docker)

Para crear estas pruebas utilizamos  las  versiones <br>
 * La v3.42 y la v4.44.0. <br>
Si va a utilizar docker debe correr los contenedores, es necesario tener instalado Docker en su maquina y en el consola o terminar ejecutar los siguientes comandos. <br>

Es Importante aclarar que la url debe ser lo que indicada para la maquina donde desea correr el Docker.<br>
Ejemplo si va a correrlas de manera local se deberia cambiar machine-ip por localhost 

*docker run -d -e url=http://machine-ip:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42

*docker run -d -e url=http://machine-ip:4440 -p 4440:2368 --name ghost_4.44.0 ghost:4.44.0

# Descarga de contenido y ejecución de test

Para este repositorio se tienen destinadas varias carpetas las cuales contienen el desarrollo de pruebas e2e sobre Ghost.<br>

Puede descargar la carpeta en la tecnología que desee y luego empezar a ejecutar las pruebas. <br>
Recuerde que los proyectos deben instalar las librerías primero. Por lo tanto, una vez descargue la carpeta en la tecnología deseada ejecute el comando
npm install y luego si puede iniciar la ejecución de los casos. <br>

En la sección https://github.com/Strongrow/semana5_Pruebas-E2E/wiki/publio puede encontrar una guía documentada de como ejecutar un test en cada tecnología. <br>



Para algunos test es necesario que digite el id del componente antes de ejecutar la prueba. Esto es debido a que para algunos test, la prueba depende de los datos de prueba para su ejecución.

# Correr escenarios de pruebas en  Cypress (Semana 6)

Primer paso <br>
Asegurese de tener instalado <br>

* node version 16 o superior (Recomendada 18)
* npm  version 6 o superior
* git
* Cypress ver (https://docs.cypress.io/guides/getting-started/installing-cypress)

Segundo paso

* Clone el repositorio, (solo si lo ha hecho) con el comando git clone https://github.com/Strongrow/semana5_Pruebas-E2E.git desde la terminal del su maquina <br>

Tercer paso 

* Para correr la pruebas con Cypress verifique que en al archivo package.json  se encuentre la linea "cypress:open": "cypress open" <br>
debe ver se asi <br>

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cypress:open": "cypress open"
  },

 * Posterior a ello use el comando npm run cypress:open <br>
 * o el comando npx cypress run si desea ver las pruebas en la consola de la terminal 
 
* Para correr las pruebas de la carpeta v4.44 
 es importante :

Cambiar en el archivo  /fixtures/version.json la url a probar 
la v4 corresponde a las pruebas de la carpeta que se desea correr  
deberia quedar similar a este 

{
    "v3": "http://localhost:3001/ghost/",
    "v4": "http://localhost:3002/ghost"  
}

Para cambiar las credenciales de acceso es importante 
agregarlas en la carpeta  /fixtures/version.json
donde se debe agregar el email y password 
deberia quedar simiale a este 

{
  "email": "pruebas@uniandes.edu.co",
  "password": "123456789="
} 

# Correr escenarios de pruebas en  Cypress (Semana 7)
Las pruebas se realizaron a una version de Ghost que se encuentra en http://35.244.81.193/ghost<br>
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/14d01898-fd16-488f-94a5-109a6453edec)

Primer paso<br>
Debe tener instalado <br>
* node version 16 o superior (Recomendada 18)<br>
* npm version 6 o superior<br>
* git<br>
* Cypress ver (https://docs.cypress.io/guides/getting-started/installing-cypress)<br>

Segundo paso<br>

* Clone el repositorio, (solo si lo ha hecho) con el comando git clone https://github.com/Strongrow/semana5_Pruebas-E2E.git desde la terminal del su maquina
y en la termina desde la ubicacion del directorio instalado use el comando npm install<br>

Tercer paso<br>

* Agregue a la raiz del proyecto la carpeta utils, para ello debe descargarla y proceder a descomprimirla en la raiz como se muestra en la imagen 
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/f8772036-c03d-4c12-a4ba-3903b4ad84ed)


Cuarto paso<br>

* Para correr la pruebas con Cypress verifique que en al archivo package.json se encuentre la linea "cypress:open": "cypress open"
debe ver se asi
"scripts": { "test": "echo "Error: no test specified" && exit 1", "cypress:open": "cypress open" },

* Posterior a ello use el comando npm run cypress:open<br>

* o el comando npx cypress run si desea ver las pruebas en la consola de la terminal<br>

# Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas.(Escenarios Cypress)
* En la carpeta Apriori (Ver imagen)se encuentran los escenarios construidos con esa estrategia, los cuales utlizan los archivos Json como referencia en los escenarios <br> <br>
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/4c0d484b-d88d-4414-aed8-e1b2b6c0a453)

* En la carpeta pageObjectPatron (Ver imagen)se encuentra el patron que interactua con los escenarios para la estrategia Apriori y Aleatoria representadas los archivos DatafakerPage.js( aleatorio dinámico) y DataMockPage.js (Datos Apriori)<br> <br>
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/c2ca342d-d9f5-4e3f-95ea-44e6eadcd0e1)

# Reporte Manual
Si se quiere ejecutar el reporte de regresión visual de manera manual, se necesitan realizar el siguiente porceso de Cypress. Se debe ejecutar los siguiente comandos cd src/reportScript y node script.js, y luego seguir las instrucciones en pantalla donde se pedirá incluir los paths de las carpetas que contienen los screenshots. (Los Paths deben de ser absolutos, no relativos). Después de esto, se generará un html que puede ser accedido desde cualquier navegador para poder ser visualizado.

   Ejemplo de paths a ingresar (Windows):

   * C:\.\src\Cypress-e2e\cypress\screenshots\2023-11-19\v3.42.0
   * C:\.\src\Cypress-e2e\cypress\screenshots\2023-11-19\v4.44.0

