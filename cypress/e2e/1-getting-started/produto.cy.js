import LoginPage from "../../support/pages/LoginPage/LoginPage";
import ProdutoPage from "../../support/pages/ProdutoPage/ProdutoPage";

//beforeEach dentro do describe = só vai rodar o beforeEach para cada It dentro do describe que engloba o beforeEach, se tiver outro describe, o beforeEach não vai rodar para
//os It desse outro describe. EX: Abaixo temos o describe Adicionar produto ao carrinho que tem um beforeEach dentro, ou seja, só vai rodar para o It 'Deve adicionar produto
//ao carrinho com sucesso'. Agora se tivesse um outro describe, por exemplo, 'Adicionar produto sem estoque ao carrinho', o beforeEach não iria rodar para os It dentro desse
//describe, a opção seria criar um beforeEach dentro do 'Adicionar produto sem estoque ao carrinho' ou seria tirar o beforeEach de dentro do describe 'Adicionar produto ao carrinho'
//e deixar fora dele (em cima do 'Adicionar produto ao carrinho'), igual tem na classe login.cy.js

describe('Adicionar produto ao carrinho', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.preencherUsuario('standard_user');
        LoginPage.preencherSenha('secret_sauce');
        LoginPage.clicarLogin();
    });

    it('Deve adicionar produto ao carrinho com sucesso', () => {
        ProdutoPage.adicionarProdutoAoCarrinho('Sauce Labs Backpack');
        ProdutoPage.verificarProdutoAdicionadoCarrinho();
    })
})