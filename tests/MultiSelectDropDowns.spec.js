import { test, expect } from '@playwright/test';

test('DropDown', async ({ page }) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption('#colors',['Red','Blue']);


    // assertions
    const options = await page.$$('#colors option'); // $$ gives array
    // console.log('Number of options', options.length;
    await expect(options.length).toBe(7);

    
    // check the presence of the  value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();

    await expect(content.includes('Black')).toBeFalsy();


    await page.waitForTimeout(2000);
});