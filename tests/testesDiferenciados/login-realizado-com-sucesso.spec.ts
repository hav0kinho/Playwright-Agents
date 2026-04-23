// spec: specs/saucedemo-login-test-gerkhin.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Autenticação de Usuário', () => {
  test('Login realizado com sucesso', async ({ page }) => {
    const usernameInput = page.locator('[data-test="username"]');
    const passwordInput = page.locator('[data-test="password"]');
    const loginButton = page.locator('[data-test="login-button"]');
    const pageTitle = page.locator('[data-test="title"]');

    // Dado que eu navego para "https://www.saucedemo.com/"
    await page.goto('https://www.saucedemo.com/');

    // Quando eu preencho o campo de usuário com "standard_user"
    await usernameInput.fill('standard_user');

    // E eu preencho o campo de senha com "secret_sauce"
    await passwordInput.fill('secret_sauce');

    // E eu clico no botão de entrar
    await loginButton.click();

    // Então eu devo ser redirecionado para a página de inventário
    await expect(page).toHaveURL(/\/inventory\.html$/);

    // E o título "Products" deve estar visível no topo da página
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toHaveText('Products');
  });
});
