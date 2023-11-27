Feature: Poder seleccionar un filtro al azar de las opciones de post en All tags
    Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post en All tags
    Scenario: Poder seleccionar en las opciones de filtro All tags
        Given Abrir la pagina de ghost v19
        When Ingreso el usuario v19 "user@example.com"
        And Ingreso el password v19 "Admin12345"
        And Dar click en el boton Login v19
        And Ir a post v19 
        And Seleccionar un filtro al azar de los tipos de post All tags
        Then Verificamos que no existan errorres v19

