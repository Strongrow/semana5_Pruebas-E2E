Feature: Eliminar tag
    Como usuario quiero logearme en el sistema ghost ir a la sección de tags y eliminar uno
    Scenario: Eliminar el tag del listado
        Given Ir al home de ghost
        When Ingresar usuario "user@example.com"
        And Ingresar password "Admin12345"
        And Click en boton Login
        And Dar en Menu Tags
        And Dar click en una fila de un tag
        And Dar en el boton Delete tag
        And Dar en confirmar
        Then Verificar que no este el tag