import { test, expect } from '@playwright/test';

test('Auto Suggesion', async ({ page }) =>{

    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('Kolkata');

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]//div/text[1]");

    const fromCityOpts = await page.$$("//li[contains(@class,'sc-iwsKbI')]//div/text[1]");

    for(let opt of fromCityOpts){
        const value = await opt.textContent();
        // console.log(value);
        if(value.includes('Karunamoyee')){
            await opt.click();
            break
        }
        
    }

    await page.waitForTimeout(2000);

})