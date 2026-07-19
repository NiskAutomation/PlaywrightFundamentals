import { test, expect } from '@playwright/test';


test.describe('WebTables Dynamic Xpath', () => {


    test.skip('Verify WebTables Dynamic Xpath structure extraction', async ({ page }) => {
        await page.goto('https://awesomeqa.com/webtable1.html');
        const rows = page.locator('table[summary="Sample Table"] tbody tr');
        const totalRows = await rows.count();
        console.log(`Total Rows: ${totalRows}`);

        for (let i = 0; i <= totalRows; i++) {
            const rowsData = await rows.nth(i).locator('td').allInnerTexts();
            console.log(`Row ${i + 1}: `, rowsData);

        }
    });

    test('Verfy WebTables Dynamic Xpath delete terminated employee', async ({ page }) => {
        await page.goto('https://awesomeqa.com/hr/web/index.php/auth/login');
        await page.getByPlaceholder('Username').fill('admin');
        await page.getByPlaceholder('Password').fill('Awesomeqa@4321');
        await page.getByRole('button', { name: 'Login', exact: false }).click();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.waitForTimeout(2000);
        const employeeRow = page.locator('div.oxd-table-body div.oxd-table-row--clickable');
        const totalRowsEmployee = await employeeRow.count();
        console.log(`Total Employees: ${totalRowsEmployee}`);

        for (let i = 0; i < totalRowsEmployee; i++) {
            const values = await employeeRow.nth(i).locator('div.oxd-table-cell div').allInnerTexts();

            if (values.includes('Terminated')) {
                const deleteIcon = employeeRow.nth(i).locator(
                    'xpath=.//div[normalize-space()="Terminated"]/parent::div/following-sibling::div//i[contains(@class,"bi-trash")]');
                await deleteIcon.click();
            }
        }

        await page.pause();
    });
});