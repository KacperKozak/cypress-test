describe('Navigation', () => {
    beforeEach(() => {
        cy.viewport('macbook-15')
    })

    it('should visit page', () => {
        cy.visit('http://www.zus.pl/');
    });

    it('should visit page', () => {
        cy.get('.nav__li--lvl1').contains('O ZUS').click();
        cy.get('.nav__li--lvl2-link').contains('O nas').click();
        cy.get('.nav__li--lvl3-link').contains('Historia').click();
        cy.get('h1').should('contain', 'Historia ZUS');
    });
});
