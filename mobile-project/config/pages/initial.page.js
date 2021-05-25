
const InitialPageIOSElements = require('../../IOS/elements/initial.elements');
let initialPageIOSElements = new InitialPageIOSElements();

const InitialPageAndroidElements = require('../../ANDROID/elements/initial.elements');
let initialPageAndroidElements = new InitialPageAndroidElements();



const Context = require('../../state/context')
let context = new Context();


class InitialPage {

   async clickBtnNumber1() {

        let btnNumber1 = null;

        if (context.getDevice().system.toLocaleLowerCase() == 'ios') {
            btnNumber1 = await initialPageIOSElements.btnNumber1();
        }else {
            btnNumber1 = await initialPageAndroidElements.btnNumber1();
        }

        await btnNumber1.click();


    }

    async clickBtnNumber2() {

        let btnNumber2 = null;

        if (context.getDevice().system.toLocaleLowerCase() == 'ios') {
            btnNumber2 = await initialPageIOSElements.btnNumber2();
        }else {
            btnNumber2 = await initialPageAndroidElements.btnNumber2();
        }

        await btnNumber2.click();

    }


    async clickBtnPlus() {

        let btnPlus = null;

        if (context.getDevice().system.toLocaleLowerCase() == 'ios') {
            btnPlus = await initialPageIOSElements.btnPlus();
        }else {
            btnPlus = await initialPageAndroidElements.btnPlus();
        }

        await btnPlus.click();
    }

    async clickBtnEqual() {

        let btnEqual = null;

        if (context.getDevice().system.toLocaleLowerCase() == 'ios') {
            btnEqual = await initialPageIOSElements.btnEqual();
        }else {
            btnEqual = await initialPageAndroidElements.btnEqual();
        }

        await btnEqual.click();
    }

    async getTextLabelEqual(driver, device = { model: "", system: "", version: ""}, expectResult = 0) {

        if (device.system.toLocaleLowerCase() == 'ios') {
            return await initialPageIOS.getTextLabelEqual(driver, expectResult)
        }else {
            return await initialPageAndroid.getTextLabelEqual(driver)
        }
    }








}

module.exports = InitialPage