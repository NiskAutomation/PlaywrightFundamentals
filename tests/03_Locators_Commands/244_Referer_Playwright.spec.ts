import { test, expect } from '@playwright/test';

test('simple go to -user load by default', async ({page})=>{
    await page.goto('https://app.com/page1');
    let title = await page.title();
    console.log('Page title is : '+title);

    await expect(page).toHaveURL('https://app.com/page1');
    console.log('Url is verified successfully');
});

test('navigate with custom referer', async ({page})=>{
    await page.goto('https://app.com/page1', {
        referer: 'https://app.com/page2'
    });
    console.log('Page loaded with custom referer');
    console.log('URL', page.url());
});