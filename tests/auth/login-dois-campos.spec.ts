// spec: specs/saucedemo-login-2-campos.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login - Estrutura Básica', () => {
  test('Validar existência de 2 campos na tela de login', async ({ page }) => {
    // 1. Abrir a URL https://www.saucedemo.com/ em uma nova sessão limpa.
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    // 2. Identificar os campos visíveis do formulário de login.
    const usernameInput = page.locator('[data-test="username"]');
    const passwordInput = page.locator('[data-test="password"]');
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    // 3. Contar os campos de entrada do formulário de login.
    const loginInputs = page.locator('input[data-test="username"], input[data-test="password"]');
    await expect(loginInputs).toHaveCount(2);
  });
});