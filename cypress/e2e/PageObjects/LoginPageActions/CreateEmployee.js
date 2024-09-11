const employeePageElements = require("../PageElements/Employee.json")

export class createEmployee {

    pimPage(){
        cy.get(employeePageElements.addEmployee.pimPage).click()
    }
    setFirstName (FirstName) {
        cy.get(employeePageElements.addEmployee.firstName).type(FirstName)
        return
    }
    setLastName (LastName) {

        cy.get(employeePageElements.addEmployee.lastName).type(LastName)
        return
    }

    Save (){
        cy.get(employeePageElements.addEmployee.saveBtn).click()
    }


}