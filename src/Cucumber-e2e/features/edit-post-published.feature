Feature: Editar un post  publicado
    Como usuario quiero logearme en el sistema ghost y poder editar un post que ya ha sido publicado
    Scenario: Editar un post publicado
        Given Home de ghost
        When Digitar el usuario "user@example.com"
        And Digitar el password "Admin12345"
        And Dar en boton Login
        And Dar en menu posts
        And Dar en el boton editar
        And Editar el titulo del post publicado " - Bienvenido a Mi nuevo post"
        And Dar en boton update
        And Volver a posts
        Then Verificar el nombre editado

