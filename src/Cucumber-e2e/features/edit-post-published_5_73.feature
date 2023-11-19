Feature: Editar un post  publicado
    Como usuario quiero logearme en el sistema ghost y poder editar un post que ya ha sido publicado
    Scenario: Editar un post publicado
        Given ghost home
        When usuario "p.diazp@uniandes.edu.co"
        And password "123456789="
        And Boton Login
        And Menu posts
        And Boton editar
        And Editar titulo del post publicado " - Bienvenido a Mi nuevo post"
        And Boton update
        And Volver a posts para visualizar el cambio
        Then Verificar el nombre editado en la lista

