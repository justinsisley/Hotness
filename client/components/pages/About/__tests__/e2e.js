module.exports = {
  'About': function(browser) {
    browser
    .url('http://localhost:8743/about')
    .waitForElementVisible('body', 1000)
    .assert.containsText('#root', 'About')
    .end();
  },
};
