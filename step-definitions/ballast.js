// 2) Gör en sökning på ”ballast”, rapportera hur många artiklar som finns i hela sortimentet samt via ombud.

let { $, sleep } = require('./funcs')

let sleepTime = 500

let search = 'ballast'

let amountRetailers
let amountAssortment

module.exports = function () {

  this.When(/^I enter 'ballast' in the search field$/, async function () {
    let inputSearch = await $('#ProductSearchTextInput')
    inputSearch.sendKeys(search)
    await sleep(sleepTime)
  });


  this.Then(/^it should show how many articles there is in the assortment based on the search$/, async function () {
    amountAssortment = await driver.findElement(by.css('li.all-hits.selected > a > span:nth-child(3)')).getText()
    await amountAssortment

  });

  this.Then(/^it should show how many articles there is at retailers based on the search$/, async function () {
    let retailersButton = await $('li.store-hits > a')
    await retailersButton.click()
    await sleep(sleepTime)

    amountRetailers = await driver.findElement(by.css('li.store-hits.selected > a > span:nth-child(2)')).getText()
    await amountRetailers

  });

  this.Then(/^it should report the quantities back to me$/, function () {
    console.log(amountAssortment)
    console.log(amountRetailers)

  });

}