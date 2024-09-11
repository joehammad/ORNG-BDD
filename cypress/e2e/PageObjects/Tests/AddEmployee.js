import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { createEmployee } from "../LoginPageActions/CreateEmployee"


const AddEmployee = new createEmployee

Given("user Click on PIM",()=>{
    AddEmployee.pimPage()
})
When("add first name", ()=>{
    AddEmployee.setFirstName("testtest")
})
Then("add last name",()=>{
    AddEmployee.setLastName("hammad")
})
Then("click submit",()=>{
    AddEmployee.Save
})