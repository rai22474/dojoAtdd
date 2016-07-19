#language: en

Feature: Create a new checkout
  In order to buy products in a supermarket
  As a clerk
  I want to create a new empty checkout

  Scenario: Create a new empty checkout
    When a supermarket clerk wants to start a checkout with code "1"
    Then a new checkout will be created with "0 EUR" in the total value