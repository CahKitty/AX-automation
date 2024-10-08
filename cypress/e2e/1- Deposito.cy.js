import{data} from '../support/index'

describe('Depósito', () => {
  it.skip('Primeiro Acesso', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Depósito').click()
    cy.get('[data-cy="tableEmpty-button-register"]').click()
      
  });

  it.only('Cadastrar Depósito - Ativo', () => {
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
    cy.get('[data-cy="pickingMethod-select"]').select('Picking Discreto')
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
    cy.get('[data-cy="pickingMethod-select"]').select('Picking Discreto')
    cy.get('[data-cy="inactive-switch"]').click()
    cy.get('[data-cy="submit-button"]').click()
  })

  it('Editar Depósito', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Depósito').click()
    cy.get('tbody [data-cy="tableList-table-body-edit"]').first().trigger('mouseover').first().click()
    cy.get('[data-cy="warehouse-select"]').select('Teste')
    cy.get('[data-cy="erpCode-input"]').type(data.id_number)
    cy.get('[data-cy="name-input"]').type(data.enterprise_name)
    cy.get('[data-cy="isThirdPartManaged-radio-2"]').click()
    cy.get('[data-cy="purchaseReceivement-radio-2"]').click()
    cy.get('[data-cy="pickingMethod-select"]').select('Picking por Zona')
    cy.get('[data-cy="submit-button"]').click()

    cy.contains('Depósito editado com sucesso')
      .should('be.visible')
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

  it('Limpar seleção', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Depósito').click()
    cy.get('[data-cy="tableList-table-head-2-input"]').click()
    cy.get('.gap-9 > .flex').click()
  });

  it('Exportar todos os registros', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Depósito').click()
    cy.get('[data-cy="tableList-menu-button"]').click()
    cy.contains('XLSX').click()
  });

  it.skip('Excluir em massa', () => {
    cy.visit('https://qa.atlantex.atlanteti.com')
    cy.contains('Cadastros').click()
    cy.contains('Depósito').click()
    cy.get('[data-cy="tableList-table-head-2-input"]').click()
    cy.contains('button', 'Deletar').click()
    cy.get('.bg-red-600').click()
  });
})
