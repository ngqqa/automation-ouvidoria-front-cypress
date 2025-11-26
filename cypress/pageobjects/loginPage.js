class LoginPage {

    elements = {
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.get('input[id="kc-login"]'),
    successTxt: () => cy.get('h3'),
    errorTxt: () => cy.get('span')
  }

  preencherLogin(usuario, senha) {
    this.elements.usernameInput().type(usuario);
    this.elements.passwordInput().type(senha);
  }

  preencherLoginOuvidor() {
    this.elements.usernameInput().type('ouvidor.teste');
    this.elements.passwordInput().type('Senha@123');
  }

  clicarLogin() {
    this.elements.loginBtn().click();
  }
}

export default new LoginPage();


/*
class loginPage{

   elements = { 
       usernameInput : () => cy.get('#=username'),      
       passwordInput : () => cy.get('#=password'),    
       loginBtn : () => cy.get('input[id="kc-login"]'),
       successTxt : () => cy.get('h3'),
       errorTxt : () => cy.get('span')
   }
}

enterUsername(username)
   {
       this.elements.usernameInput().clear();
       this.elements.usernameInput().type('testes@testes.com.br');
       //this.elements.usernameInput().type('username');
   }

   enterPassword(password)
   {
       this.elements.passwordInput().clear();
       this.elements.passwordInput().type(password);
   }
  
   clickSubmit()
   {
       this.elements.loginBtn().click();
   }

export default loginPage;
*/