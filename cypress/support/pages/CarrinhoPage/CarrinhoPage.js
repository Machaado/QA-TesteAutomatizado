import { elements as el } from "./elements";

class CarrinhoPage {

    validarProdutoNoCarrinho(produtoNome){
        cy.get(el.carrinho_icone).should('contain', produtoNome);
    }



}

export default new CarrinhoPage();