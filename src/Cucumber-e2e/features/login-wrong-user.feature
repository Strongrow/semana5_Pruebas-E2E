Feature: Login wrong user
    Como usuario quiero logearme con un usuario incorrecto y password correcto
    Scenario: Ingreso exitoso
        Given Inicio de ghost wrong user
        When Ingreso el usuario incorrecto wrong user "user@example.com1"
        And Ingreso el password incorrecto wrong user "invalidpassword"
        And Ir al Login wrong user
        Then Verificamos el mensaje de error wrong user