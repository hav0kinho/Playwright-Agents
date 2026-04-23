Funcionalidade: Autenticação de Usuário
  Como um usuário cadastrado no Sauce Demo
  Quero realizar o login no sistema
  Para acessar a lista de produtos e realizar compras

  Cenário: Login realizado com sucesso
    Dado que eu navego para "https://www.saucedemo.com/"
    Quando eu preencho o campo de usuário com "standard_user"
    E eu preencho o campo de senha com "secret_sauce"
    E eu clico no botão de entrar
    Então eu devo ser redirecionado para a página de inventário
    E o título "Products" deve estar visível no topo da página

  Cenário: Tentativa de login com usuário bloqueado
    Dado que eu navego para "https://www.saucedemo.com/"
    Quando eu preencho o campo de usuário com "locked_out_user"
    E eu preencho o campo de senha com "secret_sauce"
    E eu clico no botão de entrar
    Então eu devo visualizar uma mensagem de erro contendo "Sorry, this user has been locked out."