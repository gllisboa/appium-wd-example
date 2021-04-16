InitialElements = require('../elements/initial.elements')
const initialElements = new InitialElements();

class InitialPage {

    async getElementBtnGuide(driver) {

           return await driver.elementByAccessibilityId(initialElements.btnYesSeeGuideDialog());

    }


    async clickYesBtnGuideDialog (driver) {


        let btnYesSeeGuideDialog = await this.getElementBtnGuide(driver);


        await btnYesSeeGuideDialog.click();



    }


}

module.exports = InitialPage;