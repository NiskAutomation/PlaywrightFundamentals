import {expect, test} from '@playwright/test';

test('Verify the Title', async ({page}) => {
    await page.goto('https://app.vwo.com');
    expect(page).toHaveTitle('Login - Wingify')
    //page = fixture (injected by playwright)
});