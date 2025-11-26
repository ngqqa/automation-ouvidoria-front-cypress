import LoginPage from '../../pageObjects/LoginPage';

describe('Fluxo de Login', () => {
  
  beforeEach(() => {
    cy.visit('https://h-sgo.mprj.mp.br/');
  });

  it('Deve fazer login com sucesso', () => {
    const loginObj = new LoginPage();
    LoginPage.preencherLogin('usuarioTeste', 'senhaTeste');
    LoginPage.clicarLogin();
    LoginPage.elements.successTxt().should('contain', 'Bem-vindo');
  });

  it('Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
    LoginPage.preencherLogin('usuarioInvalido', 'senhaErrada');
    LoginPage.clicarLogin();
    LoginPage.elements.errorTxt().should('contain', 'Credenciais inválidas');
  });

});


/*
import loginPage from '../../pageobjects/loginPage'

describe('POM Test', () => {

 beforeEach(function() {
   // executes prior each test within it block
   cy.visit('https://h-sgo.mprj.mp.br/');
})

 it('Validacao de Login com successful', () => {
   const loginObj = new loginPage();
   loginObj.elements.preencherLogin();
   loginObj.elements.passwordInput();
   loginObj.elements.loginBtn();
   loginObj.elements.successTxt().should('have.text','Login Successfully');
 })

 it('Verify Login unsuccessful for invalid username/password', () => {
   const loginObj = new loginPage();
   loginObj.enterUsername('selenium')
   loginObj.enterPassword('qa@123')
   loginObj.clickSubmit();
   loginObj.elements.errorTxt().should('contain','Enter your userName and password correct');
 })
})
/* --- IGNORE --- */