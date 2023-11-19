Feature: Eliminar tag
    Como usuario quiero logearme en el sistema ghost ir a la sección de tags dar click en eliminar y luego en cancelar
    Scenario: Cancelar eliminar el tag del listado
        Given Iniciar ghost en home
        When Ingresar el usuario con "pruebas1711_1@yopmail.com"
        And Ingresar el password con "123456789="
        And Dar click en boton Login
        And Dar click en el menu Tags
        And Dar click en una fila del listado de tags
        And Dar click en el boton Delete tag
        And Dar click en cancelar
        Then Verificar que aun exista el tag