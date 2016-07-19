#language: en

Feature: Create new checkout
    In order to know which is the total of a checkout
    As a clerk
    I want retrieve the current state of the checkout

    Scenario: Retrieve an existing checkout
        Given an existing checkout with code "1"
        When a supermarket clerk queries the checkout "1" current state
        Then the checkout with the code "1" will be returned
        And the checkout total will be "0 EUR"

    Scenario: Retrieve an non existing checkout
        When a supermarket clerk queries the checkout "2" current state
        Then the checkout won't be found
