const {appiumDriver,IOSCaps, AndroidCaps} = require('./wsBasic.config.js');




class AppiumWebDriver {

    async init(device = { model: "", system: "", version: ""}) {

        let driver = null

        switch (device.system.toLowerCase()) {
            case "ios":
                driver = await this.initIOS(device)

                break;
            default:
                driver = await this.initAndroid(device)

                break;

        }


        return await driver

    }


    async initIOS(device = { model: "", system: "", version:""}) {


        await appiumDriver.init(IOSCaps(device))

        await setImplicitWaitTimeout(appiumDriver)

        return await appiumDriver

    }

    async initAndroid(device = { model: "", system: "", version:""}) {

        await appiumDriver.init(AndroidCaps(device))

        await setImplicitWaitTimeout(appiumDriver)

        return await appiumDriver

    }



    async quit() {


       await appiumDriver.quit()
    }


}




async function setImplicitWaitTimeout(driver = appiumDriver) {


    await driver.setImplicitWaitTimeout(10000);

    }


module.exports = AppiumWebDriver;

