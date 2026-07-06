import {test, expect} from '@playwright/test';

test('tow user intract', async ({browser}) =>{
    let adimContext = await browser.newContext();
    let adminPage = await adimContext.newPage();

    let guestContext = await browser.newContext();
    let guestPage = await guestContext.newPage();

    await adminPage.goto('https://app.vwo.com/#login');
    await guestPage.goto('https://app.vwo.com/#dashboard/home');

    console.log("admin URL", adminPage.url());
    console.log("guest URL", guestPage.url());

    await adimContext.close();
    await guestContext.close();
})