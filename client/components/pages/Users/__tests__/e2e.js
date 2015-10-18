module.exports = {
  'Users': function(browser) {
    browser
    .url('http://localhost:8743/login')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=email]', 'testuser')
    .setValue('input[type=password]', 'testpassword')
    .waitForElementVisible('button', 1000)
    .click('button')
    .pause(1000)
    .click('a[href="/users"]')
    .assert.containsText('#root', 'All Users')
    .end();
  },
};
