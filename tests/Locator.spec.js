import {test,expect} from '@playwright/test'

test('Locator', async({page}) => {

    await page.goto('https://demoblaze.com/');

    // click on login button
    // await page.locator('id=login2').click();
    await page.click('id=login2');

    //provide username -CCS
    // await page.locator('#loginusername').fill('barunbha');
    // await page.locator('#loginusername').type('barunbha');
    await page.fill('#loginusername','barunbha');


    // provide password - CSS
    await page.fill("//input[@id='loginpassword']",'Barun@123');

    // click on login button - xpath
    await page.click("//button[normalize-space()='Log in']");


    // verify logout link present - xpath
    const logoutLink = await page.locator("//a[@id='logout2']");

    await expect(logoutLink).toBeVisible();

    await page.close();

})