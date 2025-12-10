import { Page, test } from '@playwright/test';
import { getText, type } from '../Reusable_Actions';

let page: Page; //initialize page variable for browser since we are callling multiple tests

test.beforeAll(async ({browser}) => {
    //create a new page instance
    page = await browser.newPage();
})

test('search for playwright on bing' , async ({}) => {
    //navigate to bing
    await page.goto('https://www.bing.com/');
    await page.waitForTimeout(3000); //wait for few seconds
    await type(page, '[name="q"]', 'Playwright' , 'search Box');
    await page.keyboard.press('Enter'); //hitting enter key after typing
});

test('capture the search number on bing for playwright keyword' , async ({}) => {
let searchResults = await getText(page, '[class="sb_count"]', 'search results text');
console.log('Search result is: ', searchResults);
let searchNumber = searchResults.split(' ');
console.log('Search number is: ', searchNumber[1]);
});