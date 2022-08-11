Feature: End to end ecommerce validation

  application regression

  Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to Cart
    And Validate the total prices
    Then Select the country submit and verify Thank you

    Scenario: Filing the form to shop
      Given I open ecommerce page
      When i fill the form details
        | ame | gender |
        | Bob | Male   |
      Then validate the forms behaviour
      And select the shop Page
