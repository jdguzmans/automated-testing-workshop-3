module.exports = {
  'Los estudiantes login falied': function (browser) {
    browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 8000)
        .click('.botonIngresar')
        .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
        .setValue('.cajaLogIn input[name="password"]', '1234')
        .click('.cajaLogIn .logInButton')
        .waitForElementVisible('.aviso.alert.alert-danger', 8000)
        .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
        .end()
  }
}
