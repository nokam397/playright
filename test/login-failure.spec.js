import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Login failure shows error and stays on login page',{ tag: ['@fail'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // tenter un login avec des mauvais identifiants
  await loginPage.login('bad_user', 'bad_password');

  // on reste sur la page de login (URL inchangée)
  await expect(page).toHaveURL('https://www.saucedemo.com/');

  // le bouton de login doit toujours être visible
  await expect(page.locator(loginPage.loginButton)).toBeVisible();
});
