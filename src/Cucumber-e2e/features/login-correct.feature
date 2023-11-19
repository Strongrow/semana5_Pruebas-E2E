Feature: Login correcto
    Como usuario quiero logearme con un usuario y password correcto
    Scenario: Ingreso exitoso
        Given Abrir la pagina home de ghost
        When Ingreso el usuario correcto "pruebas1711_1@yopmail.com"
        And Ingreso el password correcto "123456789="
        And Voy a el boton de Login
        Then Verificamos que este el menu post presente