module.exports = {
  'Dashboard': function(browser) {
    browser
    .url('http://localhost:8743/login')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=email]', 'testuser')
    .setValue('input[type=password]', 'testpassword')
    .waitForElementVisible('button', 1000)
    .click('button')
    .pause(1000)
    .assert.containsText('#root', 'Dashboard')
    .end();
  },
};
