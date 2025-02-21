import {test,expect} from '@playwright/test'

test('Locating Multiple Elements', async({page}) => {

    await page.goto('https://demoblaze.com/index.html');

    /*const links = await page.$$('a');

    for(let link of links){
        const text = await link.textContent();
        console.log(text);
        
    }*/

    // await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const names = await page.$$("//div[@id='tbodyid']//h4/a")

    for(const name of names){
        const pName = await name.textContent();
        console.log(pName);
        
    }


})