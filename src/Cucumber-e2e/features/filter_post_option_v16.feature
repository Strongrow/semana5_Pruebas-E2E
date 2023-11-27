Feature: Poder seleccionar un filtro al azar de las opciones de post
    Como usuario quiero logearme en el sistema ghost y poder seleccionar un filtro al azar de las opciones de post
    Scenario: Seleccionar en el dashboard las diferentes opciones
        Given Abrir la pagina de ghost v16
        When Ingreso el usuario v16 "user@example.com"
        And Ingreso el password v16 "Admin12345"
        And Dar click en el boton Login v16
        And Ir a post v16 
        And Seleccionar un filtro al azar de los tipos de post v16
        Then Verificamos que no existan errorres v16

