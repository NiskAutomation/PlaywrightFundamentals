import {test, expect} from '@playwright/test';

test('Verify the First Test', async ({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
});


