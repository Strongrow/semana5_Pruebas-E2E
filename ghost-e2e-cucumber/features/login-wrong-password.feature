Feature: Login correcto
    Como usuario quiero logearme con un usuario y password correcto
    Scenario: Ingreso exitoso
        Given Inicio de ghost wrong password
        When Ingreso el usuario incorrecto wrong password "pruebas1711_1@yopmail.com"
        And Ingreso el password incorrecto wrong password "invalidpassword"
        And Ir al Login wrong password
        Then Verificamos el mensaje de error wrong password