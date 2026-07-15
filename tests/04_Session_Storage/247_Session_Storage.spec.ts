

async function saveSession(){
    const { chromium } = await import('playwright');
    let browser = await chromium.launch({headless: false});
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://app.wingify.com/#/login');
    await page.waitForTimeout(5000);

    await page.fill('#login-username', 'opg73@singleuseemail.site');
    await page.fill('#login-password', 'Wingify@4321');
    await page.waitForTimeout(5000);

    await page.click('#js-login-btn');

    await page.waitForURL(/#\/(dashboard|home)/, {timeout: 30000});
    await page.waitForTimeout(5000);

    await context.storageState({path: './user-session.json'});
    console.log('Session storage saved successfully!');
    
   await page.waitForTimeout(15000);
   await browser.close();
}

saveSession();