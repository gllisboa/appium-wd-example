const {Given, When, Then, After}  = require('cucumber');
const  assert = require('assert');

const AppiumWebDriver = require('../../../config/appiumWebDriver.config');
const Context = require('../../../state/context')

const InitialPage = require('../../../config/pages/initial.page')


let appiumWebDriver = new AppiumWebDriver();
let context = new Context();
let initialPage = new InitialPage();
let device = null;
let expectResult = '3';
let resultGenerate = null;



Given(`Esteja na tela inicial`,{timeout: 100 * 1000}, async function(){

   await context.setDevice(this.device);

   console.log("Given")
   console.dir(this.device)

   await appiumWebDriver.init()

});


When('abro o chat',{timeout: 100 * 1000}, async function(){

    
    await initialPage.clickBtnNumber1();

    await initialPage.clickBtnPlus();

    await initialPage.clickBtnNumber2();

    await initialPage.clickBtnEqual();

    //  resultGenerate = await initialPage.getTextLabelEqual(driver, device, expectResult);





});

Then("O sistema carrega a pagina inicial corretamente",{timeout: 100 * 1000}, async function(){

    // assert.strictEqual(resultGenerate,expectResult)

});

After(async function(){

   await context.getDriver().quit()

    // await driver.quit();
});

