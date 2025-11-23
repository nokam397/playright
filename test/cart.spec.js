import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import users from '../data/users.json' assert { type: 'json' };

test('Add item to cart and remove it', { tag: ['@cart'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  // ajouter le premier article trouvé
  const addButton = page.getByRole('button', { name: 'Add to cart' }).first();
  await addButton.click();

  // le badge du panier indique 1
  const badge = page.locator('.shopping_cart_badge');
  await expect(badge).toHaveText('1');

  // retirer l'article
  const removeButton = page.getByRole('button', { name: 'Remove' }).first();
  await removeButton.click();

  // le badge doit disparaître
  await expect(badge).toHaveCount(0);
});
