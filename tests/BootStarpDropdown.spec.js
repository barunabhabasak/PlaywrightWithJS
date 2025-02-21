import { test, expect } from '@playwright/test';

test('DropDown', async ({ page }) =>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator('.multiselect').click();

    // const options = await page.locator('ul>li label input');
    // await expect(options).toHaveCount(11);

    // const options = await page.$$('ul>li label input');
    // await expect(options.length).toBe(11);


    // select multiple options
    const options = await page.$$('ul>li label')
    for(let option of options){

       const value = await option.textContent();
       console.log(value);
       
       if(value.includes('C#') || value.includes('Java')){
        // await option.click();
        await option.check();
       }


       // deselect the options
       if(value.includes('HTML') || value.includes('CSS')){
        await option.uncheck();
       }


    }


    await page.waitForTimeout(2000);


})