import { test, expect } from '@playwright/test';

test('Verify the Sign Up page has an error witj the incorrect email ID', async ({page})=>{
    await page.goto('https://vwo.com/free-trial/');
    await page.getByRole('textbox', {name: 'email'}).fill('abcd');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', {name: 'Create a Free Trial Account'}).click();
    let errorMessage = await page.locator('xpath=//div[contains(@class,"invalid-reason")]').first().textContent();
    expect(errorMessage).toContain('The email address you entered is incorrect.');
})








