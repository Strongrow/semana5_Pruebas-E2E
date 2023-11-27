Feature: Realizar busquedas sobre el menu General Settings
    Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu general settings
        Scenario: Poder realizar la busqueda sobre el submenu General Settings
        Given Abrir la pagina de ghost v10
        When Ingreso el usuario v10 "user@example.com" 
        And Ingreso el password v10 "Admin12345"
        And Dar click en el boton Login v10
        And Ir al menu profile v10
        And Realiza la busqueda con las opciones del submenu de general settings v10
        Then Verificar que no exista error al buscar v10

