import { test, expect } from '@playwright/test';

test.describe('SD-001-BASIC-LOGIN', () => {
  test.beforeEach(async ({ page, context }) => {
    // Garantia explícita de isolamento de sessão entre execuções.
    await context.clearCookies();
    await page.goto('https://www.saucedemo.com/');
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    await page.reload();
  });

  test('Deve realizar login válido com validações funcionais do fluxo manual', async ({ page }) => {
    const userName = page.locator('#user-name');
    const password = page.locator('#password');
    const loginButton = page.locator('#login-button');

    // Passo 01: usuário deve aceitar texto e manter foco.
    await userName.fill('standard_user');
    await expect(userName).toHaveValue('standard_user');
    await userName.focus();
    await expect(userName).toBeFocused();

    // Passo 02: senha deve permanecer mascarada.
    await password.fill('secret_sauce');
    await expect(password).toHaveAttribute('type', 'password');

    // Passo 03: botão deve estar habilitado e clicável.
    await expect(loginButton).toBeEnabled();
    await loginButton.click();

    // Passo 04: validações de sucesso na área logada.
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('span.title')).toHaveText('Products');
    await expect(page.locator('div.inventory_list')).toBeVisible();
  });
});
