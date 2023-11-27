Feature: Poder crear un custom integration
    Como usuario quiero logearme en el sistema ghost y poder crear un custom integrations
    Scenario: Poder crear un custom integration
        Given Abrir la pagina de ghost v21
        When Ingreso el usuario v21 "user@example.com"
        And Ingreso el password v21 "Admin12345"
        And Dar click en el boton Login v21
        And Ir a setting integrations v21 
        And Seleccionar Add custom integratios v21
        And Crear el nombre de la integracion v21
        And Dar en Add v21
        Then Verificamos que no existan errorres v21

