Feature: Poder seleccionar un filtro al azar de las opciones de post en All Access
    Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post en All Access
    Scenario: Poder seleccionar en las opciones de filtro All access
        Given Abrir la pagina de ghost v17
        When Ingreso el usuario v17 "user@example.com"
        And Ingreso el password v17 "Admin12345"
        And Dar click en el boton Login v17
        And Ir a post v17 
        And Seleccionar un filtro al azar de los tipos de post All access v17
        Then Verificamos que no existan errorres v17

