# Teste Manual - Login SauceDemo Reexecucao

## Application Overview

Feature: Login no SauceDemo
Como usuário da plataforma
Quero informar credenciais válidas e inválidas
Para validar autenticação, mensagens de erro e acesso à área de produtos.

## Test Scenarios

### 1. Feature: Login no SauceDemo

**Seed:** `tests/seed.spec.ts`

#### 1.1. Scenario: Realizar login com credenciais válidas

**File:** `tests/auth/login-valido-reexecucao.spec.ts`

**Steps:**
  1. Given que o usuário acessa https://www.saucedemo.com/
    - expect: Then o sistema exibe os campos Username e Password e o botão Login.
  2. When o usuário preenche Username com usuario valido.
    - expect: And o valor deve permanecer no campo Username.
  3. And o usuário preenche Password com 'secret_sauce'
    - expect: And o valor deve permanecer no campo Password.
  4. And clica no botão Login
    - expect: Then o usuário deve ser redirecionado para /inventory.html.
    - expect: And a listagem de produtos deve estar visível.
    - expect: And nenhuma mensagem de erro deve ser exibida.

#### 1.2. Scenario: Impedir login sem preencher usuário

**File:** `tests/auth/login-validacoes-reexecucao.spec.ts`

**Steps:**
  1. Given que o usuário acessa https://www.saucedemo.com/ com os campos vazios
    - expect: Then os campos de login devem estar visíveis e vazios.
  2. When o usuário informa apenas Password com 'secret_sauce'
    - expect: And o campo Username permanece vazio.
  3. And clica no botão Login
    - expect: Then o sistema deve exibir a mensagem 'Epic sadface: Username is required'.
    - expect: And o usuário deve permanecer na página de login.

#### 1.3. Scenario: Impedir login com usuário bloqueado

**File:** `tests/auth/login-usuario-bloqueado-reexecucao.spec.ts`

**Steps:**
  1. Given que o usuário acessa https://www.saucedemo.com/
    - expect: Then o formulário de autenticação deve estar disponível.
  2. When o usuário preenche Username com 'locked_out_user' e Password com 'secret_sauce'
    - expect: And os campos devem aceitar os dados informados.
  3. And clica no botão Login
    - expect: Then o sistema deve exibir mensagem de usuário bloqueado.
    - expect: And o usuário não deve acessar /inventory.html.
