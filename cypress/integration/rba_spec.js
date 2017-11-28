describe('RBA', () => {
    it('should has single or double room selection', () => {
        cy.clearLocalStorage();
        cy.visit('/');

        cy
            .contains('Single room')
            .should('be.visible');
        cy
            .contains('Double room')
            .should('be.visible');
    });

    it('should change to double room', () => {
        cy
            .get('.rooms-setup')
            .contains('Double room')
            .click();
        cy
            .get('.rooms-setup')
            .should('contain', 'Right room')
            .contains('Right room')
            .should('be.visible');
    });

    it('should select two rooms and start app', () => {
        cy
            .get('.room-selection:first')
            .contains('flower')
            .click();
        cy
            .get('.room-selection:last')
            .contains('heart')
            .click();

        cy.get('.rooms-setup__confirm-button').click();

        cy.get('.main__room').should($rooms => {
            expect($rooms).to.have.length(2);
        });
    });

    it('should open first room', () => {
        cy.get('.main__room:first').as('firstRoom');
        cy
            .get('@firstRoom')
            .find('.room-summary')
            .click();
        cy.get('.room-action__button').should('be.visible');
    });

    it('should create quick meeting', () => {
        cy.get('.main__room:first').as('firstRoom');

        cy
            .get('@firstRoom')
            .find('.room-action__button')
            .click();

        cy
            .get('@firstRoom')
            .find('.room-action__new-event')
            .contains('30')
            .click({ force: true });
        cy
            .get('@firstRoom')
            .find('.agenda-event')
            .should('contain', 'Quick meeting');
    });

});
