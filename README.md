# README - Teste de Qualidade de Software
(Os vídeos demonstrativos da execução de cada projeto estão disponíveis como "Back.mkv" e "Front.mkv".)


# Teste Backend (Postman)

Este repositório contém os arquivos e instruções necessários para realizar o teste de backend utilizando o Postman.

## Como Executar:

1. Faça o download dos arquivos "Case Técnico de Quality Assurance.postman_collection.json" e "ServerRest - Environment.postman_environment.json" localizados na pasta "Teste Backend".

2. Importe o arquivo de coleção e o environment no Postman.

3. Abra o Postman e selecione a coleção e o environment importados.

4. Execute cada uma das requisições da coleção, seguindo a ordem adequada (Create, Read, Update e Delete).

---
### Explicação do C de CRUD

O código começa com a análise da resposta da requisição POST. Se o código de resposta for 201 (indicando que a criação foi bem-sucedida), então:

1. O ID do usuário é extraído da resposta e salvo em uma variável de ambiente.
2. São realizados testes para validar que o status da resposta seja 201 e que a mensagem de sucesso seja "Cadastro realizado com sucesso".

Se o código de resposta for 400 (indicando um erro de requisição devido a dados inválidos), então:

1. São realizados testes para validar que o status da resposta seja 400 e que a mensagem de erro seja "Este email já está sendo usado".

Se o código de resposta for 405 (indicando um método de requisição não permitido), então:

1. São realizados testes para validar que o status da resposta seja 405 e que a mensagem de erro seja "Não é possível realizar POST em /usuarios/null. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las.".

Além disso, são realizados testes adicionais para validar que:

- A mensagem retornada seja uma string não vazia.
- O cabeçalho "Content-Type" deve ser "application/json".

### Explicação do R de CRUD

O código começa com a análise da resposta da requisição GET. Se o código de resposta for 200 (indicando que a leitura foi bem-sucedida), então:

1. O ID do usuário é extraído da resposta e armazenado em uma variável de ambiente.
2. É realizado um teste para validar o status da resposta 200.

Se a solicitação não for bem-sucedida e o código de resposta for 400 (indicando um erro de requisição), então:

1. É realizado um teste para validar que o status da resposta seja 400.
2. É realizado um teste para validar que a mensagem de erro seja "Usuário não encontrado".

### Explicação do U de CRUD

O código começa com a verificação do código de resposta da requisição PUT. Se o código de resposta for 200 (indicando que a atualização foi bem-sucedida), então:

1. É validado que o status da resposta seja 200.
2. É validado que a mensagem de sucesso seja "Registro alterado com sucesso".

Se o código de resposta for 400 (indicando um erro de requisição), então:

1. É validado que o status da resposta seja 400.
2. É validado que a mensagem de erro seja "Usuário não encontrado".

Se o código de resposta for 405 (indicando um método de requisição não permitido), então:

1. É validado que o status da resposta seja 405.
2. É validado que a mensagem de erro seja "Não é possível realizar PUT em /usuarios/. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las.".

Além disso, são realizados testes adicionais para validar que:

- A resposta contenha os campos obrigatórios.
- A mensagem seja uma string não vazia.
- O cabeçalho "Content-Type" esteja definido como "application/json".
- O tempo de resposta seja inferior a 500ms.

### Explicação do D de CRUD

O código começa com a análise da resposta da requisição DELETE. Se o código de resposta for 200 (indicando que a exclusão foi bem-sucedida), então:

1. O ID do usuário é extraído da resposta e armazenado em uma variável de ambiente.
2. É validado que o status da resposta seja 200.
3. É verificado e validado se a mensagem de sucesso é "Registro excluído com sucesso" ou "Nenhum registro excluído".

Se o código de resposta for 400 (indicando um erro de requisição), então:

1. É validado que o status da resposta seja 400.
2. É validado que a mensagem de erro seja "Não é permitido excluir usuário com carrinho cadastrado".

Se o código de resposta for 405 (indicando um método de requisição não permitido), então:

1. É validado que o status da resposta seja 405.
2. É validado que a mensagem de erro seja "Não é possível realizar DELETE em /usuarios/. Acesse https://serverest.dev para ver as rotas disponíveis e como utilizá-las.".

Além disso, são realizados testes adicionais para validar que:

- A resposta contenha os campos obrigatórios.
- O campo "message" não esteja vazio e seja uma string.

# Teste de Frontend - Cypress

## Pré-requisitos

Certifique-se de ter o Cypress instalado globalmente ou localmente no seu projeto.

```bash
# Instale globalmente (opcional)
npm install -g cypress

# OU instale localmente no projeto
npm install --save-dev cypress
```

## Executando os Testes

1. Clone este repositório na sua máquina local.
2. Navegue até a pasta do projeto.
3. Abra o Cypress:

```bash
npx cypress open
```

4. Selecione o arquivo de teste `teste_frontend.spec.js` para executar os testes.

## Descrição dos Testes

### Deve realizar o cadastro

Este teste verifica se o cadastro de um usuário é realizado com sucesso, preenchendo os campos necessários e clicando no botão de cadastrar.

### Deve realizar o login sem preencher o campo de e-mail

Este teste verifica se uma mensagem de erro é exibida quando o campo de e-mail não é preenchido e o usuário tenta fazer login.

### Deve realizar o login sem preencher o campo de senha

Este teste verifica se uma mensagem de erro é exibida quando o campo de senha não é preenchido e o usuário tenta fazer login.

### Deve realizar o login com sucesso

Este teste verifica se é possível fazer login com sucesso, preenchendo os campos de e-mail e senha corretamente.

### Deve realizar o login sem sucesso

Este teste verifica se uma mensagem de erro é exibida quando são inseridos dados de login inválidos.

## Observações

- Certifique-se de que o servidor esteja disponível e acessível durante a execução dos testes.
- Os testes são executados automaticamente pelo Cypress e as interações com a interface são simuladas para verificar o comportamento esperado do sistema.
