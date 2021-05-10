class InitialElements {


    //Dialog Guide
     btnYesSeeGuideDialog () {  return 'Yes'  }

     btnNoSeeGuideDialog () {  return 'No'  }



    //Numbers Painel
    btnNumber1 () {  return '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[17]'  }

    btnNumber2 () { return '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[18]'}


    //Calc Btns

    btnPlus () { return '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[16]'}

    btnEqual() { return '//XCUIElementTypeApplication[@name=\"Calculator HD\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[23]'}

    labelEqual (expectResult = 0) { return `//XCUIElementTypeStaticText[@name=\"${expectResult}\"]`}


}

module.exports = InitialElements;
