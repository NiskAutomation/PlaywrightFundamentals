//https://app.vwo.com/#/login

import {test, expect} from '@playwright/test';

test ('TC#1-Verify the Login Page gives you an error with lazy, strict and autowait concept', async ({page})=>{
    await page.goto('https://app.vwo.com/#/login');
    //default locator id, name, class, tagname (custom locator via css selector, xpath)
    //id = #id, name = [name='value'], class = .classname, tagname = tagname
    //<input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID" 
    // data-gtm-form-interact-field-id="0">
    let usernameField = page.locator('#login-username');
    let passwordField = page.locator('#login-password');
    let loginButton = page.locator('#js-login-btn');

    //now playwright finds the element act (auto wait) and then perform the action (lazy)
    await usernameField.fill('admin@admin.com');
    await passwordField.fill('admin');
    await loginButton.click();
    console.log('all the actions are performed ✅');

    let errorMessage = page.locator('#js-notification-box-msg');
    await expect(errorMessage).toContainText('Your email, password, IP address or location did not match');


   
});