/*
Create and export a module with class "SecurePage".
This class behaves as a Child class, which contains the selectors of Secure page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/
const BasePage = require('./base.page')
class MyAccountPage extends BasePage {
    get AccountName () { return $('//*[@class="account"]/span') }
    get Signout () { return $('a[class="logout"]') }
    get MyAccount () { return $('//*[@id="center_column"]/h1') }
    get Dresses () { return $('//*[@id="block_top_menu"]/ul/li[2]/a') }
    get SummerDresses () { return $('//*[@id="block_top_menu"]/ul/li[2]/ul/li[3]/a') }
}
module.exports = new MyAccountPage();