
var request = require('graphql-request');

var util = require('util'),


  helperUtil = require('./../utilities/helperUtil'),
  requisitionStatus_page = require('./../pageObjects/requisitionStatus_page'),
  commonHeader_page = require('./../pageObjects/commonHeader_page'),
  JSONData = require('./../testData/testData_' + process.env.NODE_ENV+ '.json');

  //JSONData = require('./../testData/testData_' + process.env.NODE_ENV + '_' + process.env.NODE_USERTYPE + '.json');


describe('Test Requisition Status Page', function () {

    beforeEach(function () {
        helperUtil.envInfo();
    });

    afterEach(function () {

    });


    it('QTA-008 : Requisition Status', function () {

        browser.ignoreSynchronization = true;
        browser.get(JSONData.AutoTextList[0].BASE_URL);

        helperUtil.login(JSONData.AutoTextList[0].UserName, JSONData.AutoTextList[0].Password);
        commonHeader_page.commonHeader_Sidebar().click().then(function () {
            commonHeader_page.commonHeader_Sidebar_RequisitionStatus().click().then(function () {
                requisitionStatus_page.requisitionStatus_Header().getText().then(function (headerText) {
                    browser.driver.sleep(7000);
                    helperUtil.Reporter(headerText,JSONData.RequisitionStatus.RequisitionStatus_Header,"Requisition Status Page Name is "+headerText,"Requisition Status header Name should be "+JSONData.RequisitionStatus.RequisitionStatus_Header);
                    commonHeader_page.commonHeader_Logout().click();
                });
            });
        });
    });

});