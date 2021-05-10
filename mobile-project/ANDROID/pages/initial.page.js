InitialElements = require('../../ANDROID/elements/initial.elements.js')
const initialElements = new InitialElements();

class InitialPage {

    // Get Elements

    async getBtnNumber1(driver) {
        return await driver.elementById(initialElements.btnNumber1());
    }

    async getBtnNumber2(driver) {
        return await driver.elementById(initialElements.btnNumber2());
    }

    async getBtnPlus(driver) {
        return await driver.elementByAccessibilityId(initialElements.btnPlus());
    }

    async getBtnEqual(driver) {
        return await driver.elementByAccessibilityId(initialElements.btnEqual());
    }

    async getLabelEqual(driver) {
        return await driver.elementById(initialElements.resultLabel());
    }

    // Click Elements

    async clickBtnNumber1(driver){

        let btnNumber1 = await this.getBtnNumber1(driver);

        await btnNumber1.click();
    }

    async clickBtnNumber2(driver){

        let btnNumber2 = await this.getBtnNumber2(driver);

        await btnNumber2.click();
    }

    async clickBtnPlus(driver) {

        let btnPlus = await this.getBtnPlus(driver);

        await btnPlus.click();
    }

    async clickBtnEqual(driver) {

        let btnEqual = await this.getBtnEqual(driver);

        await btnEqual.click();
    }

    async getTextLabelEqual(driver){
        let labelEqual = await this.getLabelEqual(driver);
        return await labelEqual.text();
    }


}

module.exports = InitialPage;