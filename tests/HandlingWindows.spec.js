import {test,expect,chromium} from '@playwright/test'

test('Handling pages/Windows', async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log('Number of pages: ',allPages.length);


    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveURL('https://www.orangehrm.com/');

    
})



test.only('Handling multiple pages/Windows', async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const pagePromise = context.waitForEvent('page')
    await page1.click("a[href='http://www.orangehrm.com']");

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM')


    await page1.waitForTimeout(3000);

    await browser.close

    
})

