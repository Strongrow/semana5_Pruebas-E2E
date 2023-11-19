/*module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);
};
*/
const puppeteer = require('puppeteer');
//const path = require('path');

module.exports = async (page, scenario) => {
  await page.goto(scenario.url)
  await page.type('[name="identification"]', 'pruebas1711_1@yopmail.com');
  await page.type('[name="password"]', '123456789=');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

/*
  await page.focus('input#identification'); 
  await page.keyboard.type('pruebas1711_1@yopmail.com');
  await page.focus('[id="password"]'); 
  await page.keyboard.type('123456789=');
  let signinBtn = await page.waitForSelector('[type="submit"]');
  await signinBtn.click();
*/
}