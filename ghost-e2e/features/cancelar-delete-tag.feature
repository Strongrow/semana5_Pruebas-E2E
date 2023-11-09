Feature: Eliminar tag
    Como usuario quiero logearme en el sistema ghost ir a la sección de tags dar click en eliminar y luego en cancelar
    Scenario: Cancelar eliminar el tag del listado
        Given Iniciar ghost
        When Ingresar el usuario con "p.diazp@uniandes.edu.co"
        And Ingresar el password con "123456789="
        And Dar click en el boton Login
        And Dar click en el menu Tags
        And Dar click en una fila del listado de tags
        And Dar click en el boton Delete tag
        And Dar click en cancelar
        Then Verificar que aun exista el tag