import{ Page, test } from '@playwright/test';

test('Mouse hover to quick tools module and select track a package on USPS @smoke', async ({page}) => {
    //navigate to USPS
    await page.goto('https://www.usps.com/');
    //hover to quick tools module
    await page.locator('[class = "nav-first-element menuitem"]').hover();
    //click on track a package link
    await page.locator('text=Track a Package').click();
    //enter a tracking number
    await page.locator('#tracking-input').fill('111111111111');
    await page.waitForTimeout(5000); //wait for a few seconds to see it entered because of fast execution

    await page.waitForTimeout(5000); //wait for few seconds to see the result


    /*
    example of contains using text and non-text

    //click on track button using contain text
    await page.locator('button:has-text("Track")').click();
    //click on track button using contains id
    await page.locator('[id ="track-button"]').click();

    */

});