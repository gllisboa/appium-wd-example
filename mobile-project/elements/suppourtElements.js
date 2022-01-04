const Context = require('../state/context')
let context = new Context();

module.exports = {

    getElement(element) {

        if (context.getDevice().system.toLocaleLowerCase() == 'ios') {
            element = element.ios
        } else {
            element = element.android
        }

        switch (element.type) {
            case 'id':
                return context.getDriver().elementById(element.selector)

            case 'accessibility':
                return context.getDriver().elementByAccessibilityId(element.selector)

            case 'xpath':
                return context.getDriver().elementByXPath(element.selector)

            default:
                console.log('Erro - Falha ao capturar elemento.')
        }
    }
}