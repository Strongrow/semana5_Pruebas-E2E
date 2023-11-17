Feature: Login correcto
    Como usuario quiero logearme con un usuario y password correcto
    Scenario: Ingreso exitoso
        Given Inicio de ghost ambiente dos
        When Ingreso el usuario incorrecto ambiente dos "invaliduser"
        And Ingreso el password incorrecto ambiente dos "invalidpassword"
        And Ir al Login ambiente dos
        Then Verificamos el mensaje de error ambiente dos 