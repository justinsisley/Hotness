module.exports = {
  'Home': function(browser) {
    browser
    .url('http://localhost:8743/')
    .waitForElementVisible('body', 1000)
    .assert.containsText('#root', 'Welcome to React with Webpack')
    .end();
  },
};
