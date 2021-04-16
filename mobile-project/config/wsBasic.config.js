wd = require('wd');



const browserStackCaps = {
            // Set your BrowserStack access credentials
            'browserstack.user' : 'guilisboa1',
            'browserstack.key' : 'G6BpGGsqvkqRN47B6VNk',
            'browserstack.debug' : true,
            'project' : 'POC - BDD - JavaScript',
}

 let IOSCaps = function (device = { model: "", system: "", version: ""}) { return {

        ...browserStackCaps,

          // Set URL of the application under test
        'app' : 'bs://e0e69ad47906717d5a93dbee007244da7157e417',

        // Specify device and os_version for testing
        'device' : device.model,
        'os_version' : device.os_version,

        // Set other BrowserStack capabilities

        'build' : 'Node iOS',
        'name': 'first_test'
 }

}



const appiumDriver  = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");



module.exports ={ IOSCaps, appiumDriver}

