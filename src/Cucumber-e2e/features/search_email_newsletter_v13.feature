Feature: Realizar busquedas sobre el menu general settings en Email newsletter
    Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu Email newsletter
        Scenario: Poder realizar la busqueda sobre el submenu Email newsletter
        Given Abrir la pagina de ghost v13
        When Ingreso el usuario v13 "user@example.com" 
        And Ingreso el password v13 "Admin12345"
        And Dar click en el boton Login v13
        And Ir al menu profile v13
        And Realiza la busqueda con las opciones del submenu Email newsletter v13
        Then Verificar que no exista error al buscar v13

