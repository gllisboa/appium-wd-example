AppiumWebDriver = require("./config/appiumWebDriver.config");
InitialPage = require("./IOS/pages/initial.page.js") ;


 let appiumDriver = new AppiumWebDriver();

 let initialPage = new InitialPage();

 let driver = null;

async function firstTest() {


        driver = await appiumDriver.initIOS();

        await initialPage.clickYesBtnGuideDialog(driver)


        await appiumDriver.quit();


    }



    firstTest()