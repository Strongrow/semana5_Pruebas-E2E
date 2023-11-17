Feature: Login correcto
    Como usuario quiero logearme con un usuario y password correcto
    Scenario: Ingreso exitoso
        Given Inicio de ghost
        When Ingreso el usuario incorrecto "invaliduser"
        And Ingreso el password incorrecto "invalidpassword"
        And Ir al Login
        Then Verificamos el mensaje de error 