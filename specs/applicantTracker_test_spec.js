
var util = require('util'),


  helperUtil = require('./../utilities/helperUtil'),
  commonHeader_page = require('./../pageObjects/commonHeader_page'),
  applicantTracker_page = require('./../pageObjects/applicantTracker_page'),
  JSONData = require('./../testData/testData_' + process.env.NODE_ENV+ '.json');

  //JSONData = require('./../testData/testData_' + process.env.NODE_ENV + '_' + process.env.NODE_USERTYPE + '.json');


describe('Test Employer Login Page', function () {

    beforeEach(function () {
        helperUtil.envInfo();
        browser.ignoreSynchronization = true;
        browser.get(JSONData.AutoTextList[0].BASE_URL);
        helperUtil.login(JSONData.AutoTextList[0].UserName, JSONData.AutoTextList[0].Password);
    });

    afterEach(function () {
        commonHeader_page.commonHeader_Logout().click().then(function () {
            browser.driver.sleep(7000);
        });
    });


    it('QTA-008 : Employer Login', function () {

        commonHeader_page.commonHeader_Sidebar().click().then(function () {
            commonHeader_page.commonHeader_Sidebar_ApplicantTracker().click().then(function () {
                applicantTracker_page.applicantTracker_Header().getText().then(function (headerText) {
                    browser.driver.sleep(7000);
                    helperUtil.Reporter(headerText,JSONData.ApplicationTracker.ApplicationTracker_Header,"Applicant Tracker Page Name is "+headerText,"Applicant Tracker Header name should be "+JSONData.ApplicationTracker.ApplicationTracker_Header);
                });
            });
        });
    });

});