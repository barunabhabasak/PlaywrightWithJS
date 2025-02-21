import {test, expect} from '@playwright/test';

test('Handle Input Box', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
   

    await page.fill("//input[@id='name']", 'Barun');

    await page.waitForTimeout(3000);




})