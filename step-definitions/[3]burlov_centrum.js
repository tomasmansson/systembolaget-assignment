// 3) Utan att använda sökfältet, leta på systembolaget i Burlövs Centrum 
// och bekräfta att det är stängt på Kristi himmelfärd.

let { $, sleep, clickButton } = require('./funcs')

let sleepTime = 500
let openingHours

module.exports = function () {

  this.When(/^I click on 'Våra öppettider'$/, async function () {
    await clickButton(openingHours, '#main .background-double-pearl-lusta.dark')

  });


}