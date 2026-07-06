import { expect, test } from "playwright/test";

test('Verify our first TC', async ({page})=> {
    await page.goto('https://app.vwo.com');
    expect(page).toHaveTitle('Login - Wingify')
    const logo_img = page.locator('#vow-login-logo')
    //id = #
    await expect(logo_img).toBeVisible();
}); 