const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.js');
const { expect } = require('@playwright/test');
const users = require('../data/users.json'); // ← require() fonctionne pour JSON

let browser;
let page;
let loginPage;

Given('I am on the login page', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('I login as a standard user', async () => {
  await loginPage.login(users.standard.username, users.standard.password);
});

Then('I should see the products page', async () => {
  await expect(page.locator('#inventory_container').first()).toBeVisible();
  await browser.close();
});
