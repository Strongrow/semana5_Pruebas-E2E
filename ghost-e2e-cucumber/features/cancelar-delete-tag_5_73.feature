Feature: Eliminar tag
    Como usuario quiero logearme en el sistema ghost ir a la sección de tags dar click en eliminar y luego en cancelar
    Scenario: Cancelar eliminar el tag del listado
        Given Iniciar ghost ambiente dos
        When Ingresar el usuario con ambiente dos "p.diazp@uniandes.edu.co"
        And Ingresar el password con ambiente dos "123456789="
        And Dar click en boton Login ambiente dos
        And Dar click en el menu Tags ambiente dos
        And Dar click en una fila del listado de tags ambiente dos
        And Dar click en el boton Delete tag ambiente dos
        And Dar click en cancelar ambiente dos
        Then Verificar que aun exista el tag ambiente dos