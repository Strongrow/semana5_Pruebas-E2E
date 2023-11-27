Feature: Login wrong password
    Como usuario quiero logearme con un usuario correcto y un password incorrecto
    Scenario: Ingreso exitoso
        Given Inicio de ghost wrong password
        When Ingreso el usuario incorrecto wrong password "user@example.com"
        And Ingreso el password incorrecto wrong password "Admin12345"
        And Ir al Login wrong password
        Then Verificamos el mensaje de error wrong password