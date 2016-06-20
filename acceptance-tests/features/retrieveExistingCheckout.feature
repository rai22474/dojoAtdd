#language: en

Feature: Create new checkout
  In order to know which is the total of a checkout
  As a clerk
  I want retrieve the current state of the checkout

  Scenario: Retrieve an existing checkout
    Given an existing checkout with code "1"
    When a supermarket clerk want consult the current state the checkout "1"
    Then the checkout with the code "1" is returned