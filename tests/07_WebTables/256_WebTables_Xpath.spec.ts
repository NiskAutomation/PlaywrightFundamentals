import { test, expect } from '@playwright/test';

test('Verify Element by filter', async ({ page }) => {
     await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
     // find the person email and country
         const row = page.locator('#employees-table tbody tr').filter({hasText: 'Priya Kapoor'});
         const email = await row.locator('td[data-col="email"]').innerText();
         const country = await row.locator('td[data-col="country"]').innerText();

         console.log(`Email: ${email}, Country: ${country}`);
   
});