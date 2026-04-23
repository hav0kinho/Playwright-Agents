// spec: specs/saucedemo-login-test-gerkhin.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Autenticação de Usuário', () => {
  test('Tentativa de login com usuário bloqueado', async ({ page }) => {
    const usernameInput = page.locator('[data-test="username"]');
    const passwordInput = page.locator('[data-test="password"]');
    const loginButton = page.locator('[data-test="login-button"]');
    const errorMessage = page.locator('[data-test="error"]');

    // Dado que eu navego para "https://www.saucedemo.com/"
    await page.goto('https://www.saucedemo.com/');

    // Quando eu preencho o campo de usuário com "locked_out_user"
    await usernameInput.fill('locked_out_user');

    // E eu preencho o campo de senha com "secret_sauce"
    await passwordInput.fill('secret_sauce');

    // E eu clico no botão de entrar
    await loginButton.click();

    // Então eu devo visualizar uma mensagem de erro contendo "Sorry, this user has been locked out."
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Sorry, this user has been locked out.');
  });
});
