import { faker } from "@faker-js/faker";
class GenerateData {
  generateFakeData() {
    let data = "";
    for (let i = 0; i < 10; i++) {
      // Generar 10 filas de datos, por ejemplo
      const email = faker.internet.email();
      const name = faker.person.firstName();
      const note = faker.lorem.sentence();
      const subscribed_to_emails = faker.datatype.boolean();
      const complimentary_plan = "";
      const stripe_customer_id = "";
      const created_at = faker.date.recent().toISOString();
      const deleted_at = "";
      const labels = "";
      const tiers = "";

      // Crear la fila del CSV
      const row = `${email},${name},${note},${subscribed_to_emails},${complimentary_plan},${stripe_customer_id},${created_at},${deleted_at},${labels},${tiers}`;
      data += row + "\n"; // Agregar salto de línea al final de cada fila
    }
    return data;
  }

  getMembers() {
    cy.get('[data-test-nav="members"]').click();
    cy.get('[data-test-button="members-actions"]').should("be.visible").click();
    cy.get('[data-test-link="import-csv"]').should("be.visible").click();
  }
}

export default GenerateData;
