const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

const AppiumWebDriver = require('../../../config/appiumWebDriver.config');
let appiumWebDriver = new AppiumWebDriver();

const InitialPage = require('../../../config/pages/initial.page')
let initialPage = new InitialPage();

let expectResult = '3';
let resultGenerate = null;

Given(`Esteja na tela inicial`, { timeout: 100 * 1000 }, async function () {
    await appiumWebDriver.init()
});

When('abro o chat', { timeout: 100 * 1000 }, async function () {
    await initialPage.clickBtnNumber1();
    await initialPage.clickBtnPlus();
    await initialPage.clickBtnNumber2();
    await initialPage.clickBtnEqual();

    resultGenerate = await initialPage.getTextLabelEqual(expectResult);
});

Then("O sistema carrega a pagina inicial corretamente", { timeout: 100 * 1000 }, async function () {
    await assert.strictEqual(resultGenerate, expectResult)
});
