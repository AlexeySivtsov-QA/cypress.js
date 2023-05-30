describe('HuntingPony', function () {
    
    it('Тестирование оформления заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="344951508"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
        cy.wait(5000);
        cy.get('.add-cart-counter__btn-label').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.wait(5000);
        cy.get('.header__cart > .icon').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
        })
})