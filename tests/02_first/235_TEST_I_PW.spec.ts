import {test, expect} from '@playwright/test';

test('login Test', async ({page}) =>{
    //page automatically create for you
    //playwright already launch a browser , created a context and opend this page

    await page.goto('https://app.vwo.com/#login');
    await page.fill('#username', 'admin');
    await page.fill('#password', "pass123");
    await page.click('#login-btn');

    await expect(page).toHaveURL('/dashboard')
})

test('another test', async ({page}) =>{
    await page.goto('https://app.vwo.com/#signup');
    await expect(page).toHaveTitle("Sign-Up");
})