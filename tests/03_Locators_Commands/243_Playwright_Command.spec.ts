import { test, expect } from '@playwright/test';

test('goto with different waitUntil options', async ({page})=>{
    await page.goto('https://app.com/page1', {waitUntil:'commit'});
    console.log('Commit : server responded');

    //wait for HTML to be parsed and DOMContentLoaded event to be fired
    await page.goto('https://app.com/page2', {waitUntil:'domcontentloaded'});
    console.log('domcontentloaded : DOMContentLoaded event is fired');

    //wait for load event to be fired
    await page.goto('https://app.com/page3', {waitUntil:'load'});
    console.log('load : load event is fired');
    
    //wait for no network connections for at least 500 ms
    await page.goto('https://app.com/page4', {waitUntil:'networkidle'});
    console.log('networkidle : no network connections for at least 500 ms');

});