# 🧪 Projeto de Testes Automatizados com Cypress

Este projeto contém testes end-to-end automatizados utilizando o **Cypress**, estruturados com o padrão **Page Object Model (POM)**, simulando fluxo de login, navegação por produtos e finalização de compra (carrinho).

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Page Object Model (POM)
- Node.js


## 📁 Estrutura do Projeto

Cada página tem sua lógica separada dentro de sua pasta `CarrinhoPage.js, LoginPage.js, ProdutoPage.js` e seus seletores no `elements.js`. E os testes estão sendo feitos dentro da pasta
e2e, cada arquivo contendo o teste de cada página separada.


## ▶️ Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/Machaado/QA-TesteAutomatizado.git
cd QA-TesteAutomatizado

### 2. Instale as Dependências
npm init -y          # (caso ainda não exista o package.json)
npm install cypress

### 3. Execute o Cypress
npx cypress open

📌 Observações
Este projeto é voltado para fins educacionais e demonstração de habilidades em automação de testes com Cypress, seguindo boas práticas como separação por páginas (POM).