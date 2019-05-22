// 1) Sök efter ”anchor steam” på Systembolagets webbplats.
// Klicka på resultatet av sökningen. 
// Kontrollera att den beskrivande texten innehåller: 
// ”Maltig, fruktig smak med inslag av torkade aprikoser”.

let { $, sleep } = require('./funcs')

let sleepTime = 500

let search = 'anchor steam'

module.exports = function () {


    this.Given(/^that web page is loaded$/, async function () {
        await helpers.loadPage('https://www.systembolaget.se/')
        await sleep(sleepTime)
        ageChoice = await $('#modal-agecheck button.action')
        await ageChoice.click()
        await sleep(sleepTime)
    });

    this.When(/^I enter 'anchor steam' in the search field$/, async function () {
        let inputSearch = await $('#ProductSearchTextInput')
        inputSearch.sendKeys(search)
        await sleep(sleepTime)
    });

    this.When(/^I click on search$/, async function () {
        let searchButton = await $('#ProductSearchSubmitButton > i')
        await searchButton.click()
        await sleep(sleepTime)
    });

    this.When(/^I select the search result: anchor steam beer$/, async function () {
        let searchResultButton = await $('.row-container.clearfix')
        await searchResultButton.click()
        await sleep(sleepTime * 6)
    });

    this.Then(/^the product description should contain the specific text we want$/, async function () {
        let beerInfo = await $('div.product-details.options-0')
        let text = await beerInfo.getText()
        assert (text.includes('Maltig, fruktig smak med inslag av torkade aprikoser'), 'the product description is not containing the text that we wanted')
      });


}