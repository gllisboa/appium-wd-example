
const { getElement } = require('../elements/suppourtElements')

class InitialElements {

  //Numbers Painel
  btnNumber1() {
    return getElement({
      ios: { type: 'xpath', selector: '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[17]' },
      android: { type: 'id', selector: 'com.google.android.calculator:id/digit_1' }
    })
  }

  btnNumber2() {
    return getElement({
      ios: { type: 'xpath', selector: '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[18]' },
      android: { type: 'id', selector: 'com.google.android.calculator:id/digit_2' }
    })
  }

  btnPlus() {
    return getElement({
      ios: { type: 'xpath', selector: '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[16]' },
      android: { type: 'accessibility', selector: 'plus' }
    })
  }

  btnEqual() {
    return getElement({
      ios: { type: 'xpath', selector: '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[23]' },
      android: { type: 'accessibility', selector: 'equals' }
    })
  }

  resultLabel(expectResult) {
    return getElement({
      ios: { type: 'xpath', selector: `//XCUIElementTypeStaticText[@name=\"${expectResult}\"]` },
      android: { type: 'id', selector: 'com.google.android.calculator:id/result_final' }
    })
  }

}
module.exports = InitialElements;
