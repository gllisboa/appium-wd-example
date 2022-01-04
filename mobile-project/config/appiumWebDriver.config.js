const {appiumDriver,IOSCaps, AndroidCaps} = require('./wsBasic.config.js');
const SYSTEM = process.env.SYSTEM
global.driver = ""
class AppiumWebDriver {

    static async init() {

        switch (SYSTEM.toLowerCase()) {
            case "ios":
                await appiumDriver.init(IOSCaps());
                break;

            default:
                await appiumDriver.init(AndroidCaps());
                break;

        }

        global.driver = appiumDriver
        await setImplicitWaitTimeout()
    }

    static async quit() {
        let driver = global.driver

        await driver.quit()
    }
}

async function setImplicitWaitTimeout() {
    let driver = global.driver

    await driver.setImplicitWaitTimeout(10000)
    }

module.exports = AppiumWebDriver;

