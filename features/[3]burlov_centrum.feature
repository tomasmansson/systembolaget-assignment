# 3) Utan att använda sökfältet, leta på systembolaget i Burlövs Centrum 
# och bekräfta att det är stängdt på Kristi himmelfärd.

Feature: Burlovs Centrum opening hours

    Scenario: Confirm that Burlovs Centrum has closed on Kristi Himmelfärd

        Given that web page is loaded
        When I click on 'Våra öppettider'
        And I click on 'Skåne län'
        And I click on 'Burlövs Centrum'
        And I click on 'Visa fler'
        Then It should show that it is closed on Kristi himmelfärd