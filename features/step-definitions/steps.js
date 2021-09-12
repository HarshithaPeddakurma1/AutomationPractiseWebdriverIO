/*
Import classes from newly created page object files.
Import the required keywords from Cucumber.
Use Page Object classes and methods to interact with the UI elements.
Use WebDriverIO commands to perform action the UI elements.
Use expect() to perform the necessary validations.
*/
const { Given, When, Then} = require('@cucumber/cucumber');
const SigninPage = require('../pages/signin.page');
const MyAccountPage = require('../pages/myaccount.page');
const SummerDressesPage = require('../pages/summerdresses.page');
const CheckoutPage = require('../pages/checkout.page');
var CustomerFirstName = '';
var CustomerLastName = '';
var Password;
var RandomEmail = '';
var ProductName = '';
var Quantity;
var parts = [];
var Colorname = '';
var CartProductName = '';
var CartColour = '';
var CartQuantity;
Given('The user is AutomationPractise Website', async function () {
    SigninPage.open();
    browser.maximizeWindow();
    
});

When('The user creates a account', async function () {
    await SigninPage.signIn.click();
    //await SigninPage.enterEmail.waitForExist({ timeout: 10000 });
    await browser.pause(3000);
    RandomEmail = await SigninPage.randomGenerator("@gmail.com",15);
    console.log(RandomEmail);
    await browser.pause(3000);
    await SigninPage.enterEmail.click();
    await browser.pause(2000);
    await SigninPage.enterEmail.addValue(RandomEmail);
    await SigninPage.createAccount.click();
    random_boolean = Boolean(Math.random() < 0.5);
    if(random_boolean){
        SigninPage.Mr.click();
    }
    else{
        SigninPage.Mrs.click();
    }
    await SigninPage.CustomerFirstName.addValue('test');
    CustomerFirstName = await SigninPage.CustomerFirstName.getValue();
    console.log(CustomerFirstName);
    await SigninPage.CustomerLastName.addValue('user');
    CustomerLastName = await SigninPage.CustomerLastName.getValue();
    console.log(CustomerLastName);
    await SigninPage.Password.addValue('testuser');
    Password = await SigninPage.Password.getValue();
    console.log(Password);
    await SigninPage.Address.addValue('coconut rd');
    await SigninPage.City.addValue('Melbourne');
    await SigninPage.State.selectByIndex(SigninPage.getRandomNumberBetween(1,50));
    await SigninPage.Zip.addValue('30000');
    await SigninPage.Country.selectByAttribute('value', '21');
    await SigninPage.MobileNumber.addValue('0400000000');
    await SigninPage.Register.click();
    await browser.pause(3000);
});

Then('Check Name and Surname are correct after register', async function () {   
    var Accountname = await MyAccountPage.AccountName.getText();
    console.log(Accountname);
    console.log(CustomerFirstName);
    console.log(CustomerLastName);
    var ExpectedAccountname = CustomerFirstName+' '+CustomerLastName;
    console.log(ExpectedAccountname);
    await expect(Accountname).toEqual(ExpectedAccountname);  
});
Given('Signout and enter the Valid Email address and password', async function () { 
    await MyAccountPage.Signout.click();
    await browser.pause(5000);
    //await SigninPage.signIn.click();
    //await browser.pause(3000);
    await SigninPage.EmailId.addValue(RandomEmail);
    await SigninPage.Password.addValue(Password);
    
});
When('Click on the Submit Button', async function () {   
    await SigninPage.SubmitLogin.click();
    await browser.pause(3000);
});
Then('User should be able to login into the automation practise website', async function () {   
    await MyAccountPage.MyAccount.isDisplayed();
    /*await MyAccountPage.Signout.click();
    await browser.pause(3000);
    await SigninPage.signIn.click();*/
});
Given('Go to Dresses and click on the Summer dresses', async function () {
 await MyAccountPage.Dresses.moveTo(74.500,22);
 await MyAccountPage.SummerDresses.click();
 await browser.pause(5000);  
});
When('Click on Add to Cart', async function () {
  await SummerDressesPage.Instock.scrollIntoView();
  await SummerDressesPage.Instock.moveTo(49.125,18);
  await SummerDressesPage.AddToCart.click();
  await browser.pause(6000);
});
Then('Validate that product is successfully added to the cart', async function () {   
  var SuccessMessage= await SummerDressesPage.SuccessAddToCart.getText();
  await expect(SuccessMessage).toContain('Product successfully added to your shopping cart');
});
Given('Get the productname colour and quantity', async function () {
     ProductName = await SummerDressesPage.ProductName.getText();
     console.log(ProductName);
     var Color = await SummerDressesPage.Colour.getText();
     parts = Color.split(", ");
     Colorname = parts[0]
     console.log(Colorname);
     Quantity = await SummerDressesPage.Quantity.getText();
     console.log(Quantity);
   });
   When('Click on Proceed to CheckOut', async function () {
     await SummerDressesPage.ProceedToCheckOut.click();
     await CheckoutPage.ProceedToCheckout.click();
     await CheckoutPage.AddressCheckout.click();
     await CheckoutPage.AcceptTerms.click();
     await CheckoutPage.ShippingCheckout.click();
     await browser.pause(3000);

   });
   Then('Validate whether same productname colour and quantity are displayed in the Summary page', async function () {   
    CartProductName = await CheckoutPage.CartProductName.getText();
    console.log(CartProductName);
    await expect(CartProductName).toEqual(ProductName);
    CartColour = await CheckoutPage.CartColour.getText();
    console.log(CartColour);
    await expect(CartColour).toContain(Colorname);
    CartQuantity = await CheckoutPage.CartQuantity.getText();
    console.log(CartQuantity);
    await expect(CartQuantity).toEqual(CartQuantity);
   });