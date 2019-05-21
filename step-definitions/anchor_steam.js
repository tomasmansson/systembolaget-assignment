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
        let ageChoice = await $('#modal-agecheck > div > div > div > div > div.content > div.actions.ng-scope > button')
        await ageChoice.click()
        await sleep(sleepTime)
    });

    this.When(/^I enter anchor steam in the search field$/, async function () {
        let inputSearch = await $('#ProductSearchTextInput')
        inputSearch.sendKeys(search)
        await sleep(sleepTime)
    });

    this.When(/^I click on search$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
}