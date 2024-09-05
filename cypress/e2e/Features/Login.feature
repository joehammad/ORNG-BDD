Feature: Login
    @GM  @AA

    Scenario: user should able to login using valid data 
    Given visit orange HRM website
    When user provide username
    When user provide password
    Then click on login button to login to HRM website