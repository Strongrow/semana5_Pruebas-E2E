Feature: Login correcto
    Como usuario quiero logearme con un usuario y password correcto
    Scenario: Ingreso exitoso
        Given Inicio de ghost wrong user
        When Ingreso el usuario incorrecto wrong user "pruebas1711_1@yopmail.com1"
        And Ingreso el password incorrecto wrong user "invalidpassword"
        And Ir al Login wrong user
        Then Verificamos el mensaje de error wrong user