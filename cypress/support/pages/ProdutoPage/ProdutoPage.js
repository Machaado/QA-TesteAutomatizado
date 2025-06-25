import { elements as el } from "./elements";

class ProdutoPage {

    adicionarProdutoAoCarrinho(produtoNome){
        cy.contains(el.nome_item, produtoNome)
        .parents(el.item_pai)
        .find(el.botao_add_prod_ao_carrinho)
        .click();
    }

    verificarProdutoAdicionadoCarrinho(){
        cy.get(el.carrinho_icone_disponivel).should('be.visible').and('have.text', 1)
    }

    irParaCarrinho(){
        cy.get(el.ir_ao_carrinho).click();
    }
}

export default new ProdutoPage();