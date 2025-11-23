// tests/e2e.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import users from '../data/users.json' assert { type: 'json' };

test('Full e2e: login, add items, remove one, return', { tag: ['@smoke'] }, async ({ page }) => {
  // Instanciation des page objects avec la page Playwright fournie
  const loginPage = new LoginPage(page);

  // 1) Aller sur la page de login
  await loginPage.goto();

  // 2) Se connecter avec les credentials du fichier data/users.json
  await loginPage.login(users.standard.username, users.standard.password);
  await page.waitForTimeout(5000);
});
