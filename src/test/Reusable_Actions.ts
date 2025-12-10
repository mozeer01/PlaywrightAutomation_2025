import { Page } from "@playwright/test";

//export means it's reusable outside of this file

//method to click on any unique element
export async function click(page: Page, locator: string, elementName: string) {
    console.log("Clicking on " + elementName);
    await page.locator(locator).click();
}//end of click method

//method to click on any element by index
export async function clickByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log("Clicking on element " + elementName);
    await page.locator(locator).nth(index).click();
}//end of click by index method

//method to type on any unique element
export async function type(page: Page, locator: string, userValue: string, elementName: string) {
    console.log("Typing on " + elementName);
    let element = page.locator(locator);
    await element.fill('');
    await element.fill(userValue);
}//end of type method

//method to type on any element by index
export async function typeByIndex(page: Page, locator: string, index: number, userValue: string, elementName: string) {
    console.log("Typing on " + elementName);
    let element = page.locator(locator).nth(index);
    await element.fill('');
    await element.fill(userValue);
}//end of type by index method

//method to get text from any unique element
export async function getText(page: Page, locator: string, elementName: string) {
    console.log("Getting text from " + elementName);
    let result = await page.locator(locator).innerText();
    return result;
}//end of get text method

//method to get text from any element by index
export async function getTextByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log("Getting text from " + elementName);
    let result = await page.locator(locator).nth(index).innerText();
    return result;
}//end of get text by index method