import { test, expect } from '@playwright/test';

test('Verify Element by filter', async ({ page }) => {
     await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
     const forgottenPasswordLink =  await page.locator('a.list-group-item').filter({hasText: /^Forgotten/});
     await forgottenPasswordLink.click();


     const accountLinks = page.locator('a.list-group-item');
     await expect(accountLinks).toHaveCount(13);


     //privacy policy link or footer link
     const privacyPolicyLink =  await page.locator('footer a').filter({hasText: 'Privacy Policy'});
     await expect(privacyPolicyLink).toHaveAttribute('href', '#privacy-policy');
     await page.pause();

});