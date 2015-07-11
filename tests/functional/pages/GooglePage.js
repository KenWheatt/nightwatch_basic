module.exports = function (browser) {
    var STRINGS = {
        homeURL:"http://www.google.com",
        body: "body", 
        title: "Google", 
        searchTerm : "nightwatch",
        containsText: "The Night Watch"
    }

    var LOCATORS = {
        searchBox :"input[type=text]",
        submitButton:"button[name=btnG", 
        main: "#main"
    }

    var d = {
        TIMEOUT : 2000
    }


    this.goToGoogle = function () {
        return browser
            .url(STRINGS.homeURL)
            .waitForElementVisible(STRINGS.body, d.TIMEOUT)
            .assert.title(STRINGS.title)
            .assert.visible(LOCATORS.searchBox);
    }
    this.searchForNightwatch = function () {
        return browser
            .setValue(LOCATORS.searchBox, STRINGS.searchTerm)
            .waitForElementVisible(LOCATORS.submitButton, d.TIMEOUT)
            .click(LOCATORS.submitButton)
            .pause(d.TIMEOUT);
    }
    this.verifyNightwatchIsFound = function () {
        return browser
            .assert.containsText(LOCATORS.main, STRINGS.containsText);
    }
}
