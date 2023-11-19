Feature: Create post
    Como usuario quiero logearme,crear un post y publicarlo
    Scenario: Creacion basica de un post 
        Given Navegar al Home de ghost
        When Digitar usuario "pruebas1711_1@yopmail.com"
        And Digitar password "123456789="
        And Ingresar dashborad
        And Ir al menu de post
        And Boton de new post
        And Ingresar el titulo del post "Nuevo post"
        And Click en publish
        Then Validamos la creacion del post

