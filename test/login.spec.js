import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import users from '../data/users.json' assert { type: 'json' };

test('Login success navigates to inventory',{ tag: ['@login2'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});
