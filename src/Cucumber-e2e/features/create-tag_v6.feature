Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y probar que no hay error al expandir o colapsar las secciones de expand
    Scenario: Crear nuevo tag diligenciando nombre muy largo
        Given Abrir la pagina de ghost v6
        When Ingreso el usuario v6 "user@example.com"
        And Ingreso el password v6 "Admin12345"
        And Dar click en el boton Login v6
        And Ir al menu Tags v6
        And Dar click en el boton New Tag v6
        And Expandir y colapzar las secciones "Nuevo Tag 100"
        Then Verificar el nuevo tag v6 "Nuevo Tag 14"

