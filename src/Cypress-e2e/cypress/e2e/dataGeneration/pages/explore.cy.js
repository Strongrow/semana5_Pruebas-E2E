
import config from "../assets/config.json";

class ExplorePage {
  ExplorePage() {
    if (!cy.url().should("include", "/ghost/#/explore")) {
      throw new IllegalStateException(
        "This is not the Sign In Page, current page is: " + cy.url()
      );
    }
  }

  

}

export { ExplorePage };
