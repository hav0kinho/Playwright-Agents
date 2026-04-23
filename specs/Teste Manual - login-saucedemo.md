# Plano de Testes - Login SauceDemo

## Application Overview

Validação manual do fluxo de autenticação da aplicação SauceDemo em estado limpo, cobrindo sucesso de login, falhas de credenciais e validações obrigatórias dos campos.

## Test Scenarios

### 1. Autenticação SauceDemo

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login com credenciais válidas

**File:** `tests/auth/login-valido.spec.ts`

**Steps:**
  1. Acessar a URL https://www.saucedemo.com/ em uma nova sessão do navegador.
    - expect: A página de login deve carregar com título 'Swag Labs'.
    - expect: Os campos Username e Password e o botão Login devem estar visíveis.
  2. Preencher Username com `standard_user` e Password com `secret_sauce`.
    - expect: Os valores digitados devem permanecer nos campos corretos.
  3. Clicar no botão Login.
    - expect: A URL deve mudar para conter `/inventory.html`.
    - expect: A lista de produtos deve ficar visível.
    - expect: Nenhuma mensagem de erro de autenticação deve ser exibida.

#### 1.2. Validação de obrigatoriedade dos campos

**File:** `tests/auth/login-validacoes.spec.ts`

**Steps:**
  1. Acessar a URL https://www.saucedemo.com/ com campos vazios.
    - expect: Campos Username e Password devem iniciar vazios.
    - expect: Botão Login deve estar habilitado para tentativa.
  2. Clicar em Login sem preencher nenhum campo.
    - expect: Deve exibir mensagem de erro indicando que Username é obrigatório.
  3. Preencher apenas Username com `standard_user` e clicar em Login.
    - expect: Deve exibir mensagem de erro indicando que Password é obrigatório.
    - expect: Não deve ocorrer redirecionamento para `/inventory.html`.

#### 1.3. Login com usuário bloqueado

**File:** `tests/auth/login-usuario-bloqueado.spec.ts`

**Steps:**
  1. Acessar a URL https://www.saucedemo.com/.
    - expect: Página deve carregar normalmente com formulário disponível.
  2. Preencher Username com `locked_out_user` e Password com `secret_sauce`.
    - expect: Campos devem aceitar os valores sem erro de formato.
  3. Clicar em Login.
    - expect: Deve exibir mensagem informando que o usuário está bloqueado.
    - expect: A URL deve permanecer na tela de login.
    - expect: A área de produtos não deve ser exibida.
