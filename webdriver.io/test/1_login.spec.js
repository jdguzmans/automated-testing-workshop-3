/* global describe expect it browser */

describe('Register and login', function () {
  it('Creates an account', function () {
    browser.url('https://losestudiantes.co')
    browser.click('button=Cerrar')
    browser.waitForVisible('button=Ingresar', 5000)
    browser.click('button=Ingresar')

    const cajaSignUp = browser.element('.cajaSignUp')

    const firstNameInput = cajaSignUp.element('input[name="nombre"]')
    firstNameInput.click()
    firstNameInput.keys('Pruebas')

    const lastNameInput = cajaSignUp.element('input[name="apellido"]')
    lastNameInput.click()
    lastNameInput.keys('Automaticas')

    const emailInput = cajaSignUp.element('input[name="correo"]')
    emailInput.click()
    emailInput.keys('taller_tan_largo@hotmail.commmmmm')

    const programInput = cajaSignUp.element('select[name="idPrograma"]')
    programInput.selectByValue('59')

    const passwordInput = cajaSignUp.element('input[name="password"]')
    passwordInput.click()
    passwordInput.keys('12345678')

    const acceptTerms = cajaSignUp.element('input[name="acepta"]')
    acceptTerms.click()

    browser.click('button=Registrarse')
    browser.pause(4000)

    const alertText = browser.element('div[class="sweet-alert "]').element('h2').getText()
    expect(alertText).toBe('Registro exitoso!')
  })

  it('Tries to create an account with an already existing account', function () {
    browser.url('https://losestudiantes.co')
    browser.click('button=Cerrar')
    browser.waitForVisible('button=Ingresar', 5000)
    browser.click('button=Ingresar')

    const cajaSignUp = browser.element('.cajaSignUp')

    const firstNameInput = cajaSignUp.element('input[name="nombre"]')
    firstNameInput.click()
    firstNameInput.keys('Pruebas')

    const lastNameInput = cajaSignUp.element('input[name="apellido"]')
    lastNameInput.click()
    lastNameInput.keys('Automaticas')

    const emailInput = cajaSignUp.element('input[name="correo"]')
    emailInput.click()
    emailInput.keys('taller_tan_largo@hotmail.commmmmm')

    const programInput = cajaSignUp.element('select[name="idPrograma"]')
    programInput.selectByValue('59')

    const passwordInput = cajaSignUp.element('input[name="password"]')
    passwordInput.click()
    passwordInput.keys('12345678')

    const acceptTerms = cajaSignUp.element('input[name="acepta"]')
    acceptTerms.click()

    browser.click('button=Registrarse')
    browser.pause(4000)

    const alertText = browser.element('div[class="sweet-alert "]').element('div[class="text-muted lead"]').getText()
    expect(alertText).toBe('Error: Ya existe un usuario registrado con el correo \'taller_tan_largo@hotmail.commmmmm\'')
  })
})
