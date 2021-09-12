/*
Create and export a module with class "SecurePage".
This class behaves as a Child class, which contains the selectors of Secure page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/
const BasePage = require('./base.page')
class SummerDressesPage extends BasePage {
    get Instock () { return $('//*[@id="center_column"]/ul/li[1]/div/div[2]/span/span') }
    get AddToCart () { return $('//*[@id="center_column"]/ul/li[1]/div/div[2]/div[2]/a[1]/span') }
    get SuccessAddToCart () { return $('//*[@id="layer_cart"]/div[1]/div[1]/h2[1]') }
    get ProductName () { return $('//*[@id="layer_cart_product_title"]') }
    get Colour () { return $('//*[@id="layer_cart_product_attributes"]') }
    get Quantity () { return $('//*[@id="layer_cart_product_quantity"]') }
    get ProceedToCheckOut () { return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span') }
}
module.exports = new SummerDressesPage();