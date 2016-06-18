#language: en

Feature: Create new checkout
  In order to buy products in a supermarket
  As a clerk
  I want to create new empty checkout

Scenario: Create new empty checkout
  When a supermarket clerk want to start to sell products to a customer
  Then a new checkout is created with "0 EUR" in the total value