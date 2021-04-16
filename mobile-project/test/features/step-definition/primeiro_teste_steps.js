const {Given, When, Then, After}  = require('cucumber');
const  assert = require('assert');

const AppiumWebDriver = require('../../../config/appiumWebDriver.config');

const InitialPageIOS = require('../../../IOS/pages/initial.page')

let appiumWebDriver = new AppiumWebDriver();
let driver = null;
let initialPage = null;



Given(`Esteja na tela inicial com o {string} com o {string} na {string}`,{timeout: 60 * 1000}, async function(string,string2,string3){

  
    let device =  { model: string, system: string2, version: string3}


    driver = await appiumWebDriver.init(device)

    switch(device.system.toLowerCase()) {
        case 'ios':
            initialPage = new InitialPageIOS();
            break;
        default:
            break;
    }

    console.log('Driver apos init')
    console.dir(driver)



    return  await 'pending'



});


When('abro o chat', async function(){

    let teste = "teste"

    console.log("Entrou no When")

});

Then("O sistema carrega a pagina inicial corretamente", async function(){

});

After(async function(){

    console.log('Quit')
    // await driver.quit();
});

