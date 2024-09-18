import { Given, When, Then, And , Before} from "cypress-cucumber-preprocessor/steps"
import { createEmployee } from "../LoginPageActions/CreateEmployee"
import { LoginPageActions } from "../LoginPageActions/Login";  

const AddEmployee = new createEmployee
const login = new LoginPageActions


Before(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
    login.setUsername("admin");  
    login.SetPassword("admin123");  
    login.button();  // Click the login button
    cy.log("Logged in successfully before running the test");
});
Given("user Click on PIM",()=>{
    AddEmployee.pimPage()
    cy.wait(2000)
})

Then("user clicks on Add",()=>{
    AddEmployee.ClickAdd()
    cy.wait(1000)
})

When("add first name", ()=>{
    AddEmployee.setFirstName("testtest")
})
Then("add last name",()=>{
    AddEmployee.setLastName("hammad")
    cy.wait(2000)
})

Then("click submit",()=>{
    AddEmployee.Save()
})