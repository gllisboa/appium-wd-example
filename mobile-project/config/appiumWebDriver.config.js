import {appiumDriver, IOSCaps } from './wsBasic.config';

let driver = null;
let desiredCaps = null;

export default class AppiumWebDriver {


    initIOS() {

        driver = appiumDriver;
        desiredCaps = IOSCaps

        console.log('Entrou na chamada initOS()')


        driver.init(desiredCaps)

        setImplicitWaitTimeout(driver)

    }


    setImplicitWaitTimeout(driver) {

    driver.setImplicitWaitTimeout(5000);

    }

    quit() {


        driver.quit()
    }

}

