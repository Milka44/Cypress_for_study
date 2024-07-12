
Cypress.Commands.add('login', (email, password) => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.get('.btn.btn-outline-white.header_signin').click();
    cy.get('#signinEmail').type(email);
    cy.get('#signinPassword').type(password, { sensitive: true });
    cy.get('.modal-footer > .btn-primary').click();
  });

  Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })

 