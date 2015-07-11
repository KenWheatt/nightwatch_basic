module.exports = {
    "Demo-test Google" : function (browser) {
        browser
            .page.GooglePage().goToGoogle()
            .page.GooglePage().searchForNightwatch()
            .page.GooglePage().verifyNightwatchIsFound()
            .end();
    }
};