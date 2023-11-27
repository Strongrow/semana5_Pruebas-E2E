Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y tratar de crear un tag diligenciando el campo de slug con un texto muy largo
    Scenario: Crear nuevo tag diligenciando nombre muy largo
        Given Abrir la pagina de ghost v4
        When Ingreso el usuario v4 "user@example.com"
        And Ingreso el password v4 "Admin12345"
        And Dar click en el boton Login v4
        And Ir al menu Tags v4
        And Dar click en el boton New Tag v4
        And Diligenciar el campo de slug muy largo "Nuevo Tag 100"
        And Dar click en el boton save v4 
        Then Verificar el nuevo tag v4 "Nuevo Tag 14"

