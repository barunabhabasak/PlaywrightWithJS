import {test, expect} from '@playwright/test';

test('Handle Input Box', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');


    // single checkbox
    await page.locator("//input[@id='monday']").check();

    await expect(await page.locator("//input[@id='monday']")).toBeChecked();
    await expect(await page.locator("//input[@id='monday']").isChecked()).toBeTruthy();
    

    await expect(await page.locator("//input[@id='tuesday']").isChecked()).toBeFalsy();


    // Multiple checkboxes
    const checkboxesLocator = [
        "//input[@id='monday']",
        "//input[@id='wednesday']",
        "//input[@id='saturday']"
    ]

    for(const checkbox of checkboxesLocator){   // select all the checkboxes
        await page.locator(checkbox).check();
    }

    await page.waitForTimeout(3000);
    
    for(const checkbox of checkboxesLocator){   // uncheck multiple checkboxes whcih are checked

        if(await page.locator(checkbox).isChecked()){
            await page.locator(checkbox).uncheck();
        }
        
    }


    await page.waitForTimeout(3000);

})