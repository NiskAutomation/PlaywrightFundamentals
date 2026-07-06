import { chromium , Browser, BrowserContext, Page } from "playwright";

async function run() {
    //LEVEL 1 - Launch Browser - haviest operation, do it once
    let browser: Browser = await chromium.launch({headless:false});
    console.log('create a browser :',browser)

    //LEVEL 2 - Create context - fresh session, isolated cookies
    let context : BrowserContext = await browser.newContext()
    console.log('create context',context);


    let context1 : BrowserContext = await browser.newContext()
    console.log('create context', context1);

    //LEVEL:3: open page - a tab inside the context
    let page :Page = await context.newPage();
    console.log('page created', page);
   

    await page.goto('https://app.vwo.com');
    console.log("Title", await page.title());


    //CleanUp - reverse order
    await page.close();
    await context1.close();
    await context.close();
    await browser.close();


}

run()