import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /**Directorio donde estan los tests */


  testMatch: ["tests/loginscreenplay.spec.ts"],
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:[['html'], ["allure-playwright"], ['list'], ['json']] ,
  /**Si el tiempo alcanza explicar un poco el reporte 'list' para una salida de terminal agradable */

  /**['json', {  outputFile: 'test-results.json' }]   para obtener un archivo json completo con los resultados de las pruebas. */

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://ecommerce-playground.lambdatest.io',

    /* Recoger la traza al reintentar la prueba fallida. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false,
    screenshot: "on",
    video: "on",
  },

  /* Configurar proyectos para los principales navegadores */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

   /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

     Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
