// spec: specs/saucedemo.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Catálogo, Carrinho e Checkout', () => {
  test('Ordenação e manipulação de itens no catálogo', async ({ page }) => {
    // 1. Realizar login válido e acessar /inventory.html.
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/\/inventory\.html$/);

    // 2. Alterar ordenação para 'Price (low to high)' e depois para 'Name (Z to A)'.
    const sort = page.locator('[data-test="product-sort-container"]');
    await sort.selectOption('lohi');
    await expect(sort).toHaveValue('lohi');
    await sort.selectOption('za');
    await expect(sort).toHaveValue('za');
    await expect(page.locator('[data-test="inventory-item-name"]').first()).toHaveText(
      'Test.allTheThings() T-Shirt (Red)'
    );

    // 3. Adicionar 2 itens ao carrinho e remover 1 item ainda na tela de catálogo.
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

    // 4. Abrir o carrinho.
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL(/\/cart\.html$/);
    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1);
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  });
});