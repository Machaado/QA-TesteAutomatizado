import LoginPage from "../../support/pages/LoginPage/LoginPage";
import ProdutoPage from "../../support/pages/ProdutoPage/ProdutoPage";
import CarrinhoPage from "../../support/pages/CarrinhoPage/CarrinhoPage";

describe('Validação de produto no carrinho', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.preencherUsuario('standard_user');
        LoginPage.preencherSenha('secret_sauce');
        LoginPage.clicarLogin();
        ProdutoPage.adicionarProdutoAoCarrinho('Sauce Labs Backpack');
        ProdutoPage.verificarProdutoAdicionadoCarrinho();
        ProdutoPage.irParaCarrinho();
    });

    it('Deve conter o produto correto no carrinho', () => {
        CarrinhoPage.validarProdutoNoCarrinho('Sauce Labs Backpack');
    })
})