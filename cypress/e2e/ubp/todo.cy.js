/// <reference types="cypress" />
const ubp = require("../../page-object/main");

describe("Ejemplo para la UBP", () => {
  beforeEach(() => {
    cy.visit("https://www.ubp.edu.ar/");
  });

  it("Completar oferta académica", () => {
    cy.get('select[name="nro_grupo"]').select(
      "Carreras On Campus (presencial)"
    );
    cy.get('select[name="nro_oferta"]').select("Ing. Informática");
    cy.get('input[name="apellido"]').type("Aliciardi");
    cy.get('input[name="nombre"]').type("Agustina");
    cy.get('input[name="e_mail"]').type("agus@email.com");
  });

  it("Completar oferta académica", () => {
    ubp.getCursado().select("Carreras On Campus (presencial)");
    ubp.getCarrera().select("Ing. Informática");
    ubp.getApellido().type("Aliciardi");
    ubp.getNombre().type("Agustina");
    ubp.getEmail().type("agus@email.com");
  });
});
