module.exports = {
  '404': function(browser) {
    browser
    .url('http://localhost:8743/missing-page')
    .waitForElementVisible('body', 1000)
    .assert.containsText('#root', 'Page not found')
    .end();
  },
};
