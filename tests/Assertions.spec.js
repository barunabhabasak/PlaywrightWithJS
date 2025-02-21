import {test,expect} from '@playwright/test'

test('Assertions',async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logo = await page.locator('.header-logo');
    await expect(logo).toBeVisible();

    await expect( await page.locator('#small-searchterms')).toBeEnabled();

    // Radio button
    const maleButton = await page.locator('#gender-male');
    await maleButton.click();
    await expect(maleButton).toBeChecked();


    //checkbox
    const newsletter = await page.locator('#Newsletter');
    await expect(newsletter).toBeChecked();

    // toHaveAttribute
    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type','submit');


    // toHaveText
    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    // toContainText
    await expect(await page.locator('.page-title h1')).toContainText('ister');


    // toHaveCount
    await expect(await page.locator('#FirstName')).toHaveCount(1);

});