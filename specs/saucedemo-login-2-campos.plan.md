# Plano de Teste - Login SauceDemo (2 Campos)

## Application Overview

Plano de teste funcional simples para validar que a página de login do SauceDemo (https://www.saucedemo.com/) possui exatamente dois campos de entrada visíveis ao usuário.

## Test Scenarios

### 1. Login - Estrutura Básica

**Seed:** `tests/seed.spec.ts`

#### 1.1. Validar existência de 2 campos na tela de login

**File:** `tests/auth/login-dois-campos.spec.ts`

**Steps:**
  1. Abrir a URL https://www.saucedemo.com/ em uma nova sessão limpa.
    - expect: A página de login é carregada com sucesso.
    - expect: O título da página é exibido como Swag Labs.
  2. Identificar os campos visíveis do formulário de login.
    - expect: Existe um campo de entrada para Username.
    - expect: Existe um campo de entrada para Password.
  3. Contar os campos de entrada do formulário de login.
    - expect: A quantidade total de campos de entrada exibidos para login é exatamente 2.
    - expect: Se a contagem for diferente de 2, o teste deve falhar.
