# 4) Sök på ”Nanny state”,
# lägg den i varukorgen, 
# gå till varukorgen, 
# skriv in butik ”Hansa” 
# och bekräfta att det finns fler än 10 exemplar i butiken.

Feature: Nanny State

    Scenario: Nanny State, Hansa store balance

        Given that web page is loaded
        When I enter 'Nanny state' in the search field
        And I click on search
        And I put one in shopping cart
        And I go to my shopping cart
        And I search and select store 'Hansa' 
        Then the Hansa store balance should be greater than 10