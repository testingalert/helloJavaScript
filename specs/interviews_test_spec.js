
var request = require('graphql-request');

var util = require('util'),


  helperUtil = require('./../utilities/helperUtil'),
  commonHeader_page = require('./../pageObjects/commonHeader_page'),
  interviews_page = require('./../pageObjects/interviews_page'),
  JSONData = require('./../testData/testData_' + process.env.NODE_ENV+ '.json');


describe('Test Interviews Page', function () {

    beforeEach(function () {
        helperUtil.envInfo();
    });

    afterEach(function () {

    });


    it('QTA-008 : Interviews', function () {

        browser.ignoreSynchronization = true;
        browser.get(JSONData.AutoTextList[0].BASE_URL);

        helperUtil.login(JSONData.AutoTextList[0].UserName, JSONData.AutoTextList[0].Password);
        commonHeader_page.commonHeader_Sidebar().click().then(function () {
            commonHeader_page.commonHeader_Sidebar_Interviews().click().then(function () {
                interviews_page.interviews_Header().getText().then(function (headerText) {
                    browser.driver.sleep(7000);
                    helperUtil.Reporter(headerText,JSONData.Interview.Interview_Header,"Interview Dashboard Page Name is "+headerText,"Interview Name should be "+JSONData.AutoTextList[0].Interview_Header);
                    commonHeader_page.commonHeader_Logout().click();
                });
            });
        });
    });


});