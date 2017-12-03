describe('Drag and drop', () => {
    before(() => {
        // cy.visit(
        //     'http://chenglou.github.io/react-motion/demos/demo8-draggable-list/'
        // );
        cy.visit('http://clauderic.github.io/react-sortable-hoc');
    });

    it('should move first item', () => {
        cy.viewport(550, 750);

        cy.contains('Item 0').as('item1');
        cy.contains('Item 1').as('item2');

        cy
            .get('@item1')
            .trigger('mousedown')
            // .wait(1000)
            .trigger('mousemove', { x: 200, y: 300, force: true })
            // .wait(1000)
            .trigger('mouseup', { force: true });

        cy.get('.Showcase__style__item:first').should('contain', 'Item 1');
    });
});
