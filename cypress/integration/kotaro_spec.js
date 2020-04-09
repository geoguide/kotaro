describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
  it('loads the basic Kota Page', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Kotaro')
    cy.contains('Typical Day').click();
    cy.url().should('include', '/typical-day')
    cy.contains('(Ideal)')
  })
})
