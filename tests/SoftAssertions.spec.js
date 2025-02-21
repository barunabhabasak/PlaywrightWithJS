import {test,expect} from '@playwright/test'

test('Soft Assertions', async({page}) => {

    await page.goto('https://demo.nopcommerce.com/register');

    // Hard assertion
    // await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // const logo = await page.locator('.header-log');
    // await expect(logo).toBeVisible();

    // Soft assertion

    await expect.soft(page).toHaveTitle('nopCmmerce demo store. Register');

    const logo = await page.locator('.header-logo');
    await expect.soft(logo).toBeVisible();


    


})