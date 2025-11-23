import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import users from '../data/users.json' assert { type: 'json' };

test('Logout returns to login page',{ tag: ['@logout'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  // ouvrir le menu et cliquer sur logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  // on revient à la page de login
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator(loginPage.loginButton)).toBeVisible();
});
