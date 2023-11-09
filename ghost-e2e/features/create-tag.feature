Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando todos los campos
    Scenario: Crear nuevo tag diligenciando todos los campos
        Given Abrir la pagina de ghost
        When Ingreso el usuario "p.diazp@uniandes.edu.co"
        And Ingreso el password "123456789="
        And Dar click en el boton Login
        And Ir al menu Tags
        And Dar click en el boton New Tag
        And Diligenciar el campo Name "Nuevo Tag 14"
        And Diligenciar el campo Color "2eb24b"
        And Diligenciar el campo description "description example"
        And Dar click en el boton save
        And Dar click al menu Tags
        Then Verificar el nuevo tag "Nuevo Tag 14"

