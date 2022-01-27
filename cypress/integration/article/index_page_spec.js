describe('Articles index test', function() {
  it('shows index title', function() {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb

    cy.visit('/articles')
    
    cy.contains("Articles")
  })
})