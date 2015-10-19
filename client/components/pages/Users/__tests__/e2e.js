module.exports = {
  'Users': function(browser) {
    browser
    .url('http://localhost:8743/login')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=email]', 'testuser')
    .setValue('input[type=password]', 'testpassword')
    .click('button')
    .pause(1000)
    .click('a[href="/users"]')
    .assert.containsText('h1', 'All Users')
    .waitForElementVisible('ul', 2000)
    .end();
  },
};
