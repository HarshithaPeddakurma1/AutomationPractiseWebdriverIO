/*
Create and export a module with class "LoginPage".
This class behaves as a Child class, which contains the selectors of Login page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/
const browserslist = require('browserslist')
const BasePage = require('./base.page')
class SigninPage extends BasePage {
    get signIn () { return $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a') }
    get enterEmail () { return $('#email_create') }
    get createAccount () { return $('#SubmitCreate') }
    get Mr () { return $('#id_gender1') }
    get Mrs () { return $('#id_gender2') }
    get CustomerFirstName () { return $('#customer_firstname') }
    get CustomerLastName () { return $('#customer_lastname') }
    get Password () { return $('//*[@id="passwd"]') }
    get Address () { return $('#address1') }
    get City () { return $('#city') }
    get State () { return $('#id_state') }
    get Zip () { return $('#postcode') }
    get Country () { return $('#id_country') }
    get MobileNumber () { return $('#phone_mobile') }
    get Alias () { return $('#alias') }
    get Register () { return $('#submitAccount') }
    get EmailId () { return $('//*[@id="email"]') }
    get SubmitLogin () { return $('//*[@id="SubmitLogin"]/span') }
    
    open () {
        super.open('http://automationpractice.com/index.php')
        browser.pause(7000);
    }
    
    search () {
        this.signIn.click();
        browser.pause(7000);
    }
    randomGenerator(domain,length){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text + domain;
    }
    getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}
module.exports = new SigninPage();