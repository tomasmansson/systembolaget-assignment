// 1) Sök efter ”anchor steam” på Systembolagets webbplats.
// Klicka på resultatet av sökningen. 
// Kontrollera att den beskrivande texten innehåller: 
// ”Maltig, fruktig smak med inslag av torkade aprikoser”.

let { $, sleep, clickButton } = require('./funcs')

let sleepTime = 500

let search = 'anchor steam'
let ageChoice
let searchButton
let searchResultButton
let description = 'Maltig, fruktig smak med inslag av torkade aprikoser'

module.exports = function () {


    this.Given(/^that web page is loaded$/, async function () {
        await helpers.loadPage('https://www.systembolaget.se/')
        await sleep(sleepTime)
        await clickButton(ageChoice, '#modal-agecheck button.action')
    });

    this.When(/^I enter 'anchor steam' in the search field$/, async function () {
        let inputSearch = await $('#ProductSearchTextInput')
        inputSearch.sendKeys(search)
        await sleep(sleepTime)
    });

    this.When(/^I click on search$/, async function () {
        await clickButton(searchButton, '#ProductSearchSubmitButton > i')
    });

    this.When(/^I select the search result: anchor steam beer$/, async function () {
        await clickButton(searchResultButton, '.row-container.clearfix')
    });

    this.Then(/^the product description should contain the specific text we want$/, async function () {
        let beerInfo = await $('div.product-details.options-0')
        let text = await beerInfo.getText()
        assert(text.includes(description), 'the product description is not containing the description that we wanted')
    });


}