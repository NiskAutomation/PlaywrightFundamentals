import {expect, test} from '@playwright/test';

test('context with option', async ({browser})=>{
    const context = await browser.newContext({
        viewport : {width:1920, height:1080},
        locale:'fr-FR',
        timezoneId:'Europe/paris',
        geolocation:{latitude:48.8566, longitude:2.3522},
        permissions:['geolocation']
    });
    const page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');
    await context.close();
});

test('mobile context', async ({browser})=>{
    const iphone ={
        viewport:{width:375, height:667},
        userAgent:'Mozailla/5.0 (iphone; CPU iphone OS 14_0 like mac OS X)',
        deviceScaleFactor : 2,
        isMobile:true,
        hasTouch:true,
    };
    const context = await browser.newContext(iphone);
    const page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');
    await context.close();
})