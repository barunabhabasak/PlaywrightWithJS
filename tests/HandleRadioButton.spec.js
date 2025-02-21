import {test, expect} from '@playwright/test';

test('Handle Input Box', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator("#male").check();
    await page.check("#male");

    await expect(await page.locator("#male")).toBeChecked();
    await expect(await page.locator("#male").isChecked()).toBeTruthy();

    await expect(await page.locator("#female").isChecked()).toBeFalsy();

    


    await page.waitForTimeout(3000);

})