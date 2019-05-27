// 4) Sök på ”Nanny state”,
// lägg den i varukorgen, 
// gå till varukorgen, 
// skriv in butik ”Hansa” 
// och bekräfta att det finns fler än 10 exemplar i butiken.

let { $, sleep, clickButton } = require('./funcs')
let sleepTime = 500
let search = 'Nanny state'
let store = 'Hansa'
let addToShoppingCart
let goToShoppingCart
let selectSearchHit

module.exports = function () {
  // Enter search in search field
  this.When(/^I enter 'Nanny state' in the search field$/, async function () {
    let inputSearchProduct = await $('#ProductSearchTextInput')
    inputSearchProduct.sendKeys(search)
    await sleep(sleepTime)
  });

  // Add one from the search result to shopping cart
  this.When(/^I put one in shopping cart$/, async function () {
    await clickButton(addToShoppingCart, 'button.click-area.ng-scope.ng-isolate-scope')
    await sleep(sleepTime)
  });

  // Go to shopping cart
  this.When(/^I go to my shopping cart$/, async function () {
    await clickButton(goToShoppingCart, 'a.sb-nav-action.basket')
    await sleep(sleepTime)
  });

  // Enter store in search field and select search result
  this.When(/^I search and select store 'Hansa'$/, async function () {
    let inputSearchStore = await $('#site-picker-input')
    await inputSearchStore.sendKeys(store)
    await clickButton(selectSearchHit, '.name.combined-match.ng-binding.ng-scope')
  });

  // Fetch the store balance and check if it is greater than 10
  this.Then(/^the Hansa store balance should be greater than (\d+)$/, async function (x) {
    storeBalance = await driver.findElement(by.css('.secondary.ng-binding')).getText()
    storeBalance = storeBalance.replace(/\D/g, '') / 1
    await sleep(500)
    console.log('the store ' + store + ' has ' + storeBalance + ' ' + search + ' in stock')
    assert(storeBalance > 10, 'The Hansa store balance is not greater than 10')
  });
}