Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y tratar de crear un nuevo Tag diligenciando de manera errada el campo de color
        Given Abrir la pagina de ghost v3
        When Ingreso el usuario v3 "user@example.com"
        And Ingreso el password v3 "Admin12345"
        And Dar click en el boton Login v3
        And Ir al menu Tags v3
        And Dar click en el boton New Tag v3
        And Diligenciar el campo de color de manera errada "Nuevo Tag 100"
        And Dar click en el boton save v3 
        Then Verificar el nuevo tag v3 "Nuevo Tag 14"

