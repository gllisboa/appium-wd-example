import AppiumWebDriver from "./config/appiumWebDriver.config.js";

 let driver = new AppiumWebDriver();



async function firstTest() {


        driver.initIOS();

        let btnYesSeeGuideDialog = await driver.elementByAccessibilityId("Yes");

        await btnYesSeeGuideDialog.click();

        let btnCloseGuide = await driver.elementByName("×");

        await btnCloseGuide.click();


        let btnNumber1 = await driver.elementByName("1");

        await btnNumber1.click();

        console.log('Teste GET : ' + await btnNumber1.text())


        driver.quit();


    }



    firstTest()