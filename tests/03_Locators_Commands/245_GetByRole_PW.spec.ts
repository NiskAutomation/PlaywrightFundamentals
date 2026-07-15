import { test, expect } from '@playwright/test';

test('locator are lazy, strict and auto wait for element to be ready', async ({page})=>{
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await page.getByRole('link', {name: 'Make Appointment', disabled: false}).click();
});


