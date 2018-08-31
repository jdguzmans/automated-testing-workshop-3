/* global describe it browser expect */

describe('Teacher lookup', function () {
  it('Does not find a teacher that does not exist and alerts user about it', function () {
    browser.pause(500)
    browser.url('https://losestudiantes.co')
    browser.pause(500)
    browser.click('button=Cerrar')

    const navbar = browser.element('.navbar')
    navbar.element('span[class="Select-multi-value-wrapper"]').click()
    navbar.element('input[role="combobox"]').keys('afsasfasafs')

    browser.pause(5000)
    const t = navbar.element('div[class="Select-menu-outer"]').getText()
    expect(t).toBe('No se encontraron profesores ni materias')
  })

  it('Succesfully finds a teacher that does exist', function () {
    browser.pause(100)
    browser.url('https://losestudiantes.co')
    browser.pause(100)
    browser.click('button=Cerrar')

    const navbar = browser.element('.navbar')
    navbar.element('span[class="Select-multi-value-wrapper"]').click()
    navbar.element('input[role="combobox"]').keys('Juan Pablo Rodriguez')

    browser.pause(5000)
    const t = navbar.element('div[class="Select-menu-outer"]').getText()
    expect(t).toBe('Juan Pablo Rodriguez Sanchez - Ingeniería Civil y Ambiental')
  })
})
