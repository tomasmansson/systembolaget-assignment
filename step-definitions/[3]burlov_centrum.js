// 3) Utan att använda sökfältet, leta på systembolaget i Burlövs Centrum 
// och bekräfta att det är stängt på Kristi himmelfärd.

let { $, sleep, clickButton } = require('./funcs')
let openingHours
let skaneLan
let burlovsCentrum
let visaFler

module.exports = function () {
  // Click on opening hours
  this.When(/^I click on 'Våra öppettider'$/, async function () {
    await clickButton(openingHours, '#main .background-double-pearl-lusta.dark')
  });

  // Click on "Skåne län"
  this.When(/^I click on 'Skåne län'$/, async function () {
    await clickButton(skaneLan, 'li:nth-child(11) > a')
  });

  // Click on "Burlöv Centrum"
  this.When(/^I click on 'Burlövs Centrum'$/, async function () {
    await sleep(500)
    await clickButton(burlovsCentrum, 'div:nth-child(1) > a:nth-child(2) > div:nth-child(1)')
  });

  // Click on "Visa Fler"
  this.When(/^I click on 'Visa fler'$/, async function () {
    await sleep(500)
    await clickButton(visaFler, 'button.sb-btn.outlined.full-width')
  });

  // Fetching table with opening hours and checking that it contains "Kristi himmelfärd, Stängt"
  this.Then(/^It should show that it is closed on Kristi himmelfärd$/, async function () {
    kristiHimmel = await driver.findElement(by.css('div.row.site-page-content')).getText()
    await kristiHimmel
    assert(kristiHimmel.includes('Kristi himmelfärd, Stängt'), '"Kristi himmelfärd, Stängt" is not included in the text')
  });
}