wd = require('wd');



const browserStackCaps = {
            // Set your BrowserStack access credentials
            'browserstack.user' : 'ctlglisboa_qW9isL',
            'browserstack.key' : 'GSxUBJsFqF5HyWR2AYez',
            'browserstack.debug' : true,
            'project' : 'POC - BDD - JavaScript - CHATBOT - RASA',
}

 let IOSCaps = function (device = { model: "", system: "", version: ""}) { return {

        ...browserStackCaps,

          // Set URL of the application under test
        'app' : 'bs://e7fc56bd797cc03dcb07550008c86f223c8c0939',

        // Specify device and os_version for testing
        'device' : device.model,
        'os_version' : device.version,

        // Set other BrowserStack capabilities

        'build' : 'ChatBot-Mobile - IOS',
        'name': 'first_test'
 }

}



let AndroidCaps = function (device = { model: "", system: "", version: ""}) { return {

  ...browserStackCaps,

    // Set URL of the application under test
  'app' : 'bs://44ae821fa5e690b6fc427409594f0ea522b5ea0f',

  // Specify device and os_version for testing
  'device' : device.model,
  'platformName': 'Android',
  'platformVersion': device.version,

  // Set other BrowserStack capabilities
  'build' : 'ChatBot-Mobile - Android',
  'name': 'first_test'
}

}

const appiumDriver  = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");



module.exports ={ IOSCaps, AndroidCaps, appiumDriver}

