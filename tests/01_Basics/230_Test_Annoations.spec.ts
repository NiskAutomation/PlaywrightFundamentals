import {expect, test} from '@playwright/test';

test('has Title', async ({page}) => {
    await page.goto('https://playwright.dev/');
    expect(page).toHaveTitle(/Playwright/);
    //page = fixture (injected by playwright)
});


//skip test
test.skip('skipped test', async ({page}) => {
    //this test is skipped
})

//only run this test
test.only('focused the test', async ({page}) =>{
    //only this test run
});

//mark as failed
test.fail('expected to fail', async ({page}) =>{
    //Test is expected to fail
});

//slow test(3x timeout)
// test.slow('slow run', async ({page}) =>{
//     //has extended timeout
// });

test('conditional', async ({page, browserName}) =>{
    test.skip(browserName === 'firefox', 'Not supported in Firefox')
});
