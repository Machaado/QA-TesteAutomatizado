import LoginPage from "../../support/pages/LoginPage/LoginPage";
import ProdutoPage from "../../support/pages/ProdutoPage/ProdutoPage";

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