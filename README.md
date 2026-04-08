# 🎭 Playwright AI Agents: Automação Inteligente no VS Code

Este projeto redefine a automação de testes E2E (End-to-End) ao integrar o **Playwright** com **Agentes de IA** especializados, sendo está uma das Features do Playwright. Em vez de escrever cada linha de código manualmente, utilizamos engenharia de prompt e o contexto do **Copilot Chat** para planejar, gerar e "curar" nossos testes, deixando todo o processo bem mais automatizado.

---

## 🏗️ A Trindade de Agentes

A IA do Playwright presente no projeto está centralizada na pasta [`.github/agents/`](./.github/agents/). Cada arquivo Markdown lá dentro atua como uma "personalidade" ou "agente" que guia o Copilot Chat no VS Code. Esses agentes são criados automaticamente pelo Playwright quando você inicializa um projeto:

1.  **Planner (O Arquiteto)** 🧠: Localizado em `playwright-test-planner.agent.md`. Ele analisa os requisitos da funcionalidade e desenha a estratégia de navegação, garantindo cobertura total. Dado o prompt, ele irá analisar a aplicação do qual você deseja testar e criar o planejamento através de "Testes Manuais".
2.  **Generator (O Codificador)** ✍️: Localizado em `playwright-test-generator.agent.md`. Ele conhece nossos padrões de código (Page Objects, seletores semânticos) e transforma planos em scripts Playwright funcionais. Resumidamente, ele irá utilizar o planejamento criado pelo **Planner** e irá criar os testes automáticos, gerando oficialmente um código.
3.  **Healer (O Médico)** 💊: Localizado em `playwright-test-healer.agent.md`. Quando um teste falha por mudança na UI ou seletor quebrado, este agente analisa o erro e sugere a correção imediata.

Você pode analisar todos esses prompts na pasta, apenas para fins de entendimento e etc.

---

## 🛠️ Fluxo de Trabalho (AI-First)

Este projeto foi desenhado para ser usado diretamente na interface do **VS Code**. Não é necessário configurar chaves de API externas ou arquivos `.env` para a geração dos testes. Mas, o Playwright permite isso. No Chat, você deve realizar o prompt informando o agente que deve ser utilizado e os arquivos de contextos necessários. Por exemplo, se você for utilizar o **Planner**, você deve passar o arquivo "seed.spec.ts", já que este arquivo é a semente que é utilizado para entender o projeto como um todo. Se você utilizar o **Generator**, você deve passar o "seed.spec.ts" e também o Markdown gerado pelo **Planner**, presente em "specs".

Esses arquivos podem ser referenciados no Chat através de "Drag-and-Drop", mas você também pode utilizar outros meios para referenciar os arquivos.

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