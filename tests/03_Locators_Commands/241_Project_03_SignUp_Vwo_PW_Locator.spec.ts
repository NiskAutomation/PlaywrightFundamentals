import { test, expect } from '@playwright/test';

test('Verify the Sign Up page has an error witj the incorrect email ID', async ({page})=>{
    await page.goto('https://vwo.com/free-trial/');
    let inputBox = page.locator('#page-v1-step1-email');
    await inputBox.fill('abcd');
    await page.locator('#page-free-trial-step1-cu-gdpr-consent-checkbox').click();
    await page.locator('//button[@data-qa="page-su-submit"]').first().click();
    let errorMessage = await page.locator('//div[contains(@class,"invalid-reason")]').first().textContent();
    expect(errorMessage).toContain('The email address you entered is incorrect.');
})








