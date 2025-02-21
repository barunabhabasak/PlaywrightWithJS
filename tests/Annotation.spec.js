import { test, expect } from '@playwright/test';


// failed test
test('test1', async ({ page }) => {

    test.fail();
    console.log('This is a failed test');
    await expect(56).toBe(54);

})


test('test2', async ({ page,browserName }) => {
    if(browserName === 'webkit'){
        test.fail();
    }
    console.log('This is a failed test');
    // await expect(56).toBe(55);

})


// slow test
test('test3', async ({ page }) => {

    test.slow();
    await page.goto('https://demoblaze.com/index.html');

})