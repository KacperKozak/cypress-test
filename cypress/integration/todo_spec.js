describe('TODO', () => {
    const msg = 'First todo!';

    it('should add todo', () => {
        cy.visit('http://todomvc.com/examples/react/#/');

        cy.get('input.new-todo').type(`${msg}{enter}`);
        cy.get('.todo-list').should('contain', msg);
        cy.get('.todo-count').should('contain', '1 item left');
    });

    it('should toggle task', () => {
        cy.get('.todo-list .toggle:first').click();
        cy.get('.todo-count').should('contain', '0 items left');
    });

    it('should clear complited', () => {
        cy.get('.clear-completed').click();
        cy.get('.todo-list').should('not.contain', msg);
    });
});
