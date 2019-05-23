# 1) Sök efter ”anchor steam” på Systembolagets webbplats.
# Klicka på resultatet av sökningen.
# Kontrollera att den beskrivande texten innehåller:
# ”Maltig, fruktig smak med inslag av torkade aprikoser”.

Feature: Anchor steam



    Scenario: Search for anchor steam description

        Given that web page is loaded
        When I enter 'anchor steam' in the search field
        And I click on search
        And I select the search result: anchor steam beer
        Then the product description should contain the specific text we want