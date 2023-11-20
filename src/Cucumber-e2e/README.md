# Integración de Gherkin y CucumberJS sobre Ghost

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

## Documentation

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























