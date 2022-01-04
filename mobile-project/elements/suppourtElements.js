
const SYSTEM = process.env.SYSTEM

module.exports = {

    getElement(element) {
        let driver = global.driver

        if (SYSTEM == 'ios') {
            element = element.ios
        } else {
            element = element.android
        }

        switch (element.type) {
            case 'id':
                return driver.elementById(element.selector)

            case 'accessibility':
                return driver.elementByAccessibilityId(element.selector)

            case 'xpath':
                return driver.elementByXPath(element.selector)

            default:
                console.log('Erro - Falha ao capturar elemento.')
        }
    }
}