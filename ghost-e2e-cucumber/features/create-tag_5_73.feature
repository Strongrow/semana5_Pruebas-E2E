Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando todos los campos
    Scenario: Crear nuevo tag diligenciando todos los campos
        Given Abrir la pagina de ghost ambiente 5_73
        When Ingreso el usuario otro ambiente "p.diazp@uniandes.edu.co"
        And Ingreso el password otro ambiente "123456789="
        And Dar click en el boton Login ambiente 5_73
        And Ir al menu Tags ambiente 5_73
        And Dar click en el boton New Tag ambiente 5_73
        And Diligenciar el campo Name ambiente 5_73 "Nuevo Tag 14"
        And Diligenciar el campo Color ambiente 5_73 "2eb24b"
        And Diligenciar el campo description ambiente 5_73 "description example"
        And Dar click en el boton save ambiente 5_73
        And Dar click al menu Tags ambiente 5_73
        Then Verificar el nuevo tag ambiente 5_73 "Nuevo Tag 14"

