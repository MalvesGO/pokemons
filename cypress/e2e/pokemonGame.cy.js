describe('PokemonGame', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
    });

    it('captures the correct number of pokemons with moves E', () => {
      cy.get('input').type('E');
      cy.get('button').click();
      cy.get('p').should('contain', 'You captured 1 Pokemons!');
    });
  
    it('captures the correct number of pokemons with moves NESO', () => {
      cy.get('input').type('NESO');
      cy.get('button').click();
      cy.get('p').should('contain', 'You captured 4 Pokemons!');
    });
  
    it('captures the correct number of pokemons with moves NSNSNSNSNS', () => {
      cy.get('input').type('NSNSNSNSNS');
      cy.get('button').click();
      cy.get('p').should('contain', 'You captured 2 Pokemons!');
    });

  });