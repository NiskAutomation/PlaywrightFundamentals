import { chromium, Browser, BrowserContext, Page } from "playwright";


async function multipleTab() {
    let browser : Browser = await chromium.launch({headless:false});
    let context: BrowserContext = await browser.newContext();


    //tab
    let page1: Page = await context.newPage();
    await page1.goto('https://app.vwo.com/#login')
    console.log('login page')

    //tab2 same context, share cookies with tab
    let page2: Page = await context.newPage();
    await page2.goto('https://app.vwo.com/#Dashboard');
    console.log('Dashboard Page')

}

multipleTab();