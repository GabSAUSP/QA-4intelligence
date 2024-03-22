

it('Deve realizar o cadastro', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('TesteQA')
    cy.get('[data-testid="email"]').type('TesteQA@email.com')
    cy.get('[data-testid="password"]').type('teste')
    cy.get('[data-testid="cadastrar"]').click()
    
});

it('Deve realizar o login sem preencher o campo de e-mail', () => {
    cy.visit('https://front.serverest.dev/login');

    cy.get('[data-testid="senha"]').type('teste')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').contains('Email é obrigatório')
});

it('Deve realizar o login sem preencher o campo de senha', () => {
    cy.visit('https://front.serverest.dev/login');

    cy.get('[data-testid="email"]').type('TesteQA@email.com')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').contains('Password é obrigatório')
});

it('Deve realizar o login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login');

    cy.get('[data-testid="email"]').type('TesteQA@email.com')
    cy.get('[data-testid="senha"]').type('teste')
    cy.get('[data-testid="entrar"]').click()
    
     
});

it('Deve realizar o login sem sucesso', () => {
    cy.visit('https://front.serverest.dev/login');

    cy.get('[data-testid="email"]').type('test@test.com')
    cy.get('[data-testid="senha"]').type('12345')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').contains('Email e/ou senha inválidos')
  
});



