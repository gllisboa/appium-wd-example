import wd from "wd";



const browserStackCaps = {
            // Set your BrowserStack access credentials
            'browserstack.user' : 'guilhermeluzlisb1',
            'browserstack.key' : 'cJaE9sqn9xrYq9d6yZBc',
}

 const IOSCaps = {

        ...browserStackCaps,

          // Set URL of the application under test
        'app' : 'bs://f9a958b03f510aee323280577476aa70390bc4ba',

        // Specify device and os_version for testing
        'device' : 'iPhone XS',
        'os_version' : '12',

        // Set other BrowserStack capabilities
        'project' : 'First NodeJS project',
        'build' : 'Node iOS',
        'name': 'first_test'

}

const appiumDriver  = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");




export { IOSCaps, appiumDriver}

