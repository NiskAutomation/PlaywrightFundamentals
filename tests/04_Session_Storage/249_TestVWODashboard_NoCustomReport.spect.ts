import { test, expect } from '@playwright/test';

test.use({storageState: './user-session.json'});

test('go to direct to dashboard - no login - using storageState', async ({page})=>{
    await test.step('VWO Step: Open dashboard directly using saved session', async () => {
        await page.goto('https://app.wingify.com/#/dashboard/get-started?accountId=1227004');
    });
});


test('go to direct to settings - no login - using storageState', async ({page})=>{
    await test.step('VWO Step: Open account settings directly using saved session', async () => {
        await page.goto('https://app.wingify.com/#/settings/accounts/general?accountId=1227004');
    });
});