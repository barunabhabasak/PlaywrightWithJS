import { test, expect } from '@playwright/test';

test('Page screenshot', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    await page.click('#login2');
    await page.fill('#loginusername','barunbha');
    await page.fill('#loginpassword','Barun@123');
    await page.click("button[onclick='logIn()']");

    expect(await page.locator('#logout2')).toBeVisible();

    await page.click('#logout2');
})