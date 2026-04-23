**ID:** `SD-001-BASIC-LOGIN`  
**Site:** [Sauce Demo](https://www.saucedemo.com/)  
**Objetivo:** Validar o acesso básico com credenciais válidas.

---

### 📋 Pré-condições
* Acesso à URL: `https://www.saucedemo.com/`

### 🛠️ Fluxo de Execução

| Passo | Ação (Input) | Elemento Alvo | Resultado Esperado (Assert) |
| :--- | :--- | :--- | :--- |
| **01** | Inserir `standard_user` | `input#user-name` | O campo deve aceitar o texto e manter o foco. |
| **02** | Inserir `secret_sauce` | `input#password` | O texto deve estar mascarado (bullet points). |
| **03** | Clicar no botão "Login" | `input#login-button` | O botão deve estar habilitado e clicável. |
| **04** | Validar entrada no sistema | `div.inventory_list` | A lista de produtos deve estar visível no DOM. |

---

### 🔍 Notas para o Agente de Geração (Generator)
* **Verificação de Sucesso:** Em vez de apenas olhar a URL, force o agente a verificar se o cabeçalho "Products" está visível (`span.title`).
* **Tratamento de Cookies:** Observe se o gerador tenta realizar alguma ação de limpeza de sessão antes de iniciar, o que indicaria uma boa "percepção" de isolamento de testes.
"""