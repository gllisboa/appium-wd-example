const {Given, When, Then, After}  = require('cucumber');
const  assert = require('assert');

const AppiumWebDriver = require('../../../config/appiumWebDriver.config');

const InitialPage = require('../../../config/pages/initial.page')


let appiumWebDriver = new AppiumWebDriver();
let initialPage = new InitialPage();
let driver = null;
let device = null;
let expectResult = '3';
let resultGenerate = null;



Given(`Esteja na tela inicial com o {string} com o {string} na {string}`,{timeout: 100 * 1000}, async function(string,string2,string3){

   device =  await { model: string, system: string2, version: string3}

    driver = await appiumWebDriver.init(device)


});


When('abro o chat',{timeout: 100 * 1000}, async function(){

    await initialPage.clickBtnNumber1(driver, device);

    await initialPage.clickBtnPlus(driver, device);

    await initialPage.clickBtnNumber2(driver, device);

    await initialPage.clickBtnEqual(driver, device);

     resultGenerate = await initialPage.getTextLabelEqual(driver, device, expectResult);





});

Then("O sistema carrega a pagina inicial corretamente",{timeout: 100 * 1000}, async function(){

    assert.strictEqual(resultGenerate,expectResult)

});

After(async function(){

    await driver.quit();
});

