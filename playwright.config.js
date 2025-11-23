// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',         // dossier où se trouvent les tests
  timeout: 30 * 1000,         // timeout max pour chaque test (30s)
  retries: 0,                 // nombre de retry des tests en CI (0 localement)
  reporter: [
    ['list'],                 // affichage console simple
    ['allure-playwright']     // reporter Allure pour générer allure-results
  ],
  use: {
    headless: true,           // exécution en headless par défaut
    viewport: { width: 1280, height: 720 }, // taille de la fenêtre
    actionTimeout: 10 * 1000, // timeout pour interactions (10s)
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',   // capture écran si test échoue
    video: 'retain-on-failure'       // vidéo si test échoue
  }
});
