Feature: Realizar busquedas sobre el menu general settings en Memberships
    Como usuario quiero logearme en el sistema ghost y poder realizar una busqueda sobre el submenu Memberships
        Scenario: Poder realizar la busqueda sobre el submenu Memberships
        Given Abrir la pagina de ghost v12
        When Ingreso el usuario v12 "user@example.com" 
        And Ingreso el password v12 "Admin12345"
        And Dar click en el boton Login v12
        And Ir al menu profile v12
        And Realiza la busqueda con las opciones del submenu membership v12
        Then Verificar que no exista error al buscar v12

