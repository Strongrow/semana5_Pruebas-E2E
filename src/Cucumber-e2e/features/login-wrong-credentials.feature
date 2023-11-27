Feature: Login wrong credentials
    Como usuario quiero logearme con un usuario y password incorrectos
    Scenario: Ingreso exitoso
        Given Inicio de ghost
        When Ingreso el usuario incorrecto "user@example.com"
        And Ingreso el password incorrecto "Admin12345"
        And Ir al Login
        Then Verificamos el mensaje de error 