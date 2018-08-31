module.exports = {
    'Teacher lookup': function (browser) {
      browser
          .url('https://losestudiantes.co/')
          .click('.botonCerrar')
          .click('.navbar span[class="Select-multi-value-wrapper"]')
          .setValue('.navbar input[role="combobox"]', 'Juan Pablo Rodriguez')
          .pause(5000)
          .click('.navbar .Select div[class="Select-menu-outer"]')
          .end()
    }
  }
  