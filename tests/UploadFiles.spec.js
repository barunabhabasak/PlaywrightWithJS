import {test,expect} from '@playwright/test';

test('UploadFiles', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.waitForSelector('#singleFileInput')

    // upload single file

    await page.locator('#singleFileInput').setInputFiles('tests/Barunabha (1).pdf');

    await page.locator("form[id='singleFileForm'] button[type='submit']").click();

    await page.waitForTimeout(3000);
})

test.only('Upload Multiple Files', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');

    await page.locator('#multipleFilesInput').setInputFiles(['tests/Barunabha (1).pdf','tests/Boat 450.pdf']);
    
    await page.locator("form[id='multipleFilesForm'] button[type='submit']").click();

    await page.waitForTimeout(3000);

})



