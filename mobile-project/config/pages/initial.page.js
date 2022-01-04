
const InitialPageIOSElements = require('../../IOS/elements/initial.elements');
let initialPageIOSElements = new InitialPageIOSElements();

const InitialPageAndroidElements = require('../../ANDROID/elements/initial.elements');
let initialPageAndroidElements = new InitialPageAndroidElements();
const SYSTEM = process.env.SYSTEM

class InitialPage {

   async clickBtnNumber1() {
        if (SYSTEM.toLocaleLowerCase() == 'ios') {
            var btnNumber1 = await initialPageIOSElements.btnNumber1();
        }else {
            var btnNumber1 = await initialPageAndroidElements.btnNumber1();
        }

        await btnNumber1.click();
    }

    async clickBtnNumber2() {

        if (SYSTEM.toLocaleLowerCase() == 'ios') {
            var btnNumber2 = await initialPageIOSElements.btnNumber2();
        }else {
            var btnNumber2 = await initialPageAndroidElements.btnNumber2();
        }

        await btnNumber2.click();

    }


    async clickBtnPlus() {

        if (SYSTEM.toLocaleLowerCase() == 'ios') {
            var btnPlus = await initialPageIOSElements.btnPlus();
        }else {
            var btnPlus = await initialPageAndroidElements.btnPlus();
        }

        await btnPlus.click();
    }

    async clickBtnEqual() {

        if (SYSTEM.toLocaleLowerCase() == 'ios') {
            var btnEqual = await initialPageIOSElements.btnEqual();
        }else {
            var btnEqual = await initialPageAndroidElements.btnEqual();
        }

        await btnEqual.click();
    }

    async getTextLabelEqual(expectResult = 0) {

        if (SYSTEM.toLocaleLowerCase() == 'ios') {
            var textLabel = await initialPageIOSElements.resultLabel(expectResult);
        }else {
            var textLabel = await initialPageAndroidElements.resultLabel();
        }

        return await textLabel.text();
    }








}

module.exports = InitialPage