class HomePage {
  getCursado() {
    return cy.get('select[name="nro_grupo"]');
  }

  getCarrera() {
    return cy.get('select[name="nro_oferta"]');
  }

  getApellido() {
    return cy.get('input[name="apellido"]');
  }

  getNombre() {
    return cy.get('input[name="nombre"]');
  }

  getEmail() {
    return cy.get('input[name="e_mail"]');
  }
}

export default new HomePage();
