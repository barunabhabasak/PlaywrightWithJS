import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://demoblaze.com/');
  
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').fill('barunbha');

  await page.locator('#loginpassword').fill('Barun@123');

  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByRole('link', { name: 'Log out' }).click();
});