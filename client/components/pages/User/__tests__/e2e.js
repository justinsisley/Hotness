module.exports = {
  'User': function(browser) {
    browser
    .url('http://localhost:8743/login')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=email]', 'testuser')
    .setValue('input[type=password]', 'testpassword')
    .click('button')
    .pause(1000)
    .click('a[href="/users"]')
    .waitForElementVisible('ul', 2000)
    .pause(2000)
    .click('a[href="/users/1"]')
    .waitForElementVisible('h1', 2000)
    .end();
  },
};
