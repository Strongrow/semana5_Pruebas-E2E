Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando los campos de nombre,descripcion,color,mete title,mete decripcion y meta url
    Scenario: Crear nuevo tag diligenciando los campos de nombre,descripcion,color,mete title,mete decripcion y meta url
        Given Abrir la pagina de ghost v1
        When Ingreso el usuario v1 "user@example.com"
        And Ingreso el password v1 "Admin12345"
        And Dar click en el boton Login v1
        And Ir al menu Tags v1
        And Dar click en el boton New Tag v1
        And Diligenciar el campo Name v1 "Nuevo Tag 100"
        And Diligenciar el campo Color v1 "2eb24b"
        And Diligenciar el campo description v1 "description example"
        And Diligenciar el campo title v1 " title example"
        And Diligenciar el campo meta description v1 "description example"
        And Diligenciar el campo canonical url v1 "Titulo meta"
        #And Diligenciar el campo twitter title v1 "abc"
        And Dar click en el boton save v1
        And Dar click al menu Tags v1
        Then Verificar el nuevo tag v1 "Nuevo Tag 14"

