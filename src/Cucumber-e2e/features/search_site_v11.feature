Feature: Realizar busquedas sobre el menu general settings en Site
    Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu Site
        Scenario: Poder realizar la busqueda sobre el submenu Site
        Given Abrir la pagina de ghost v11
        When Ingreso el usuario v11 "user@example.com" 
        And Ingreso el password v11 "Admin12345"
        And Dar click en el boton Login v11
        And Ir al menu profile v11
        And Realiza la busqueda con las opciones del submenu site v11
        Then Verificar que no exista error al buscar v11

