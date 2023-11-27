Feature: Login correcto
    Como usuario quiero logearme con un usuario y password correcto
    Scenario: Ingreso exitoso
        Given Abrir la pagina home de ghost
        When Ingreso el usuario correcto "user@example.com"
        And Ingreso el password correcto "Admin12345"
        And Voy a el boton de Login
        Then Verificamos que este el menu post presente