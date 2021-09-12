/*
Create and export a module with class "SecurePage".
This class behaves as a Child class, which contains the selectors of Secure page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/
const BasePage = require('./base.page')
class CheckoutPage extends BasePage {
    get ProceedToCheckout () { return $('//*[@id="center_column"]/p[2]/a[1]/span') }
    get AddressCheckout () { return $('//*[@id="center_column"]/form/p/button/span') }
    get AcceptTerms () { return $('//*[@type="checkbox"]') }
    get ShippingCheckout () { return $('//*[@id="form"]/p/button/span') }
    get CartProductName () { return $('//tbody/tr/td[2]/p/a') }
    get CartColour () { return $('//*[@class="cart_description"]/small[2]/a') }
    get CartQuantity () { return $('.cart_quantity.text-center') }
}
module.exports = new CheckoutPage();