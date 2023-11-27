Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando los campos de nombre,color y descripcion
    Scenario: Crear nuevo tag diligenciando campos basicos de nombre, color y descripcion
        Given Abrir la pagina de ghost
        When Ingreso el usuario "user@example.com"
        And Ingreso el password "Admin12345"
        And Dar click en el boton Login
        And Ir al menu Tags
        And Dar click en el boton New Tag
        And Diligenciar el campo Name "Nuevo Tag 100"
        And Diligenciar el campo Color "2eb24b"
        And Diligenciar el campo description "description example"
        And Dar click en el boton save
        And Dar click al menu Tags
        Then Verificar el nuevo tag "Nuevo Tag 14"

