# 🎭 Playwright AI Agents: Automação Inteligente no VS Code

Este projeto redefine a automação de testes E2E (End-to-End) ao integrar o **Playwright** com **Agentes de IA** especializados. Em vez de escrever cada linha de código manualmente, utilizamos engenharia de prompt e o contexto do **Copilot Chat** para planejar, gerar e curar nossos testes.

---

## 🏗️ A Trindade de Agentes

A inteligência do projeto está centralizada na pasta [`.github/agents/`](./.github/agents/). Cada arquivo Markdown lá dentro atua como uma "personalidade" ou "agente" que guia o Copilot Chat no VS Code:

1.  **Planner (O Arquiteto)** 🧠: Localizado em `playwright-test-planner.agent.md`. Ele analisa os requisitos da funcionalidade e desenha a estratégia de navegação, garantindo cobertura total.
2.  **Generator (O Codificador)** ✍️: Localizado em `playwright-test-generator.agent.md`. Ele conhece nossos padrões de código (Page Objects, seletores semânticos) e transforma planos em scripts Playwright funcionais.
3.  **Healer (O Médico)** 💊: Localizado em `playwright-test-healer.agent.md`. Quando um teste falha por mudança na UI ou seletor quebrado, este agente analisa o erro e sugere a correção imediata.

---

## 🛠️ Fluxo de Trabalho (AI-First)

Este projeto foi desenhado para ser usado diretamente na interface do **VS Code**. Não é necessário configurar chaves de API externas ou arquivos `.env` para a geração dos testes.

### 1. Planejando Testes
No Copilot Chat, referencie o agente de planejamento:
> *"@workspace #file:playwright-test-planner.agent.md Analise a tela de login e sugira os casos de teste prioritários."*

### 2. Gerando o Código
Com o plano aprovado, peça a implementação:
> *"@workspace #file:playwright-test-generator.agent.md Implemente esses testes seguindo o padrão Page Object."*

### 3. Resolvendo Falhas
Se um teste quebrar, cole o erro no chat e invoque o Healer:
> *"#file:playwright-test-healer.agent.md O teste 'login-flow' falhou com este erro: [ERRO]. Como corrigir?"*

---

## 🚀 Comandos Rápidos

Embora a IA ajude a escrever, a execução é o bom e velho Playwright:

* **Abrir Interface Visual (UI Mode):** `npx playwright test --ui`
* **Executar todos os testes:** `npx playwright test`
* **Ver Relatório de Testes:** `npx playwright show-report`

---

## 📁 Organização do Repositório

* **`.github/agents/`**: O coração da nossa inteligência. Prompts de sistema para a IA.
* **`tests/`**: Scripts de teste gerados e mantidos pela equipe (com ajuda da IA).
* **`.playwright-mcp/`**: Logs e rastreabilidade da comunicação com os modelos de linguagem.
* **`playwright.config.ts`**: Configurações de navegadores, timeouts e ambientes.

---

## 💡 Por que essa abordagem?

* **Velocidade:** Saímos do requisito para o código funcional em minutos.
* **Consistência:** A IA sempre segue os mesmos padrões de projeto definidos nos arquivos de agente.
* **Baixa Manutenção:** O Agente Healer reduz drasticamente o tempo gasto corrigindo seletores frágeis.

---
⭐ *Dica para o vídeo: Mostre como o Copilot Chat consome o arquivo de agente para gerar um código muito mais limpo do que um prompt genérico faria!*