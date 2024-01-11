Feature:Login Validation

    Through this feature user should be able to login Rangja website

    Scenario: Login the application with the valid credentials
    Given Visit the Rangja website
    When User provide valid email
    When User provide valid password
    Then Click the submit button to Login the application