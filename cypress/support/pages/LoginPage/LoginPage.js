import { elements as el} from "./elements";

class LoginPage{
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }

    preencherUsuario(usuario){
        cy.get(el.campo_inserir_usuario).type(usuario);
    }

    preencherSenha(senha){
        cy.get(el.campo_inserir_senha).type(senha);
    }

    clicarLogin(){
        cy.get(el.campo_botao_login).click();
    }

    //include funciona para URL, enquanto o contain não, o contain so funciona para elementos DOM, como <span>, <div>, <h1>, etc...
    verificarLoginSucesso(){
        cy.url().should('include', '/inventory.html')
        cy.get(el.titulo_pagina_inicial).should('have.text', 'Products')
    }

    verificarLoginFalha(){
        cy.get(el.campo_msg_erro_login).should('be.visible')
    }

}

export default new LoginPage();