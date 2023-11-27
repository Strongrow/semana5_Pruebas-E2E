Feature: Crear Nuevo Tag
    Como usuario quiero logearme en el sistema ghost y crear un nuevo Tag diligenciando el nombre y subiendo un fichero de texto donde hay que subir una  imagen
    Scenario: Crear nuevo tag diligenciando nombre muy largo
        Given Abrir la pagina de ghost v8
        When Ingreso el usuario v8 "user@example.com"
        And Ingreso el password v8 "Admin12345"
        And Dar click en el boton Login v8
        And Ir al menu Tags v8
        And Dar click en el boton New Tag v8
        And Subir una imagen de prueba v8 "Nuevo Tag 100"
        Then Verificar error en carga de fichero v8 "Nuevo Tag 14"

