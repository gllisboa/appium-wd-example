const {appiumDriver,IOSCaps} = require('./wsBasic.config.js');




class AppiumWebDriver {

    async init(device = { model: "", system: "", version: ""}) {

        let driver = null

        switch (device.system.toLowerCase()) {
            case "ios":
                driver = await this.initIOS(device)

                break;
            default:
                break;

        }

        console.log('Init APP')
        console.log(driver)

        return driver

    }


    async initIOS(device = { model: "", system: "", version:""}) {



        await appiumDriver.init(IOSCaps(device))


        console.log('initOS()')

        await setImplicitWaitTimeout(appiumDriver)

        return appiumDriver

    }


    async quit() {


       await appiumDriver.quit()
    }


}




async function setImplicitWaitTimeout(driver = appiumDriver) {

    console.log('setImplicitWaitTimeout :' + driver)


    await driver.setImplicitWaitTimeout(10000);

    }


module.exports = AppiumWebDriver;

