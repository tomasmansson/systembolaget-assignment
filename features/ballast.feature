# 2) Gör en sökning på ”ballast”, rapportera hur många artiklar som finns i hela sortimentet samt via ombud.

Feature: Ballast

    Scenario: Report how many articles appear when searching on ballast

        Given that web page is loaded
        When I enter 'ballast' in the search field
        And I click on search
        Then it should show how many articles there is in the assortment based on the search
        And it should show how many articles there is at retailers based on the search
        And it should report the quantities back to me