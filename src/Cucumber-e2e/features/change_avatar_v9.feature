Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y poder cambiar la imagen de avatar
    Scenario: Crear nuevo tag diligenciando nombre muy largo
        Given Abrir la pagina de ghost v9
        When Ingreso el usuario v9 "user@example.com" 
        And Ingreso el password v9 "Admin12345"
        And Dar click en el boton Login v9
        And Ir al menu profile v9
        And Cambiar la foto de avatar v9
        And Guardar cambios v9
        Then Verificar que no exista error 

