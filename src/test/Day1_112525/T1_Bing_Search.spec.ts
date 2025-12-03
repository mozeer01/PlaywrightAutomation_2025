import { Page, test } from '@playwright/test';

//initialize page variable for browser
let page: Page
let value: string; //just an example
let integer: number; //just an example

test.beforeAll(async ({browser}) => {
//create a new page instance
page = await browser.newPage();
})

test('Seaarch for a keyword on bing @smoke', async () => {
    //navigate to bing
    await page.goto('https://www.bing.com/');
    //type a keyword in the search box
    await page.locator('[name = "q"]').fill('Playwright Testing');
    await page.waitForTimeout(2000) //wait for few seconds for the next step
    //click on the search icon
    await page.keyboard.press('Enter')
})//end of test 1

test('Capture search number', async () => {
    //capture search results text
    let searchResults = await page.locator('[class = "sb_count"]').textContent(); //you can also use .innerText()
    //for concatenation purpose, you either can use comma , or +
    console.log('Search Results: ', searchResults);
    //extract number from text
    let resultsArray = searchResults.split(' ');
    console.log('Results Array: ', resultsArray[1]);
})//end of test 2
