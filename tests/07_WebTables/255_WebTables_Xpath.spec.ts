import { test, expect } from '@playwright/test';

test('Verify Element by filter', async ({ page }) => {
     await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
     await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").check();
    

     //css sudo classes
     await page.locator('tr:has(td:text("Rohan.Mehta"))').locator('td').first().click();

     //eg. :text('Sana.Qureshi')
     //:text-is('Sana.Qureshi')
     //:text-matches('Rohan\\.Mehra')

});