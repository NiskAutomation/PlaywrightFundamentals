import { test, expect } from '@playwright/test';

test('Verify WebTables Dynamic Xpath', async ({ page }) => {
    //first of all go the link of the webtable
    //find the correct halen banquet and then use loop to find the following details of the halen banquet
    ////table[@id='customers']/tbody/tr[5]/td[2]
   await page.goto('https://awesomeqa.com/webtable.html');
   const firstPart = "//table[@id='customers']/tbody/tr[";
   const secondPart = "]/td[";
   const thirdPart = "]";

   const totalRows = await page.locator("//table[@id='customers']/tbody/tr").count();
   const totalColumns = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

   for(let i =2; i<=totalRows; i++){
    for(let j = 1; j<=totalColumns; j++){
        const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`
        console.log(dynamicXpath);
        const cellData = await page.locator(dynamicXpath).innerText();
        console.log(cellData);
        if(cellData.includes('Halen Bannett')){
            const countryPath = `${dynamicXpath}/following-sibling::td`;
            const countryText = await page.locator(countryPath).innerText();
            console.log(`Country of Halen Banquet is: ${countryText}`);
        
        }
    }

   }
   await page.pause();


});