/* global describe it cy */

describe('Register and login', function () {
  it('Creates an account', function () {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()

    cy.contains('Ingresar').click()
    cy.get('.cajaSignUp').find('input[name="nombre"]').click().type('Juan David')
    cy.get('.cajaSignUp').find('input[name="apellido"]').click().type('Guzmán')
    cy.get('.cajaSignUp').find('input[name="correo"]').click().type('jd.guzman10@uniandes.edssu.co')
    cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('59')
    cy.get('.cajaSignUp').find('input[name="password"]').click().type('12345678')
    cy.get('.cajaSignUp').find('input[name="acepta"]').check()
    cy.get('.cajaSignUp').contains('Registrarse').click()
    cy.contains('Verifica tu correo y activa tu cuenta Con esto ya podrás calificar profesores')
  })

  it('Tries to create an account with an already existing account', function () {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()

    cy.contains('Ingresar').click()
    cy.get('.cajaSignUp').find('input[name="nombre"]').click().type('Juan David')
    cy.get('.cajaSignUp').find('input[name="apellido"]').click().type('Guzmán')
    cy.get('.cajaSignUp').find('input[name="correo"]').click().type('jd.guzman10@uniandes.edu.co')
    cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('59')
    cy.get('.cajaSignUp').find('input[name="password"]').click().type('12345678')
    cy.get('.cajaSignUp').find('input[name="acepta"]').check()
    cy.get('.cajaSignUp').contains('Registrarse').click()
    cy.contains('Error: Ya existe un usuario registrado con el correo')
  })
})
