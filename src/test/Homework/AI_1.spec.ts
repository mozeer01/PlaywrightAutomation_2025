import{Page, test} from '@playwright/test';

test('Capture studio adress/hours and print it', async ({ page }) => {
    
//create an arraylist that holds 3 different zipcodes
let zipcodes = new Array<string>();
zipcodes.push('11218');
zipcodes.push('11219');
zipcodes.push('11221');

//navigate to weight watchers homepage
await page.goto('https://www.weightwatchers.com/us/');

//loop through each zipcode and enter it on the search field
for(let i=0; i<zipcodes.length; i++){
//click on find a workshop
await page.locator('text="Find a Workshop"').first().click();
//input zipcode on the search field
await page.locator('[id="location-search"]').fill(zipcodes[i]);
//click on the search icon
await page.locator('[id="location-search-cta"]').click();
await page.waitForTimeout(4000); //wait for few seconds to see the result
//scroll down 400 pixles
await page.evaluate(() => { window.scrollBy(0, 400); });
await page.waitForTimeout(4000);
//click the first studio link
await page.locator('[class="container-k2b9Z"]').first().click();
//capture studio adress and print it
let studioAddress = await page.locator('[class="address-FnT8k"]').innerText();
console.log('Studio address for zipcode ' + zipcodes[i] + ' is: ' + studioAddress);
//scroll to studio hours 
await page.evaluate(() => { window.scrollBy(0, 400); });
await page.waitForTimeout(3000);
//capture studio hours and print it
let studioHours = await page.locator('[class="scheduleContainerMobile-ps6Rm"]').innerText();
console.log('Studio hours for zipcode ' + zipcodes[i] + ' are: ' + studioHours);

}//end of for loop

});

