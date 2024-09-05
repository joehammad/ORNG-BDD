
const LoginElementsLocate = require("../PageElements/LoginElements.json")
export class LoginPageActions{

    username(usernamee){
        cy.get(LoginElementsLocate.loginlocators.usernametxt).type(usernamee)
        return
    }
    
    password(passwordd){
        cy.get(LoginElementsLocate.loginlocators.passwordtxt).type(passwordd)
        return
    }
    
    button(){
        cy.get(LoginElementsLocate.loginlocators.LoginBtn).click()
        return
    
    }
    }