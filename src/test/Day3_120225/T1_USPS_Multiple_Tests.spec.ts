import{ Page, test } from '@playwright/test';

test('Mouse hover to quick tools module and click on schedule a pickup on USPS', async ({ page }) => {
    //navigate to USPS
    await page.goto('https://www.usps.com/');
    //hover to quick tools module
    await page.locator('[class="nav-first-element menuitem"]').hover();
    await page.waitForTimeout(3000); //wait for few seconds
    //click on schedule a pickup link
    await page.locator('[alt="Schedule a Pickup Icon"]').click();
});