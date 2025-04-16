class ProdutoPage {

    adicionarProdutoAoCarrinho(produtoNome){
        cy.contains('.inventory_item_name', produtoNome)
        .parents('.inventory_item')
        .find('button')
        .click();
    }

    verificarProdutoAdicionadoCarrinho(){
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', 1)
    }

    irParaCarrinho(){
        cy.get('.shopping_cart_link').click();
    }
}

export default new ProdutoPage();