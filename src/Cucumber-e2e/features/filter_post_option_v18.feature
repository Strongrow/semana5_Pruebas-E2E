Feature: Poder seleccionar un filtro al azar de las opciones de post en All Authors
    Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post en All Authors
    Scenario: Poder seleccionar en las opciones de filtro All Authors
        Given Abrir la pagina de ghost v18
        When Ingreso el usuario v18 "user@example.com"
        And Ingreso el password v18 "Admin12345"
        And Dar click en el boton Login v18
        And Ir a post v18 
        And Seleccionar un filtro al azar de los tipos de post All Authors
        Then Verificamos que no existan errorres v18

