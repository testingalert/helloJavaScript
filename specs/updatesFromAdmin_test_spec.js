
var request = require('graphql-request');

var util = require('util'),


  helperUtil = require('./../utilities/helperUtil'),
  updatesFromAdmin_page = require('./../pageObjects/updatesFromAdmin_page'),
  commonHeader_page = require('./../pageObjects/commonHeader_page'),
  JSONData = require('./../testData/testData_' + process.env.NODE_ENV+ '.json');


describe('Test Updates From Admin Page', function () {

    beforeEach(function () {
        helperUtil.envInfo();
    });

    afterEach(function () {

    });


    it('QTA-008 : Updates From Admin', function () {

        browser.ignoreSynchronization = true;
        browser.get(JSONData.AutoTextList[0].BASE_URL);

        helperUtil.login(JSONData.AutoTextList[0].UserName, JSONData.AutoTextList[0].Password);


    });

});