Feature: End to end ecommerce validation

  application regression
  @Regression
  Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to Cart
    And Validate the total prices
    Then Select the country submit and verify Thank you

    @Smoke
    Scenario: Filing the form to shop
      Given I open ecommerce page
      When i fill the form details
        | ame   | gender |
        | bobzz | Male   |
      Then validate the forms behaviour
      And select the shop Page
