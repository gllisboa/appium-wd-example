
const InitialPageElements = require('../../elements/initial.elements')
let initialPageElements = new InitialPageElements()

class InitialPage {

    async clickBtnNumber1() {
        var el = await initialPageElements.btnNumber1()
        await el.click()
    }

    async clickBtnNumber2() {
        var el = await initialPageElements.btnNumber2()
        el.click()
    }

    async clickBtnPlus() {
        var el = await initialPageElements.btnPlus()
        el.click()
    }

    async clickBtnEqual() {
        var el = await initialPageElements.btnEqual()
        el.click()
    }

    async getTextLabelEqual(expectResult = 0) {
        var txt = await initialPageElements.resultLabel(expectResult)
        return txt.text()
    }
}

module.exports = InitialPage