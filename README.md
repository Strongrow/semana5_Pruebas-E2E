## PRUEBAS AUTOMATIZADAS 

# Autores

Javier Andrés Acevedo  ja.acevedob1@uniandes.edu.co <br>
Publio Diaz p.diazp@uniandes.edu.co <br>
Juan Camilo Rodríguez  jc.rodriguez2345@uniandes.edu.co <br>
Lucas Omar Blandón P   l.blandon@uniandes.edu.co <br>

# Tabla de Contenido 
## **1.    [Entrega final](#Entrega-final).**
### **1.1  [Video](#Video)**
### **1.2  [Resultados estrategia de pruebas semana uno](#Resultados-estrategia-de-pruebas-semana-uno)**
### **1.3  [Instrucciones para ejecutar la estrategia de pruebas](#Instrucciones-para-ejecutar-la-estrategia-de-pruebas)**
## **2.    [Semana 7](#Semana-7)**
### **2.1    [Herramientas Utilizadas para pruebas automatizadas para esta entrega](#Herramientas-Utilizadas-para-pruebas-automatizadas-para-esta-entrega)**
#### **2.1.1    [Correr escenarios de pruebas en Cypress](#Correr-escenarios-de-pruebas-en-Cypress)**
#### **2.1.2    [Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas](#Descripción-de-las-estrategias-usadas-y-cómo-se-integran-estas-estrategias-en-los-escenarios-de-pruebas)**
#### **2.1.3    [Correr escenarios de pruebas en CucumberJS](#Correr-escenarios-de-pruebas-en-CucumberJS)**
#### **2.1.4    [Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas cucumber.](#Descripción-de-las-estrategias-usadas-y-cómo-se-integran-estas-estrategias-en-los-escenarios-de-pruebas-cucumber)**
#### **2.1.5  [Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas Kraken](#Descripción-de-las-estrategias-usadas-y-cómo-se-integran-estas-estrategias-en-los-escenarios-de-pruebas-Kraken)**
## **3  [Semana 6.](#Semana-6)**
### **3.1    [Video Semana 6 VRT](#Video-Semana-6-VRT)**
### **3.2    [Funcionalidades](#Funcionalidades)**
### **3.2.1    [Versiones de Ghosts Docker](#Versiones-de-Ghosts-Docker)**
### **3.2.2    [Escenarios de Prueba tratados Ghost v3 42](#Escenarios-de-Prueba-tratados-Ghost-v3-42)**
### **3.2.3    [Escenarios de Prueba tratados Ghost v4 44](#Escenarios-de-Prueba-tratados-Ghost-v4-44)**
### **3.3    [Integración de Gherkin y CucumberJS sobre Ghost](#Integración-de-Gherkin-y-CucumberJS-sobre-Ghost)**
### **3.3.1    [Instalación y preparación de datos iniciales](#Instalación-y-preparación-de-datos-iniciales)**
### **3.3.1    [Descarga de contenido y ejecución de test](#Descarga-de-contenido-y-ejecución-de-test)**
### **3.4    [Kraken](#Kraken)**
### **3.5    [Correr escenarios de pruebas en Cypress](#Correr-escenarios-de-pruebas-en-Cypress)**
### **3.6    [Reporte Manual](#Reporte-Manual)**
### **3.7    [Pros y contras de las herramientas](#Pros-y-contras-de-las-herramientas)**

# Entrega final
# Video
# Resultados estrategia de pruebas semana uno
# PlayWright Resultados[ResultadosPlaywright.zip](https://github.com/Strongrow/semana5_Pruebas-E2E/files/13537945/ResultadosPlaywright.zip)


# Instrucciones para ejecutar la estrategia de pruebas
#### Escenarios Playwrigth
Paso uno descargue el repositorio <br>
paso dos instale PlayWright con el siguiente comando<br> 
npm init playwright@latest<br>
Paso tres para ejecutar las pruebas utilice la siguiente info<br>  
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/8eaa8b2d-0789-489a-9d29-2168311417eb)

# Semana-7
# Herramientas Utilizadas para pruebas automatizadas para esta entrega
Para la entrega de estos Escenario nuestro grupo utilizo la version de Ghost 5.73 que tenemos alojada en http://35.244.81.193/ghost<br>
Sobre esta version se realizaron las prueba en Kraken, Cucumber y Cypress
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/14d01898-fd16-488f-94a5-109a6453edec)
# Correr escenarios de pruebas en Cypress 
Las pruebas se realizaron a una version de Ghost alojada por muestro equipo  en  google Cloud y  que se encuentra en http://35.244.81.193/ghost<br>

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
* Paso recomendado para los escenarios del 91 al 117
* Agregue a la raiz del proyecto la carpeta utils, para ello debe crearla en la raiz como se muestra en la imagen <br>

![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/f8772036-c03d-4c12-a4ba-3903b4ad84ed)

* La carpeta utils tiene en su interior, 4 carpetas que usadas para agregar archivos de audio, texto, video e imagen los cuales son necesarios para las pruebas con la estrategia Apriori<br>
* Si agrega archivo a estas carpetas, escriba el nombre de los mismos en el archivo MOCK_DATA.json <br>
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/9b5c62f1-4df0-4711-b43c-0592d554fa56)

Ejemplo<br>
* solo edite la parte fin de cada ruta(es decir escriba el nombre del archivo que usted agrego)<br> 
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/2e0747eb-4377-4108-b269-86fe4a0060cb)


Cuarto paso<br>

* Para correr la pruebas con Cypress verifique que en al archivo package.json se encuentre la linea "cypress:open": "cypress open"
debe ver se asi
"scripts": { "test": "echo "Error: no test specified" && exit 1", "cypress:open": "cypress open" },

* Posterior a ello use el comando npm run cypress:open<br>

* o el comando npx cypress run si desea ver las pruebas en la consola de la terminal<br>

# Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas
* En la carpeta Apriori (Ver imagen)se encuentran los escenarios construidos con esa estrategia, los cuales utlizan los archivos Json como referencia en los escenarios <br> <br>
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/4c0d484b-d88d-4414-aed8-e1b2b6c0a453)

* En la carpeta pageObjectPatron (Ver imagen)se encuentra el patron que interactua con los escenarios para la estrategia Apriori y Aleatoria representadas los archivos DatafakerPage.js( aleatorio dinámico) y DataMockPage.js (Datos Apriori)<br> <br>
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142680425/c2ca342d-d9f5-4e3f-95ea-44e6eadcd0e1)

<hr>

# Correr escenarios de pruebas en CucumberJS

Integración de pruebas usando diferentes técnicas de creación de datos sobre Ghost con Cucumber.

## Instalación del proyecto

1. Remitirse a Ghost http://35.244.81.193/ghost/ 
2. Para el proyecto de Cucumber utilizamos el node 14.21.3
3. Se recomienda utilizar la herramienta nvm con el fin de poder cambiar de versiones entre node ver https://4geeks.com/es/how-to/como-instalar-nvm-en-windows
4. Descargar el proyecto y navegar a la raíz del repositorio Cucumber-e2e.
5. Usar el comando `npm install` 
6. Fijarse que se instalen las dependencias de lo contrario instalarlas manualmente con npm install Libreria.

# Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas cucumber
## Lista de casos de prueba

## Nota

* Dependiendo del escenario a ejecutar tener en cuenta la columna de observaciones
* Ubicarse dentro del directorio Cucumber-e2e
* Ejecutar el comando npm test -t .\features\<NOMBRE_PRUEBA_A_EJECUTAR>.feature


| Id                    | Escenario                     | Descripción del escenario                      | Técnica utilizada  | Observaciones  |
|---------------------------|----------------------------|-----------------------------|-----------------------------|-----------------------------|
| Escenario 58           | create-tag.feature           | Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando los campos de nombre,color y descripcion     | Pseudo aleatorio. <br>Se hace uso de Mokaroo API<br> Endpoint: https://my.api.mockaroo.com/tags.json?key=3856ffb0  | Ninguna | 
| Escenario 59   |create-tag_v1.feature  | Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando los campos de nombre,descripcion,color,meta title,meta decripcion y meta url   | Pseudo aleatorio. <br>Se hace uso de Mokaroo API<br> Endpoint: https://my.api.mockaroo.com/tags.json?key=3856ffb0 | Ninguna |
| Escenario 60   | create-tag_v2.feature  | Como usuario quiero logearme en el sistema ghost y realizar la prueba de crear un tag introduciendo mas de 191 caracteres en el campo name   |  Pseudo aleatorio. <br>Se hace uso de Mokaroo API<br> Endpoint: https://my.api.mockaroo.com/tags.json?key=3856ffb0 | Ninguna |
| Escenario 61   | create-tag_v3.feature  | Como usuario quiero logearme en el sistema ghost y tratar de crear un nuevo Tag diligenciando de manera errada el campo de color   |  Pseudo aleatorio. <br>Se hace uso de Mokaroo API<br> Endpoint: https://my.api.mockaroo.com/tags.json?key=3856ffb0 | Ninguna |
| Escenario 62   | create-tag_v4.feature  |Como usuario quiero logearme en el sistema ghost y tratar de crear un tag diligenciando el campo de slug con un texto muy largo   | Pseudo aleatorio. <br>Se hace uso de Mokaroo API<br> Endpoint: https://my.api.mockaroo.com/tags.json?key=3856ffb0 | Ninguna |
| Escenario 63   | create-tag_v5.feature  | Como usuario quiero logearme en el sistema ghost y tratar de crear un tag diligenciando el campo de descripcion con un texto muy largo   |  Pseudo aleatorio. <br>Se hace uso de Mokaroo API<br> Endpoint: https://my.api.mockaroo.com/tags.json?key=3856ffb0 | Ninguna |
| Escenario 64   | create-tag_v6.feature  |Como usuario quiero logearme en el sistema ghost y probar que no hay error al expandir o colapsar las secciones de expand  |  Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 65   | create-tag_v7.feature  | Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando el nombre y subiendo una imagen   | Datos a-priori. <br>Se carga la imagen desde una ruta estática. Carpeta uploads.| Ninguna |
| Escenario 66   | create-tag_v8.feature  | Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando el nombre y subiendo un fichero de texto donde hay que subir una  imagen  |   Datos a-priori. <br>Se carga la imagen desde una ruta estática. Carpeta uploads.| Ninguna |
| Escenario 67   | Change_avatar_v9.feature  | Como usuario quiero logearme en el sistema ghost y poder cambiar la imagen de avatar   |  Datos a-priori. <br>Se carga la imagen desde una ruta estática. Carpeta uploads.| Ninguna |
| Escenario 68   | edit-post-draft.js  | Como usuario quiero logearme en el sistema ghost y poder editar un post que no ha sido publicado   |Aleatorio. <br>Se utiliza Faker| Se debe tener en cuenta el id del post. |
| Escenario 69   | edit-post-published.js  |Como usuario quiero logearme en el sistema ghost y poder editar un post que ya ha sido publicado   | Aleatorio. <br>Se utiliza Faker | Se debe tener en cuenta el id del post. |
| Escenario 70   | login-wrong-password.js  |Como usuario quiero logearme con un usuario correcto y un password incorrecto  | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 71   | login-wrong-user.feature | Como usuario quiero logearme con un usuario incorrecto y password correcto   | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 72   | login-wrong-credentials.feature | Como usuario quiero logearme con un usuario y password incorrectos   | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 73   | search_general_settings_v10.feature | Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu general settings  | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 74   | search_site_v11.feature | Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu Site   | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 75   | search_membership_v12.feature | Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu Memberships  | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 76   | search_email_newsletter_v13.feature | Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu Email newsletter   | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 77   | search_advanced_v14.feature | Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu Advanced   | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 78   | change_options_day_dashboard_v15.feature |Como usuario quiero logearme en el sistema ghost y poder seleccionar al azar las opciones de Days   | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 79   | filter_post_option_v16.feature |Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post   | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 80   | filter_post_option_v17.js |Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post en All Access   | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 81   | filter_post_option_v18.js |Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post en All Authors   | Aleatorio. <br>Se utiliza Faker | Debe haber minimo tres autores |
| Escenario 82   | filter_post_option_v19.js |Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post en All tags   | Aleatorio. <br>Se utiliza Faker | Debe haber minimo tres tags |
| Escenario 83   | filter_post_option_v20.js |Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post en Newest first   | Aleatorio. <br>Se utiliza Faker | Ninguna |
| Escenario 84   | create_custom_integration_v21.feature |Como usuario quiero logearme en el sistema ghost y poder crear un custom integrations   |  Pseudo aleatorio. <br>Se hace uso de Mokaroo API<br> Endpoint: https://my.api.mockaroo.com/tags.json?key=3856ffb0 | Ninguna |


## Ejecutar los tests 

### Windows

Ejemplo de ejecución para un feature en particular: <br>
Se puede ejecutar los test con `npm test -t .\features\<NOMBRE_FEATURE>.feature` para en feature en particular. <br>
Ejemplo:<br>
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/3b1cfddc-b617-45b9-b4c0-b8892ec10cd6)


<hr>

# Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas Kraken

Cuando se integran estrategias de prueba como a priori y aleatorización con Faker en los escenarios de pruebas de Kraken, se crea un enfoque robusto y flexible para garantizar la calidad y la eficacia de las pruebas de software. A continuación, describo cómo se integran estas estrategias:

Estrategia A Priori
La estrategia a priori implica definir conjuntos de datos de prueba específicos basados en el conocimiento previo del sistema y sus posibles puntos de falla. Estos datos se eligen cuidadosamente para cubrir casos extremos, valores límite, y escenarios representativos del uso real de la aplicación. Esta estrategia es útil para validar la funcionalidad en condiciones conocidas y esperadas.

Integración en los Escenarios de Kraken:

Datos Específicos: Se usan datos a priori para probar funcionalidades específicas donde se conoce el resultado esperado. Por ejemplo, se pueden ingresar datos de usuario válidos o inválidos para probar la autenticación o la validación de formularios.
Casos de Borde: Estos datos se utilizan para probar los límites del sistema, como el máximo número de caracteres en un campo de texto o valores extremos en campos numéricos.
Estrategia Aleatoria con Faker
La estrategia de aleatorización con Faker implica la generación de datos de prueba aleatorios y realistas. Esta técnica es útil para simular una amplia gama de posibles entradas de usuario y para descubrir errores que no se identifican con conjuntos de datos predefinidos.

Integración en los Escenarios de Kraken:

Generación de Datos Aleatorios: Se utiliza Faker para generar datos como nombres de usuario, direcciones de correo electrónico, contraseñas, etc., de manera aleatoria. Esto ayuda a realizar pruebas de estrés y a verificar la robustez del sistema ante entradas impredecibles.
Pruebas de Estrés y Volumen: Los datos aleatorios se usan para llenar formularios o realizar acciones en masa, lo que ayuda a identificar problemas de rendimiento o errores en la gestión de grandes volúmenes de datos.
Integración de Estrategias en los Escenarios de Pruebas de Kraken
Definición de Escenarios: Se definen escenarios de prueba en Kraken que utilizan tanto datos a priori como aleatorios. Por ejemplo, un escenario podría utilizar datos a priori para probar un flujo de trabajo específico y luego aplicar datos aleatorios para probar el mismo flujo bajo condiciones variables.

Automatización de Pruebas: Se implementan scripts de prueba automatizados en Kraken que utilizan ambas estrategias. Estos scripts pueden invocar datos específicos para ciertas pruebas y utilizar la generación aleatoria de datos para otras.

Cobertura de Pruebas: La combinación de ambas estrategias asegura una amplia cobertura de pruebas, desde casos de uso específicos y predecibles hasta escenarios imprevistos y extremos.

En resumen, la integración de estrategias a priori y aleatorias en los escenarios de pruebas de Kraken permite una evaluación exhaustiva y eficaz del software, asegurando que este pueda manejar tanto escenarios predecibles como impredecibles en el entorno de producción.

#Listado Escenarios de pruea con estrategia A PRIORI y ALEATOREO (FAKER)
En los 12 escenario se usarón las dos estrategias.

* scenario  46
* scenario  47
* scenario  48 
* scenario  49
* scenario  50
* scenario  51
* scenario  52
* scenario  53
* scenario  54
* scenario  55

# Semana 6

## Integración de Gherkin y CucumberJS sobre Ghost

Integración de pruebas VRT sobre Ghost versión 4.44 sobre la Versión 5.73 con Cucumber.

## Versiones de las dependencias
<table>
<tr>
    <td>TestCafé</td>
    <td>1.1.0</td>
</tr>
<tr>
    <td>CucumberJS</td>
    <td>5.1.0</td>
</tr>

<tr>
    <td>base64-img</td>
    <td>1.0.4</td>
</tr>

<tr>
<td>backstopjs</td>
<td>6.2.2</td>
    </tr>

<tr>
<td>puppeteer</td>
    <td>21.5.2</td>
</tr>

<tr>
<td>resemblejs</td>
<td>6.2.2</td>
    </tr>
    
    
<tr>
    <td>npm</td>
    <td>6.0.0</td>
</tr>


<tr>
    <td>eslint</td>
    <td>4.19.1</td>
</tr>

</table>

## Instalación y preparación de datos iniciales

1. Asegurarse de tener ghost ejecutado en http://localhost:3002/ghost/ para la versión 4.44 y para la version 5.73 http://localhost:2368/ghost/ 
2. Asegurarse de tener [Nodejs](https://nodejs.org/) instalado
3. Para la versión de Ghost 5.73 se utiliza node 18.18.1 y para el proyecto de cucumber utilizamos el node 14.21.3
4. Una vez instalado el ghost 5.73 puede ejecutar la herramienta ghost doctor para verificar que este correcto.
5. Se recomienda utilizar la herramienta nvm con el fin de poder cambiar de versiones entre node ver https://4geeks.com/es/how-to/como-instalar-nvm-en-windows
6. Descargar el proyecto y navegar a la raíz del repositorio 
7. Usar el comando `npm install` 
8. Fijarse que se instalen las dependencias de lo contrario instalarlas manualmente con npm install <Libreria>.
9. Una vez instalado el ghost en la versión 4.44 siga los pasos iniciales y cree un usuario con email pruebas1711_1@yopmail.com password 123456789=
10. Una vez instalado el ghost en la version 5.73 siga los pasos iniciales y cree un usuario con email p.diazp@uniandes.edu.co password 123456789=
11. Ingresar al sistema ghost con la version 4.44 y crear un post y dejarlo en draft, lo mismo con la versión 5.73 ( esto es para tener una semilla de los casos de pruebas ).
12. Ingresar al sistema ghost con la version 4.44 y crear un post y dejarlo en publicado, lo mismo con la versión 5.73 ( esto es para tener una semilla de los casos de pruebas ).
13. Copiar el id del post draft de la versión 4.44 y ponerlo en el fichero edit-post-draft.js en la constante id_post_draft
14. ![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/f65ba369-cfae-443b-84b9-21a3e689a050)
15. Copiar el id del post publicado de la versión 5.73 y ponerlo en el fichero ghost-page.js en la constante id_post_draft_5_73. (ver imagen aterior para guia)
     

## Ejecutar los tests 
### Windows
Antes de ejecutar la prueba asegurese de tener corriendo el Ghost 4.44 propuesto: <br>

docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0 <br>

<br>

Para la otra versión puede tener corriendo Ghost 5.73. <br>
Luego de iniciado las dos versiones de ghost pasarse a la version de node 14.21.3

Ejemplo de ejecución para un feature en particular: <br>
Se puede ejecutar los test con `npm test -t .\features\create-post.feature` para en feature en particular. <br>
O Puede ejecutar el bat "pruebas_vrt.bat". En este bat lo unico que se debe cambiar es la ruta inicial: <br>
cd C:\Users\diazpd\Documents\MISO\Pruebas_automatizadas\semana5\entrega_semana_5\semana5_Pruebas-E2E\ghost-e2e-cucumber <br> 
para poner la ruta donde este alojado el proyecto descargado.

## Documentación

Algunas imagenes de guia: <br>
Ghost 5.73 
![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/bed26989-5886-4438-91d9-c92defa09faa)

Ejecución de un feature en particular: <br>

![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/4a369ce0-b44a-4dec-a557-738b177eaf6d)

Ejecucion de varios feature en forma secuencial: <br> 

![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/76e211bd-ad7f-4d36-9809-b07bf21d2b2e)

Ejemplo de salida: <br>


![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/ead04e3e-9349-4ee4-9004-e9298e1ea95d)

![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/3c2fb4a8-69e9-4d12-9048-60556f9221fe)

![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/86d3e1d1-418f-4b56-be79-14f9ea22738c)

![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/2c159755-6368-4869-9a51-2d8a51b0cb9d)


![image](https://github.com/Strongrow/semana5_Pruebas-E2E/assets/142330691/3f10ab3f-b48e-4831-8b1f-6cb7f08fe1a7)

Ejemplo de salida:


[screenshots.zip](https://github.com/Strongrow/semana5_Pruebas-E2E/files/13406237/screenshots.zip)












# Video Semana 6 VRT 
   https://youtu.be/nt6aLvvrR8E
# Funcionalidades 

1. Ingreso Ghost: Esta funcionalidad contribuye a la confirmación de la identidad del usuario y fortalece la protección de los datos en el sitio web al limitar el acceso a información confidencial. <br>

2. Manejo de tags: Esta función permite habilita al administrador de Ghost para estructurar y segmentar las entradas del blog mediante el uso de etiquetas. Ofrece la posibilidad de generar, modificar y eliminar etiquetas, lo que facilita la clasificación y organización de los artículos de una manera más eficiente y efectiva. Esta organización mejora la experiencia de los usuarios del sitio web, permitiéndoles localizar con mayor facilidad el contenido que les interesa.<br>

3. Manejo de posts: Esta funcionalidad facilita que el administrador de Ghost gestione el contenido del blog en su sitio web. A través del panel de control, es posible componer nuevos artículos, incorporar imágenes y diferentes tipos de medios, determinar la fecha y hora para la publicación automática, y realizar actualizaciones o eliminar publicaciones ya existentes. <br>

4. Manejo de paginas: Esta funcionalidad habilita al administrador de Ghost para la creación, modificación y eliminación de páginas en su sitio web. A diferencia de las publicaciones de blog, que se organizan cronológicamente, las páginas se emplean principalmente para contenido estático, sin estar ligadas a fechas específicas. <br>

5. Manejo de Borradores: Esta funcionalidad habilita la gestión de etiquetas y en el manejo de publicaciones que se encuentran en estado de borrador y publicado, facilitando su organización y edición. <br>

7. Manejo de Calendario: Esta funcionalidad habilita la gestión de publicaciones que se encuentran en estado de borrador y publicado, facilitando su organización y edición. <br>

# Escenarios de Prueba tratados Ghost v3 42

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

# Escenarios de Prueba tratados Ghost v4 44

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


## Kraken
  
1. Ir a la carpeta de kraken y a la versión que desea correr las pruebas <br>
2. Instalar las dependencias del Package.json ejecutar npm install  <br>
3. Modificar el archivo de configuración para asignar los valores deseados por el usuario. El archivo se encuentra en: src/kraken/properties.json. Es importante notar que acá se encuentran las credenciales a usar en los escenarios de prueba, por lo que es necesario que sean modificados de acorde a las preferencias del tester. <br>
4. Copiar el escenario deseado para ejecutar en el archivo RunningScenario.feature (Los escenarios se encuentran en src/kraken/v3.42/features/scenarios ó src/kraken/features/scenarios).<br>

Ejecutar el comando npx kraken-node run.<br>


# Versiones de Ghosts (Docker)

Para crear estas pruebas utilizamos  las  versiones <br>
 * la v4.44.0. <br>
Si va a utilizar docker debe correr los contenedores, es necesario tener instalado Docker en su maquina y en el consola o terminar ejecutar los siguientes comandos. <br>

Es Importante aclarar que la url debe ser lo que indicada para la maquina donde desea correr el Docker.<br>
Ejemplo si va a correrlas de manera local se deberia cambiar machine-ip por localhost 

*docker run -d -e url=http://machine-ip:4440 -p 4440:2368 --name ghost_4.44.0 ghost:4.44.0

# Descarga de contenido y ejecución de test

Para este repositorio se tienen destinadas varias carpetas las cuales contienen el desarrollo de pruebas e2e sobre Ghost.<br>

Puede descargar la carpeta en la tecnología que desee y luego empezar a ejecutar las pruebas. <br>
Recuerde que los proyectos deben instalar las librerías primero. Por lo tanto, una vez descargue la carpeta en la tecnología deseada ejecute el comando
npm install y luego si puede iniciar la ejecución de los casos. <br>

En la sección https://github.com/Strongrow/semana5_Pruebas-E2E/wiki/publio puede encontrar una guía documentada de como ejecutar un test en cada tecnología. <br>



Para algunos test es necesario que digite el id del componente antes de ejecutar la prueba. Esto es debido a que para algunos test, la prueba depende de los datos de prueba para su ejecución.

# Correr escenarios de pruebas en Cypress

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



# Reporte Manual
Si se quiere ejecutar el reporte de regresión visual de manera manual, se necesitan realizar el siguiente porceso de Cypress. Se debe ejecutar los siguiente comandos cd src/reportScript y node script.js, y luego seguir las instrucciones en pantalla donde se pedirá incluir los paths de las carpetas que contienen los screenshots. (Los Paths deben de ser absolutos, no relativos). Después de esto, se generará un html que puede ser accedido desde cualquier navegador para poder ser visualizado.

