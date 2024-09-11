@first

Feature: Login
    @GM  @AA
Scenario: user shouldn't able to login using invalid data 
        Given visit orange HRM website
        When user provide username
        Then click on login button to login to HRM website
    Scenario: user should able to login using valid data 
        Given visit orange HRM website
        When user provide username
        When user provide password
        Then click on login button to login to HRM website
    