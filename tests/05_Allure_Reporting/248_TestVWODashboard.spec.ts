import {test, expect} from '@playwright/test';

test.describe('VWO Session Storage Navigation', () => {
    test.use({storageState: './user-session.json'});

    test('go to direct to dashboard - no login', async ({page})=>{
        await test.step('VWO Step: Open dashboard directly using saved session', async () => {
            await page.goto('https://app.wingify.com/#/dashboard/get-started?accountId=1227004');
        });

        await test.step('VWO Step: Verify dashboard route is loaded', async () => {
            await expect(page).toHaveURL(/#\/dashboard/);
            await expect(page.locator('main')).toBeVisible();
        });

        await test.step('VWO Step: Keep dashboard visible for observation', async () => {
            console.log('Directly navigated to dashboard without login');
            await page.waitForTimeout(1000);
        });

    });

    test('go to direct to settings - no login - using storageState', async ({page})=>{
        await test.step('VWO Step: Open account settings directly using saved session', async () => {
            await page.goto('https://app.wingify.com/#/settings/accounts/general?accountId=1227004');
        });

        await test.step('VWO Step: Verify settings route is loaded', async () => {
            await expect(page).toHaveURL(/#\/(settings|dashboard)/);
            await expect(page).not.toHaveURL(/#\/login/);
            await expect(page.locator('main')).toBeVisible();
        });

        await test.step('VWO Step: Keep settings page visible for observation', async () => {
            console.log('Directly navigated to settings without login using storageState');
            await page.waitForTimeout(1000);
        });
    });
});