import{data} from '../support/index'

describe('Áreas de Armazenamento', () => {
  it.skip('Cadastrar Áreas de Armazenamento - Primeiro Acesso', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Áreas de Armazenamento').click()
    cy.get('[data-cy="tableEmpty-button-register"]').click()
    cy.get('[data-cy="name-input"]').type(data.enterprise_name)
    cy.get('[data-cy="code-select"]').select(1)
    cy.get('[data-cy="submit-button"]').click()

    cy.contains('Área de Armazenamento cadastrado com sucesso')
      .should('be.visible')
  });

  it('Sucesso ao Cadastrar Área de Armazenamento', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Áreas de Armazenamento').click()
    cy.contains('Cadastrar').click()
    cy.get('[data-cy="name-input"]').type(data.enterprise_name)
    cy.get('[data-cy="code-select"]').select(1)
    cy.get('[data-cy="submit-button"]').click()

    cy.contains('Área de Armazenamento cadastrado com sucesso')
      .should('be.visible')
  })

  it.skip('Editar Áreas de Armazenamento', () => {
    cy.intercept('GET', 'api/v1/StorageArea/*').as('armazenamento');
    cy.visit('https://qa.atlantex.atlanteti.com');
    cy.contains('Cadastros').click();
    cy.contains('Áreas de Armazenamento').click();
    cy.wait('@armazenamento')
    cy.get('tbody').find('[data-cy="tableList-table-body-edit"]').first().trigger('mouseover').click()
    cy.get('[data-cy="name-input"]').type(data.enterprise_name)
    cy.get('[data-cy="name-input"]').select(1)
    cy.get('[data-cy="inactive-switch"]').click()
    cy.get('[data-cy="submit-button"]').click()
    
    cy.contains('Área de Armazenamento cadastrado com sucesso')
      .should('be.visible')
  });

  it.skip('Excluir Áreas de Armazenamento', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Áreas de Armazenamento').click()
    cy.get('[data-cy="tableList-table-body-1-menu-button"]').first().click()
    cy.contains('Excluir').click()
    cy.get('.bg-red-600').click()

    cy.contains('Depósito deletado com sucesso')
      .should('be.visible')
  });

  it('Limpar Seleção', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Áreas de Armazenamento').click()
    cy.get('[data-cy="tableList-table-head-2-input"]').click()
    cy.get('.gap-9 > .flex').click()
  });

  it('Exportar todos os registros', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Áreas de Armazenamento').click()
    cy.get('[data-cy="tableList-menu-button"]').click()
    cy.contains('XLSX').click()
  });

  it.skip('Excluir em massa', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Áreas de Armazenamento').click()
    cy.get('[data-cy="tableList-table-head-2-input"]').click()
    cy.contains('button', 'Deletar').click()
    cy.get('.bg-red-600').click()
    cy.contains('Depósito deletado com sucesso').should('be.visible')
  });
})
