Feature: Login correcto
    Como usuario quiero logearme con un usuario y password correcto
    Scenario: Ingreso exitoso
        Given Inicio de ghost wrong user en el otro ambiente
        When Ingreso el usuario incorrecto wrong user en el otro ambiente "p.diazp@uniandes.edu.co1"
        And Ingreso el password incorrecto wrong user en el otro ambiente "invalidpassword"
        And Ir al Login wrong user en el otro ambiente
        Then Verificamos el mensaje de error wrong user en el otro ambiente