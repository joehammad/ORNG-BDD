
const LoginElementsLocate = require("../PageElements/LoginElements.json")
export class LoginPageActions{

    setUsername(username){
        cy.get(LoginElementsLocate.loginlocators.usernametxt).type(username)
        return
    }
    
    SetPassword(password){
        cy.get(LoginElementsLocate.loginlocators.passwordtxt).type(password)
        return
    }
    
    button(){
        cy.get(LoginElementsLocate.loginlocators.LoginBtn).click()
        return
    
    }
    }