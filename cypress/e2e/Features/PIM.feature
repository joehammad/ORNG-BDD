
Feature: add

@GM @AA

Scenario: user should be able to add a new employee
    Given user Click on PIM
    Then user clicks on Add
    When add first name
    Then add last name
    Then click submit
     
