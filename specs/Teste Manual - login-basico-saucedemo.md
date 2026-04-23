# Teste Manual - Login Básico SauceDemo

## Application Overview

Feature: Autenticação de usuário no Sauce Demo
Objetivo: Validar o acesso básico com credenciais válidas e evidências funcionais de sucesso.

## Test Scenarios

### 1. Feature: Login básico com credenciais válidas

**Seed:** `tests/seed.spec.ts`

#### 1.1. Scenario: Login válido redireciona para inventário e exibe produtos

**File:** `tests/testesDifereciados/login-basico-saucedemo.spec.ts`

**Steps:**
  1. Abrir o site Sauce Demo em sessão limpa
    - expect: Given que o contexto de navegação está limpo sem cookies e storage da execução anterior
    - expect: And que eu acesso a URL https://www.saucedemo.com/
  2. Informar credenciais válidas
    - expect: When eu preencho o campo de usuário com standard_user
    - expect: And eu preencho o campo de senha com secret_sauce
  3. Executar autenticação
    - expect: And eu clico no botão Login
    - expect: Then o botão Login deve estar habilitado e clicável no momento do clique
  4. Validar sucesso de autenticação
    - expect: Then eu devo ser redirecionado para /inventory.html
    - expect: And o cabeçalho Products deve estar visível
    - expect: And a lista de produtos deve estar visível no DOM

#### 1.2. Scenario: Campo de senha mantém entrada mascarada

**File:** `tests/testesDifereciados/login-basico-saucedemo.spec.ts`

**Steps:**
  1. Abrir página de login
    - expect: Given que eu acesso a URL https://www.saucedemo.com/
  2. Digitar no campo de senha
    - expect: When eu preencho o campo de senha com secret_sauce
    - expect: Then os caracteres do campo de senha devem permanecer mascarados

#### 1.3. Scenario: Campo de usuário aceita texto informado

**File:** `tests/testesDifereciados/login-basico-saucedemo.spec.ts`

**Steps:**
  1. Abrir página de login
    - expect: Given que eu acesso a URL https://www.saucedemo.com/
  2. Digitar no campo de usuário
    - expect: When eu preencho o campo de usuário com standard_user
    - expect: Then o campo deve aceitar o texto informado
    - expect: And o foco deve permanecer no formulário de autenticação
