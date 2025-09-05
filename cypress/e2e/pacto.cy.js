describe('Teste Yahoo - Pacto Soluções', () => {
  it('Deve buscar Pacto Soluções no Yahoo e validar resultado', () => {
    cy.visit('https://www.yahoo.com/');
    cy.get('input[name="p"]').type('Pacto Soluções{enter}');
    cy.url().should('include', 'search');
    cy.contains('Pacto Soluções').should('exist');
  });
});