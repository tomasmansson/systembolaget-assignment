// 3) Utan att använda sökfältet, leta på systembolaget i Burlövs Centrum 
// och bekräfta att det är stängt på Kristi himmelfärd.

let { $, sleep, clickButton } = require('./funcs')

let sleepTime = 500
let openingHours
let skaneLan
let burlovsCentrum
let visaFler

module.exports = function () {

  this.When(/^I click on 'Våra öppettider'$/, async function () {
    await clickButton(openingHours, '#main .background-double-pearl-lusta.dark')
  });

  this.When(/^I click on 'Skåne län'$/, async function () {
    await clickButton(skaneLan, 'li:nth-child(11) > a')
  });

  this.When(/^I click on 'Burlövs Centrum'$/, async function () {
    await sleep(500)
    await clickButton(burlovsCentrum, 'div:nth-child(1) > a:nth-child(2) > div:nth-child(1)')
  });

  this.When(/^I click on 'Visa fler'$/, async function () {
    await sleep(500)
    await clickButton(visaFler, 'button.sb-btn.outlined.full-width')
  });

  this.Then(/^It should show that it is closed on Kristi himmelfärd$/, async function () {
    kristiHimmel = await driver.findElement(by.css('#main li:nth-child(8) span.pull-right')).getText()
    await kristiHimmel
    console.log(kristiHimmel)
    assert (kristiHimmel.includes('Stängt'), 'Stängt is not included in the text')
  });
}