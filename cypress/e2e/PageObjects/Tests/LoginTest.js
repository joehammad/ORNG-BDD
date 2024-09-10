import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { LoginPageActions } from "../LoginPageActions/Login";


const Login_elemenets = new LoginPageActions

Given('visit orange HRM website',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

 When('user provide username',()=>{
Login_elemenets.setUsername('admin');
 })
 When('user provide password',()=>{
     Login_elemenets.SetPassword('admin123');
})

Then('click on login button to login to HRM website',()=>{
    Login_elemenets.button();

})
