Feature: Poder seleccionar en el dashboard las diferentes opciones
    Como usuario quiero logearme en el sistema ghost y poder seleccionar al azar las opciones de Days
    Scenario: Seleccionar en el dashboard las diferentes opciones
        Given Abrir la pagina de ghost v15
        When Ingreso el usuario v15 "user@example.com"
        And Ingreso el password v15 "Admin12345"
        And Dar click en el boton Login v15
        And Dar en la lista de opciones Days 
        And Dar en el submenu Days y elegir una opcion
        Then Verificamos que no existan errorres

