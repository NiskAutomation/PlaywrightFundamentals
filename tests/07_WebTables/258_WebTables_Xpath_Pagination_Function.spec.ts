import { test, expect, Page, Locator } from '@playwright/test';

async function findRowByName(page: Page, name: string): Promise<Locator> {
     while (true) {
          const row = page.locator('#employees-table tbody tr').filter({ hasText: name });
          if (await row.count()) {
               return row;
          }
          const nextBtn = page.getByTestId('next-page');
          if (await nextBtn.isDisabled()) throw new Error('Row not found and no more pages to navigate.');
          await nextBtn.click();
     }

}

test('Verify Element by filter', async ({ page }) => {
     await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
     let name: string = 'Lukas Schneider';
     const row = await findRowByName(page, name);
     const email = await row.locator('td[data-col="email"]').innerText();
     const country = await row.locator('td[data-col="country"]').innerText();
     console.log(`Email: ${email}, Country: ${country}`);

});

