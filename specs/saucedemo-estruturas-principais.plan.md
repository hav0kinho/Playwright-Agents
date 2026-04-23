# Plano de Teste - Estruturas Principais da Página de Login SauceDemo

## Application Overview

Validar que os componentes estruturais essenciais da página https://www.saucedemo.com/ estão presentes e funcionais em estado inicial limpo, incluindo formulário de autenticação e áreas informativas de credenciais.

## Test Scenarios

### 1. Estrutura da Página de Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Presença dos blocos principais em carregamento inicial

**File:** `tests/auth/login-estruturas-principais.spec.ts`

**Steps:**
  1. Navegar para https://www.saucedemo.com/ em estado limpo.
    - expect: A página deve carregar com título Swag Labs sem redirecionamento.
    - expect: A área principal de login deve ficar visível para interação.
  2. Verificar o bloco visual de identificação da aplicação (marca Swag Labs) no container principal.
    - expect: O bloco de identificação deve estar renderizado e visível.
  3. Verificar os elementos do formulário.
    - expect: O campo Username deve existir e estar visível.
    - expect: O campo Password deve existir e estar visível.
    - expect: O botão Login deve existir e estar visível.
  4. Verificar os blocos informativos abaixo do formulário.
    - expect: A seção Accepted usernames are: deve existir e estar visível.
    - expect: A seção Password for all users: deve existir e estar visível.
    - expect: Os textos de apoio devem estar legíveis e não vazios.

#### 1.2. Persistência estrutural após tentativa inválida

**File:** `tests/auth/login-estruturas-persistencia-erro.spec.ts`

**Steps:**
  1. Abrir https://www.saucedemo.com/ em estado limpo.
    - expect: A estrutura inicial da página deve aparecer corretamente.
  2. Clicar em Login sem preencher Username e Password.
    - expect: Uma mensagem de erro de validação deve ser exibida.
    - expect: Nenhum redirecionamento para inventário deve ocorrer.
  3. Revalidar os blocos estruturais principais após o erro.
    - expect: Campos Username e Password devem continuar visíveis e utilizáveis.
    - expect: Botão Login deve permanecer visível e clicável.
    - expect: Seções informativas de credenciais devem continuar visíveis.

#### 1.3. Estrutura principal em viewport móvel

**File:** `tests/auth/login-estruturas-mobile.spec.ts`

**Steps:**
  1. Definir viewport móvel (exemplo 375x812) e navegar para https://www.saucedemo.com/ em estado limpo.
    - expect: A página deve carregar sem quebra de layout crítica.
  2. Validar presença dos mesmos elementos estruturais do desktop.
    - expect: Marca Swag Labs deve permanecer visível.
    - expect: Campos Username e Password devem estar visíveis sem sobreposição.
    - expect: Botão Login deve estar visível e acionável.
    - expect: Blocos de Accepted usernames are: e Password for all users: devem permanecer visíveis.
  3. Executar rolagem vertical mínima, se necessária, para confirmar acesso ao conteúdo.
    - expect: Nenhum bloco essencial deve desaparecer permanentemente.
    - expect: Os elementos essenciais devem permanecer alcançáveis pelo usuário.
