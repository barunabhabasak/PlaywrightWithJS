import {test,expect} from '@playwright/test';

test('Login', async({page})=>{

    //login
    await page.goto('https://demoblaze.com/index.html');

    await page.click('#login2');
    await page.fill('#loginusername','barunbha');
    await page.fill('#loginpassword','Barun@123');
    await page.click("button[onclick='logIn()']");

    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9);

    await page.click('#logout2');

})


// Add products to cart
test('Add products to cart', async({page})=>{

    //login
    await page.goto('https://demoblaze.com/index.html');

    await page.click('#login2');
    await page.fill('#loginusername','barunbha');
    await page.fill('#loginpassword','Barun@123');
    await page.click("button[onclick='logIn()']");

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    //logout
    await page.click('#logout2');

})

