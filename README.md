# nightwatch_basic
A basic selenium structure for nightwatchJS. 

GETTING STARTED:

1.  Clone the project. Make sure you have nodeJS properly installed ('brew install node' on a MAC). 
    Check by running 'npm -version'. (This project uses version 2.7.5)

2.  Run 'npm install' to get the necessary dependencies while in project directory 'nightwatch_basic'. 

3.  Simply run 'gulp test' to kick off the tests. 

ADDING NEW TESTS:

This project follows the Selenium Page Object Model paradigm. 
Pages are stored in 'tests/functional/pages' and the tests are stored in 'tests/functional/tests'. 
NightwatchJS is written in nodeJS, so feel free to be creative and modify the project to your heart's content. 

MODIFYING NIGHTWATCH CONFIGURATIONS: 

Currently, chrome is set as default browser. See 'nightwatch.json' file to customize browser config, etc. 
Refer to detailed nightwatch documentation. 

Reference: http://nightwatchjs.org/guide#settings-file

RESOURCES

https://www.npmjs.com/package/npm

https://www.npmjs.com/package/gulp

https://www.npmjs.com/package/gulp-nightwatch

https://www.npmjs.com/package/selenium-standalone

http://nightwatchjs.org/
