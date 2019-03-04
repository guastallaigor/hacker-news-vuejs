/// <reference types="Cypress" />

context('Tests E2E to see if the cards and news are working properly', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('/')
    cy.title().should('include', 'Hacker News Vue.js')
    cy.get('#app').should('be.visible')
    cy.get('#app>#layout').should('be.visible')
    cy.get('a.github-corner').should('be.visible')
    cy.get('.is-me').should('be.visible')
    cy.get('.is-me>a.guastallaigor').should('be.visible').contains('@guastallaigor')
    cy.url().should('contains', '/#/')
    cy.get('.layout.wrap-column.mt-negative.has-title>h1.title').should('be.visible').contains('Hacker News')
  })

  describe('When you click in the Top Stories Card', () => {
    it('It should enter the Top Stories route and show the hacker news after loading', () => {
      const card = cy.get('#cards>.card:first-child')
      card.should('be.visible')
      cy.get('#cards>.card:first-child>h1.text-shadow').should('be.visible').contains('Top Stories')
      card.click()
      cy.get('#cards').should('not.be.visible')
      cy.url().should('contains', '/#/top-stories')
      cy.get('.subtitle').should('be.visible').contains('Top stories')
      cy.get('.go-back').should('be.visible')
    })
  })

  describe('When you click in the Best Stories Card', () => {
    it('It should enter the Best Stories route and show the hacker news after loading', () => {
      const card = cy.get('#cards>.card:nth-child(2)')
      card.should('be.visible')
      cy.get('#cards>.card:nth-child(2)>h1.text-shadow').should('be.visible').contains('Best Stories')
      card.click()
      cy.get('#cards').should('not.be.visible')
      cy.url().should('contains', '/#/best-stories')
      cy.get('.subtitle').should('be.visible').contains('Best stories')
      cy.get('.go-back').should('be.visible')
    })
  })

  describe('When you click in the New Stories Card', () => {
    it('It should enter the New Stories route and show the hacker news after loading', () => {
      const card = cy.get('#cards>.card:last-child')
      card.should('be.visible')
      cy.get('#cards>.card:last-child>h1.text-shadow').should('be.visible').contains('New Stories')
      card.click()
      cy.get('#cards').should('not.be.visible')
      cy.url().should('contains', '/#/new-stories')
      cy.get('.subtitle').should('be.visible').contains('New stories')
      cy.get('.go-back').should('be.visible')
    })
  })
})
