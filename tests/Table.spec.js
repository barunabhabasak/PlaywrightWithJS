import { test, expect } from '@playwright/test';

test('Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    // get the total columns
    const columns = await table.locator('thead tr th')
    console.log('Total Columns:', await columns.count());
    await expect(await columns.count()).toBe(4);

    // get the total rows
    const rows = await table.locator('tbody tr');
    console.log('Total Rows:', await rows.count());
    await expect(await rows.count()).toBe(5);


    // select checkbox for Tablet
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet'
    })

    await matchedRow.locator('td input').check();


    // select multiple checkboxes -- using for loop
    /*const products = ['Laptop', 'Tablet', 'Wireless Earbuds'];

    for (let product of products) {
        const matchedRow = rows.filter({
            has: page.locator('td'),
            hasText: product
        })

        await matchedRow.locator('td input').check();
    }*/



    // select multiple checkboxes -- using async function
    /*await selectProduct(rows, page, 'Laptop');
    await selectProduct(rows, page, 'Tablet');
    await selectProduct(rows, page, 'Wireless Earbuds');*/

    // print all the product details uisng loop
    for(let i=0;i<await rows.count();i++){

        const row = rows.nth(i)
        const tds = row.locator('td')
        for(let j=0;j<await columns.count()-1;j++){
            console.log(await tds.nth(j).textContent());
            
        }
        console.log('-----------------------------');
    }


    // print all the product details  multiple pages
    const pages = await page.locator('#pagination li a');
    console.log('Total Pages:',await pages.count());

    for(let p=0;p<await pages.count();p++){

        if(p>0){
            await pages.nth(p).click();
        }
        for(let i=0;i<await rows.count();i++){

            const row = rows.nth(i)
            const tds = row.locator('td')
            for(let j=0;j<await columns.count()-1;j++){
                console.log(await tds.nth(j).textContent());
                
            }
            console.log('-----------------------------');
        }
        await page.waitForTimeout(2000);
    }
    

    await page.waitForTimeout(2000);


})


async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('td input').check();

}











