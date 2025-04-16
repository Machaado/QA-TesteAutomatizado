import LoginPage from "../../support/pages/LoginPage/LoginPage";

beforeEach(() => {
  LoginPage.visit()
})

describe('Fluxo de compra no site', () => {
  it('Usuário deve logar com sucesso e adicionar produto ao carrinho', () => {
    //LoginPage.visit();
    LoginPage.preencherUsuario('standard_user');
    LoginPage.preencherSenha('secret_sauce');
    LoginPage.clicarLogin();
    LoginPage.verificarLoginSucesso();
  })
})

describe('Fluxo de compra no site', () => {
  it('Usuário deve ter o login falhado', () => {
    //LoginPage.visit();
    LoginPage.preencherUsuario('usuario_invalido');
    LoginPage.preencherSenha('senha_invalida');
    LoginPage.clicarLogin();
    LoginPage.verificarLoginFalha();
  })
})
