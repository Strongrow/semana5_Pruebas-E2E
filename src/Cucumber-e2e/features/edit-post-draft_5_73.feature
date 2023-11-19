Feature: Editar un post no publicado
    Como usuario quiero logearme en el sistema ghost y poder editar un post que no ha sido publicado
    Scenario: Editar un post no publicado
        Given Go to home ghost otra url
        When Escribir el usuario otra url "p.diazp@uniandes.edu.co"
        And Escribir el password otra url "123456789="
        And Ir al boton Login otra url
        And Ir al menu posts otra url
        And Dar click en el boton editar otra url
        And Editar el titulo del post borrador agregando texto otra url " - Mi nuevo post"
        And Volver a los posts otra url
        Then Verificar el campo de nombre editado otra url

