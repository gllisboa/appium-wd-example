wd = require('wd');

const MODEL = process.env.MODEL
const VERSION = process.env.VERSION
let secrets = require('./files/secrets.json')

const browserStackCaps = {
            // Set your BrowserStack access credentials
            'browserstack.user' : secrets.browserstackuser,
            'browserstack.key'  : secrets.browserstackkey,
            'browserstack.debug' : true,
            'project' : 'POC - BDD - JavaScript',
}

 let IOSCaps = function () { return {

        ...browserStackCaps,

          // Set URL of the application under test
        'app' : secrets.app_url_ios,

        // Specify device and os_version for testing
        'device' : MODEL,
        'os_version' : VERSION,

        // Set other BrowserStack capabilities

        'build' : 'Mobile - IOS',
        'name': 'first_test'
 }

}



let AndroidCaps = function () { return {

  ...browserStackCaps,

    // Set URL of the application under test
    "app": secrets.app_url_android,

  // Specify device and os_version for testing
  'device' : MODEL,
  'platformName': 'Android',
  'platformVersion': VERSION,

  // Set other BrowserStack capabilities
  'build' : 'Mobile - Android',
  'name': 'first_test'
}

}

const appiumDriver  = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");



module.exports ={ IOSCaps, AndroidCaps, appiumDriver}

