Feature: Eliminar tag
    Como usuario quiero logearme en el sistema ghost ir a la sección de tags y eliminar uno
    Scenario: Eliminar el tag del listado
        Given Ir a la pagina de ghost
        When Ingresar el usuario "p.diazp@uniandes.edu.co"
        And Ingresar el password "123456789="
        And Click en el boton Login
        And Menu Tags
        And Dar click en una fila de un tag
        And Dar click en el boton Delete tag
        And Dar click en confirmar
        Then Verificar que no exista el tag