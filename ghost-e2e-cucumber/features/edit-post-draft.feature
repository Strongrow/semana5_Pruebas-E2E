Feature: Editar un post no publicado
    Como usuario quiero logearme en el sistema ghost y poder editar un post que no ha sido publicado
    Scenario: Editar un post no publicado
        Given Go to home ghost
        When Escribir el usuario "p.diazp@uniandes.edu.co"
        And Escribir el password "123456789="
        And Ir al boton Login
        And Ir al menu posts
        And Dar click en el boton editar
        And Editar el titulo del post borrador agregando texto " - Mi nuevo post"
        And Volver a los posts
        Then Verificar el campo de nombre editado

