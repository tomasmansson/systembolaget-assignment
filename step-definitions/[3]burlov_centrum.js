// 3) Utan att använda sökfältet, leta på systembolaget i Burlövs Centrum 
// och bekräfta att det är stängt på Kristi himmelfärd.

let { $, sleep } = require('./funcs')

let sleepTime = 500

module.exports = function () {

  this.When(/^I click on 'Våra öppettider'$/, async function () {
    openingHours = await $('#main .background-double-pearl-lusta.dark')
        await openingHours.click()
        await sleep(sleepTime)
    
  });
  

}