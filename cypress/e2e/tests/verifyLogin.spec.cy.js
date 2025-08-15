
import loginPage from '../../pageobjects/loginPage'

describe('POM Test', () => {

 beforeEach(function() {
   // executes prior each test within it block
   cy.visit('https://h-sgo.mprj.mp.br/')
   //cy.visit('https://demo.guru99.com/test/newtours/login.php');
})

 it('Validacao de Login com successful', () => {
   const loginObj = new loginPage();
   loginObj.enterUsername('usr_ouv_ouvidor')
   loginObj.enterPassword('p7qL2aC*#7MoMD')
   loginObj.clickSubmit();
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
