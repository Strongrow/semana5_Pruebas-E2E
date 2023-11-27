Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y tratar de crear un tag diligenciando el campo de descripcion con un texto muy largo
    Scenario: Crear nuevo tag diligenciando nombre muy largo
        Given Abrir la pagina de ghost v5
        When Ingreso el usuario v5 "user@example.com"
        And Ingreso el password v5 "Admin12345"
        And Dar click en el boton Login v5
        And Ir al menu Tags v5
        And Dar click en el boton New Tag v5
        And Diligenciar el campo de description muy largo "Nuevo Tag 100"
        And Dar click en el boton save v5 
        Then Verificar el nuevo tag v5 "Nuevo Tag 14"

