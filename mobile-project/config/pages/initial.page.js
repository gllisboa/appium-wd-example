
const InitialPageIOS = require('../../IOS/pages/initial.page')
const InitialPageAndroid = require('../../ANDROID/pages/initial.page')

let initialPageIOS;
let initialPageAndroid;

class InitialPage {

    constructor(){
        initialPageIOS = new InitialPageIOS()
        initialPageAndroid = new InitialPageAndroid()
    }


   async clickBtnNumber1(driver, device = { model: "", system: "", version: ""}) {

        if (device.system.toLocaleLowerCase() == 'ios') {
            await initialPageIOS.clickBtnNumber1(driver)
        }else {
            await initialPageAndroid.clickBtnNumber1(driver)
        }
    }

    async clickBtnNumber2(driver, device = { model: "", system: "", version: ""}) {

        if (device.system.toLocaleLowerCase() == 'ios') {
            await initialPageIOS.clickBtnNumber2(driver)
        }else {
            await initialPageAndroid.clickBtnNumber2(driver)
        }
    }


    async clickBtnPlus(driver, device = { model: "", system: "", version: ""}) {

        if (device.system.toLocaleLowerCase() == 'ios') {
            await initialPageIOS.clickBtnPlus(driver)
        }else {
            await initialPageAndroid.clickBtnPlus(driver)
        }
    }

    async clickBtnEqual(driver, device = { model: "", system: "", version: ""}) {

        if (device.system.toLocaleLowerCase() == 'ios') {
            await initialPageIOS.clickBtnEqual(driver)
        }else {
            await initialPageAndroid.clickBtnEqual(driver)
        }
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