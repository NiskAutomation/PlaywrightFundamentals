import { test, expect } from '@playwright/test';

test('locator are lazy, strict and auto wait for element to be ready', async ({page})=>{
    await page.goto('https://awesomeqa.com/practice.html');
    await page.locator('[name="firstname"]').pressSequentially("Nishikant Pradhan", {delay: 100});

    await page.waitForTimeout(5000);
    await page.goto('https://app.vwo.com/login');
    await page.goBack();
    await page.goForward();
    await page.reload();
    await page.waitForTimeout(5000);

});