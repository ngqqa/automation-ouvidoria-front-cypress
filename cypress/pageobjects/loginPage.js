
class loginPage{

   elements = { 
       usernameInput : () => cy.get('input[id="username"]'),      
       passwordInput : () => cy.get('input[id="password]'),    
       loginBtn : () => cy.get('input[id="kc-login"]'),
       successTxt : () => cy.get('h3'),
       errorTxt : () => cy.get('span')
   }

   enterUsername(username)
   {
       this.elements.usernameInput().clear();
       this.elements.usernameInput().type(username);
   }

   enterPassword(password)
   {
       this.elements.passwordInput().clear();
       this.elements.passwordInput().type(password);
   }
  
   clickSubmit() {
       this.elements.loginBtn().click();
   }

}

export default loginPage;