Feature: Login correcto
    Como usuario quiero logearme con un usuario y password correcto
    Scenario: Ingreso exitoso
        Given Abrir la pagina home de ghost ambiente dos
        When Ingreso el usuario correcto ambiente dos "p.diazp@uniandes.edu.co"
        And Ingreso el password correcto ambiente dos "123456789="
        And Voy a el boton de Login ambiente dos
        Then Verificamos que este el menu post presente ambiente dos