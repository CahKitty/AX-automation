import{data} from '../support/index'

describe('Depósito', () => {
  it('Cadastrar Depósito - Ativo', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Depósito').click()
    cy.contains('Cadastrar').click()
    cy.get('[data-cy="warehouse-select"]').select('Teste')
    cy.get('[data-cy="code-input"]').type(data.id_number)
    cy.get('[data-cy="erpCode-input"]').type(data.id_number)
    cy.get('[data-cy="name-input"]').type(data.enterprise_name)
    cy.get('[data-cy="branchOffice-select"]').select('Teste')
    cy.get('[data-cy="isThirdPartManaged-radio-1"]').click()
    cy.get('[data-cy="managementCompany-select"]').select('Teste')
    cy.get('[data-cy="costCenter-select"]').select('Teste')
    cy.get('[data-cy="purchaseReceivement-radio-1"]').click()
    cy.get('[data-cy="submit-button"]').click()
  })

  it('Cadastrar Depósito - Inativo', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Depósito').click()
    cy.contains('Cadastrar').click()
    cy.get('[data-cy="warehouse-select"]').select('Teste')
    cy.get('[data-cy="code-input"]').type(data.id_number)
    cy.get('[data-cy="erpCode-input"]').type(data.id_number)
    cy.get('[data-cy="name-input"]').type(data.enterprise_name)
    cy.get('[data-cy="branchOffice-select"]').select('Teste')
    cy.get('[data-cy="isThirdPartManaged-radio-1"]').click()
    cy.get('[data-cy="managementCompany-select"]').select('Teste')
    cy.get('[data-cy="costCenter-select"]').select('Teste')
    cy.get('[data-cy="purchaseReceivement-radio-1"]').click()
    cy.get('[data-cy="inactive-switch"]').click()
    cy.get('[data-cy="submit-button"]').click()
  })

  it('Editar Depósito', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Depósito').click()
    cy.get('tbody [data-cy="tableList-table-body-edit"]').first().trigger('mouseover').first().click()
    cy.get('[data-cy="warehouse-select"]').select('Teste')
    cy.get('[data-cy="code-input"]').type(data.id_number)
    cy.get('[data-cy="code-input"]').type(data.id_number)
    cy.get('[data-cy="code-input"]').type(data.enterprise_name)
    cy.get('[data-cy="submit-button"]').click()
  })

  it('Excluir Depósito', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Depósito').click()
    cy.get('[data-cy="tableList-table-body-1-menu-button"]').first().click()
    cy.contains('Excluir').click()
    cy.get('.bg-red-600').click()

    cy.contains('Depósito deletado com sucesso')
      .should('be.visible')
  });
})
