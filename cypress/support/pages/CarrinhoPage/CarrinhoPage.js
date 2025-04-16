class CarrinhoPage {

    validarProdutoNoCarrinho(produtoNome){
        cy.get('.cart_item').should('contain', produtoNome);
    }



}

export default new CarrinhoPage();