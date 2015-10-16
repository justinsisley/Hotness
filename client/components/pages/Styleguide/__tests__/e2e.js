module.exports = {
  'Styleguide': function(browser) {
    browser
    .url('http://localhost:8743/login')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=email]', 'user')
    .setValue('input[type=password]', 'password')
    .waitForElementVisible('button', 1000)
    .click('button')
    .pause(1000)
    .click('a[href="/styleguide"]')
    .assert.containsText('#root', 'Styleguide')
    .end();
  },
};
