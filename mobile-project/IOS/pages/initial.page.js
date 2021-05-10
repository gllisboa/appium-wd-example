InitialElements = require('../elements/initial.elements')
const initialElements = new InitialElements();

class InitialPage {

    // Get Elements

    async getBtnYesGuide(driver) {
           return await driver.elementByXPath(initialElements.btnYesSeeGuideDialog());
    }

    async getBtnNoGuide(driver) {
        return  await driver.elementByXPath(initialElements.btnNoSeeGuideDialog());
    }

    async getBtnNumber1(driver) {
        return  await driver.elementByXPath(initialElements.btnNumber1());
    }

    async getBtnNumber2(driver) {
        return  await driver.elementByXPath(initialElements.btnNumber2());
    }

    async getBtnPlus(driver) {
        return await driver.elementByXPath(initialElements.btnPlus());
    }

    async getBtnEqual(driver) {
        return await driver.elementByXPath(initialElements.btnEqual());
    }

    async getLabelEqual(driver, resultExpect = 0) {
        return await driver.elementByXPath(initialElements.labelEqual(resultExpect));
    }

    // Click Elements

    async clickYesBtnGuideDialog(driver) {

        let btnYesSeeGuideDialog = await this.getBtnYesGuide(driver);
        await btnYesSeeGuideDialog.click();

    }

    async clickNoBtnGuideDialog(driver) {
        let btnNoSeeGuideDialog =  await this.getBtnNoGuide(driver);

        btnNoSeeGuideDialog.click();
    }

    async clickBtnEqual(driver) {

        let btnEqual = await this.getBtnEqual(driver);

        btnEqual.click();
    }

    async clickBtnNumber1(driver){

        let btnNumber1 = await this.getBtnNumber1(driver)

        await btnNumber1.click();
    }

    async clickBtnNumber2(driver){

        let btnNumber2 = await this.getBtnNumber2(driver)

        await btnNumber2.click();
    }

    async clickBtnPlus(driver){

        let btnPlus = await this.getBtnPlus(driver)

        await btnPlus.click();
    }

    async clickBtnEqual(driver){

        let btnEqual = await this.getBtnEqual(driver)

        await btnEqual.click();
    }

    async getTextLabelEqual(driver, expectResult = 0){

        let labelEqual = await this.getLabelEqual(driver, expectResult);

        return await labelEqual.text();
    }


}

module.exports = InitialPage;