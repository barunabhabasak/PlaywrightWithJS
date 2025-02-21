import {test,expect} from '@playwright/test';

test('Keyboard', async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    await page.fill('textarea[name="text1"]','Hello');

    //ctrl + A
    await page.keyboard.press('Control+A');

    // ctrl + C
    await page.keyboard.press('Control+C')

    // Tab
    // await page.keyboard.press('Tab');
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //ctrl +V
    await page.keyboard.press('Control+V');



    await page.waitForTimeout(3000);

})