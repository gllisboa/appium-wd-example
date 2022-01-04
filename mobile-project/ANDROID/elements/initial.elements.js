class InitialElements {

 //Numbers Painel
   btnNumber1 () {
        let id = 'com.google.android.calculator:id/digit_1';
        let driver = global.driver
        return  driver.elementById(id)
    }

    btnNumber2 () {
        let id = 'com.google.android.calculator:id/digit_2';
        let driver = global.driver
        return  driver.elementById(id)
    }

    btnPlus () {
        let accessibilityId = 'plus';
        let driver = global.driver
        return  driver.elementByAccessibilityId(accessibilityId)
    }

    btnEqual () {
        let accessibilityId = 'equals';
        let driver = global.driver
        return  driver.elementByAccessibilityId(accessibilityId)
      }

    resultLabel () {
      let id = 'com.google.android.calculator:id/result_final';
      let driver = global.driver
      return  driver.elementById(id)
      }
}

module.exports = InitialElements;
