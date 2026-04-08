// spec: specs/saucedemo.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Autenticação e Sessão', () => {
  test('Validação de credenciais inválidas e campos obrigatórios no login', async ({ page }) => {
    // 1. Acessar https://www.saucedemo.com/ e clicar em Login sem preencher campos.
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');

    // 2. Preencher Username com 'standard_user' e Password com valor incorreto (ex.: 'wrong_password').
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password');

    // 3. Clicar em Login.
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="error"]')).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });
});