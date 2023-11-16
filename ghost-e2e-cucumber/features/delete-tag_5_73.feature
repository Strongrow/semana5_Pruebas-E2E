Feature: Eliminar tag
    Como usuario quiero logearme en el sistema ghost ir a la sección de tags y eliminar uno
    Scenario: Eliminar el tag del listado
        Given Ir al home de ghost ambiente dos
        When Ingresar usuario ambiente dos "p.diazp@uniandes.edu.co"
        And Ingresar password ambiente dos "123456789="
        And Click en boton Login ambiente dos
        And Dar en Menu Tags ambiente dos
        And Dar click en una fila de un tag ambiente dos
        And Dar en el boton Delete tag ambiente dos
        And Dar en confirmar ambiente dos
        Then Verificar que no este el tag ambiente dos