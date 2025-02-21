import { test, expect } from '@playwright/test';

test('Alerts', async ({ page }) =>{

    await page.goto('https://ui.vision/demo/webtest/frames/')


    // total frames
    const allFrames = page.frames();
    console.log('Total Frames', allFrames.length);
    // console.log(allFrames);
    

    // using name ot url
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    frame1.fill("input[name='mytext1' i]",'Barunabha')


    // using framelocator
    const ipBox = page.frameLocator("frame[src='frame_2.html']").locator("input[name='mytext2']");
    ipBox.fill('Barunabha');

    await page.waitForTimeout(2000);
    

})