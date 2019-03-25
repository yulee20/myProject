const Srp = require('../testSupport/pageObjects/srp');

module.exports = function(){
    this.Given(/^I am a customer on the Homepage$/, async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.google.com');
        await Srp.search.sendKeys('test');
    });
};
