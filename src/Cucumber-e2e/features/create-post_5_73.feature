Feature: Create post
    Como usuario quiero logearme,crear un post y publicarlo
    Scenario: Creacion basica de un post 
        Given Navegar al Home de ghost en la otra version 
        When Digitar usuario en la otra version "p.diazp@uniandes.edu.co"
        And Digitar password en la otra version "123456789="
        And Ingresar dashborad en la otra version
        And Ir al menu de post en la otra version
        And Boton de new post en la otra version
        And Ingresar el titulo del post en la otra version "Nuevo post"
        And Click en publish en la otra version
        Then Validamos la creacion del post en la otra version

