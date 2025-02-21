import {test,expect} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { HomePage } from '../pages/HomePage';

// Login
test('test', async({page}) =>{

    // Login
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(page,'barunbha','Barun@123');


    // Add to  cart
    const home = new HomePage(page);
    await home.addToCart('Nexus 6'); 
    // await home.goToCart(); 


    await page.waitForTimeout(4000);
})