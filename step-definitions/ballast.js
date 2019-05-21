// 2) Gör en sökning på ”ballast”, rapportera hur många artiklar som finns i hela sortimentet samt via ombud.

let { $, sleep } = require('./funcs')

let sleepTime = 500

let search = 'ballast'

module.exports = function () {

  this.When(/^I enter 'ballast' in the search field$/, async function () {
    let inputSearch = await $('#ProductSearchTextInput')
        inputSearch.sendKeys(search)
        await sleep(sleepTime)
  });


  this.Then(/^it should show how many articles there is in the sortiment based on the search$/, function () {
    
  });


}