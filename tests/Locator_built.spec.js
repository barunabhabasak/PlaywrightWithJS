import {test,expect} from '@playwright/test'

test('Biult-inLocator', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //getByAltText('')
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();


    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button',{'type' : 'submit'}).click();

    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(name)).toBeVisible();


    await page.close();


})
