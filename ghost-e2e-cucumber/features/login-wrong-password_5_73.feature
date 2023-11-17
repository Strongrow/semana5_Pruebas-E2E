Feature: Login correcto
    Como usuario quiero logearme con un usuario y password correcto
    Scenario: Ingreso exitoso
        Given Inicio de ghost wrong password en el otro ambiente
        When Ingreso el usuario incorrecto wrong password en el otro ambiente "p.diazp@uniandes.edu.co"
        And Ingreso el password incorrecto wrong password en el otro ambiente "invalidpassword"
        And Ir al Login wrong password
        Then Verificamos el mensaje de error wrong password