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
    // remove all characters and symbols that are not numbers, and converting to an int.
    amountAssortment = amountAssortment.replace(/\D/g, '') / 1
    // assert that is checking if we got a number from 
    assert.isNumber(amountAssortment, 'amountAssortment should include a number, but it is not')

  });

  this.Then(/^it should show how many articles there is at retailers based on the search$/, async function () {
    let retailersButton = await $('li.store-hits > a')
    await retailersButton.click()
    await sleep(sleepTime)

    amountRetailers = await driver.findElement(by.css('li.store-hits.selected > a > span:nth-child(2)')).getText()
    await amountRetailers
    // remove all characters and symbols that are not numbers, and converting to an int.
    amountRetailers = amountRetailers.replace(/\D/g, '') / 1
    // assert that is checking if we got a number from 
    assert.isNumber(amountRetailers, 'amountRetailers should include a number, but it is not')

  });

  this.Then(/^it should report the quantities back to me$/, function () {
    console.log('Artiklar som finns i sortimentet: ' + amountAssortment)
    console.log('Artiklar som finns via ombud: ' + amountRetailers)

  });

}