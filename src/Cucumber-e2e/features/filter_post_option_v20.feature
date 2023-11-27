Feature: Poder seleccionar un filtro al azar de las opciones de post en Newest first
    Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post en Newest first
    Scenario: Poder seleccionar en las opciones de filtro All tags
        Given Abrir la pagina de ghost v20
        When Ingreso el usuario v20 "user@example.com"
        And Ingreso el password v20 "Admin12345"
        And Dar click en el boton Login v20
        And Ir a post v20 
        And Seleccionar un filtro al azar de los tipos de post Newest first
        Then Verificamos que no existan errorres v20

