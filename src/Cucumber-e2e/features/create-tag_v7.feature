Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando el nombre y subiendo una imagen
    Scenario: Crear nuevo tag diligenciando nombre muy largo
        Given Abrir la pagina de ghost v7
        When Ingreso el usuario v7 "user@example.com"
        And Ingreso el password v7 "Admin12345"
        And Dar click en el boton Login v7
        And Ir al menu Tags v7
        And Dar click en el boton New Tag v7
        And Subir una imagen de prueba v7 "Nuevo Tag 100"
        And Dar click en el boton save v7 
        Then Verificar el nuevo tag v7 "Nuevo Tag 14"

