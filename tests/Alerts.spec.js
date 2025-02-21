import { test, expect } from '@playwright/test';

test.skip('Alerts', async ({ page }) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling alert handling
    page.on('dialog',async dialog =>{

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');

        dialog.accept();
    })

    await page.click("(//button[normalize-space()='Simple Alert'])[1]");


    await page.waitForTimeout(2000);


    
})



// confirmation alert

test.skip('Confirmation', async ({ page }) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling alert handling
    page.on('dialog',async dialog =>{

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');

        // dialog.accept();
        dialog.dismiss();
    })

    await page.click("(//button[normalize-space()='Confirmation Alert'])[1]");

    // await expect(await page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    await expect(await page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!');


    await page.waitForTimeout(3000);


    
})



// prompt alert

test('Promt Alerts', async ({ page }) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //enabling alert handling
    page.on('dialog',async dialog =>{

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');

        dialog.accept('Barunabha');
    })

    await page.click("(//button[normalize-space()='Prompt Alert'])[1]");

    await expect(await page.locator("//p[@id='demo']")).toHaveText('Hello Barunabha! How are you today?');


    await page.waitForTimeout(2000);


    
})
