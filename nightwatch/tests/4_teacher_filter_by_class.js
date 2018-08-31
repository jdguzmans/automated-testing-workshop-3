module.exports = {
    'Teacher filter by class': function (browser) {
      browser
          .url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-civil-y-ambiental/profesores/juan-pablo-rodriguez-sanchez')
          .pause(5000)
          .click('.columnLeft form input[name="id:ICYA3401"]')
          .click('.columnLeft form input[name="id:ICYA4138"]')
        }
  }
  