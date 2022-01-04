class InitialElements {
    //Numbers Painel
    async btnNumber1 () {
        let xPath = '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[17]';
        let driver = global.driver
        return driver.elementByXPath(xPath);
    }

    btnNumber2 () {
        let xPath = '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[18]';
        let driver = global.driver
        return driver.elementByXPath(xPath);
    }

    //Calc Btns
    btnPlus () {
        let xPath = '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[16]';
        let driver = global.driver
        return driver.elementByXPath(xPath);
    }

    btnEqual() {
        let xPath = '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[23]';
        let driver = global.driver
        return driver.elementByXPath(xPath);
    }

    resultLabel (expectResult = 0) {
        let xPath = `//XCUIElementTypeStaticText[@name=\"${expectResult}\"]`;
        let driver = global.driver
        return driver.elementByXPath(xPath);
    }
}

module.exports = InitialElements;
