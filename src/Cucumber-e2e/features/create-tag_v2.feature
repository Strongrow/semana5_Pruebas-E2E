Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y realizar la prueba de crear un tag introduciendo mas de 191 caracteres en el campo name
    Scenario: Crear nuevo tag diligenciando nombre muy largo
        Given Abrir la pagina de ghost v2
        When Ingreso el usuario v2 "user@example.com"
        And Ingreso el password v2 "Admin12345"
        And Dar click en el boton Login v2
        And Ir al menu Tags v2
        And Dar click en el boton New Tag v2
        And Diligenciar el campo Name con mas de 191 caracteres v2 "Nuevo Tag 100"
        And Dar click en el boton save v2 
        Then Verificar el nuevo tag v2 "Nuevo Tag 14"

