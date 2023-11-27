Feature: Realizar busquedas sobre el menu general settings en Advanced
    Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu Advanced
        Scenario: Poder realizar la busqueda sobre el submenu Advanced
        Given Abrir la pagina de ghost v14
        When Ingreso el usuario v14 "user@example.com" 
        And Ingreso el password v14 "Admin12345"
        And Dar click en el boton Login v14
        And Ir al menu profile v14
        And Realiza la busqueda con las opciones del submenu Advanced v14
        Then Verificar que no exista error al buscar v14

