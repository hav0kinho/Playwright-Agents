# Plano de Testes - SauceDemo

## Application Overview

Plano de testes funcionais e de regressão para https://www.saucedemo.com/, cobrindo autenticação, navegação de produtos, carrinho, checkout e validações de erro. Cada cenário assume estado inicial limpo (nova sessão, sem itens no carrinho), podendo ser executado de forma independente.

## Test Scenarios

### 1. Autenticação e Sessão

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login válido com usuário padrão

**File:** `tests/auth/login-valido.spec.ts`

**Steps:**
  1. Acessar a página inicial https://www.saucedemo.com/.
    - expect: A aplicação exibe os campos Username e Password e o botão Login.
    - expect: A página permanece estável sem travamentos visíveis.
  2. Preencher Username com 'standard_user' e Password com 'secret_sauce'.
    - expect: Os campos aceitam a digitação normalmente.
  3. Clicar em Login.
    - expect: Usuário é redirecionado para /inventory.html.
    - expect: A página exibe o título Products e a lista de itens.

#### 1.2. Bloqueio de acesso para usuário locked_out_user

**File:** `tests/auth/login-usuario-bloqueado.spec.ts`

**Steps:**
  1. Acessar https://www.saucedemo.com/.
    - expect: Tela de login visível e pronta para interação.
  2. Preencher Username com 'locked_out_user' e Password com 'secret_sauce'.
    - expect: Credenciais são aceitas no formulário para submissão.
  3. Clicar em Login.
    - expect: A autenticação falha.
    - expect: É exibida a mensagem 'Epic sadface: Sorry, this user has been locked out.'.
    - expect: O usuário permanece na tela de login.

#### 1.3. Validação de credenciais inválidas e campos obrigatórios no login

**File:** `tests/auth/login-validacoes.spec.ts`

**Steps:**
  1. Acessar https://www.saucedemo.com/ e clicar em Login sem preencher campos.
    - expect: A validação bloqueia o login.
    - expect: É exibida a mensagem 'Epic sadface: Username is required'.
  2. Preencher Username com 'standard_user' e Password com valor incorreto (ex.: 'wrong_password').
    - expect: Submissão é processada.
  3. Clicar em Login.
    - expect: A autenticação falha.
    - expect: É exibida a mensagem 'Epic sadface: Username and password do not match any user in this service'.
    - expect: Usuário permanece na página de login.

#### 1.4. Logout encerra sessão e retorna ao login

**File:** `tests/auth/logout.spec.ts`

**Steps:**
  1. Efetuar login com 'standard_user'/'secret_sauce'.
    - expect: Usuário entra em /inventory.html.
  2. Abrir o menu lateral (Open Menu).
    - expect: Menu exibe opções All Items, About, Logout e Reset App State.
  3. Clicar em Logout.
    - expect: Aplicação retorna para https://www.saucedemo.com/.
    - expect: Campos de login são exibidos novamente.
    - expect: Sessão autenticada é encerrada.

### 2. Catálogo, Carrinho e Checkout

**Seed:** `tests/seed.spec.ts`

#### 2.1. Ordenação e manipulação de itens no catálogo

**File:** `tests/inventory/catalogo-ordenacao-e-carrinho.spec.ts`

**Steps:**
  1. Realizar login válido e acessar /inventory.html.
    - expect: Lista de produtos exibida com seletor de ordenação.
  2. Alterar ordenação para 'Price (low to high)' e depois para 'Name (Z to A)'.
    - expect: A ordem visual dos produtos é atualizada conforme o critério escolhido.
  3. Adicionar 2 itens ao carrinho e remover 1 item ainda na tela de catálogo.
    - expect: Texto do botão alterna entre Add to cart/Remove conforme ação.
    - expect: Badge do carrinho reflete a quantidade correta de itens.
  4. Abrir o carrinho.
    - expect: A listagem em /cart.html mostra apenas os itens esperados após as ações.

#### 2.2. Checkout completo com sucesso

**File:** `tests/checkout/checkout-sucesso.spec.ts`

**Steps:**
  1. Efetuar login válido, adicionar ao menos 1 item e abrir /cart.html.
    - expect: Carrinho contém item(ns) selecionado(s).
  2. Clicar em Checkout.
    - expect: Aplicação abre /checkout-step-one.html com campos First Name, Last Name e Zip/Postal Code.
  3. Preencher First Name, Last Name e Zip/Postal Code com dados válidos e clicar em Continue.
    - expect: Aplicação abre /checkout-step-two.html.
    - expect: Resumo exibe Payment Information e Shipping Information.
  4. Conferir Item total, Tax e Total calculado; clicar em Finish.
    - expect: Aplicação abre /checkout-complete.html.
    - expect: Mensagem de sucesso 'Thank you for your order!' é exibida.

#### 2.3. Validação de campos obrigatórios no checkout (step one)

**File:** `tests/checkout/checkout-validacoes-step-one.spec.ts`

**Steps:**
  1. Com item no carrinho, entrar em /checkout-step-one.html.
    - expect: Campos de identificação do cliente são exibidos.
  2. Clicar em Continue sem preencher nenhum campo.
    - expect: Exibe 'Error: First Name is required'.
    - expect: Fluxo não avança para o step two.
  3. Preencher apenas First Name e clicar em Continue.
    - expect: Exibe 'Error: Last Name is required'.
    - expect: Fluxo permanece no step one.
  4. Preencher First Name e Last Name, deixar Zip/Postal Code vazio e clicar em Continue.
    - expect: Exibe 'Error: Postal Code is required'.
    - expect: Fluxo permanece no step one até correção.

#### 2.4. Cancelamento de checkout e continuidade de compra

**File:** `tests/checkout/checkout-cancelar-e-continuar-compra.spec.ts`

**Steps:**
  1. No carrinho com item adicionado, clicar em Checkout para abrir step one.
    - expect: Tela Checkout: Your Information exibida corretamente.
  2. Clicar em Cancel.
    - expect: Aplicação retorna para /cart.html sem perder item no carrinho.
  3. Clicar em Continue Shopping.
    - expect: Aplicação retorna para /inventory.html.
    - expect: Usuário pode continuar adicionando/removendo itens normalmente.

#### 2.5. Reset App State limpa estado do carrinho

**File:** `tests/inventory/reset-app-state.spec.ts`

**Steps:**
  1. Efetuar login, adicionar itens ao carrinho e confirmar que badge exibe quantidade > 0.
    - expect: Carrinho contém itens e badge está visível.
  2. Abrir menu lateral e clicar em Reset App State.
    - expect: Estado da aplicação é resetado.
    - expect: Itens deixam de aparecer como adicionados no catálogo.
  3. Abrir carrinho após o reset.
    - expect: Carrinho fica vazio ou sem itens previamente adicionados.
    - expect: Badge do carrinho não deve indicar quantidade antiga.
