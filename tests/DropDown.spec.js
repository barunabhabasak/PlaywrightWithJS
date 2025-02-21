import { test, expect } from '@playwright/test';

test('DropDown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator('#country').selectOption({label: 'India'});   // label visible
    //await page.locator('#country').selectOption('India');       //visible text
    //await page.locator('#country').selectOption({value: 'india'});       //value
    //await page.locator('#country').selectOption({index: 3});       //index

    //await page.selectOption('#continents', {label: 'Australia'});

    // Assertions
    // const options= await page.locator('#country option');
    // await expect(options).toHaveCount(10);


    // check numbe of options in dropdown
    // const options = await page.$$('#country option');
    // console.log('Number of options', options.length);
    // await expect(options.length).toBe(10);


    // check presence of value in the dropdown
    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy();


    // check presence of value in the dropdown  -- looping
    const options = await page.$$('#country option');
    let status = false;
    for(const option of options){

        // console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('Japan')){
            status = true;
            break;
        }
        
    }
    await expect(status).toBeTruthy();



    await page.waitForTimeout(3000);

})