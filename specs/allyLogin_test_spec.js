
var request = require('graphql-request');

var util = require('util'),


  helperUtil = require('./../utilities/helperUtil'),
  allyLogin_page = require('./../pageObjects/allyLogin_page'),
  allyChat_page = require('./../pageObjects/allyChat_page'),
  JSONData = require('./../testData/testData_' + process.env.NODE_ENV+ '.json');


describe('Test Login Page', function () {

    beforeEach(function () {
        helperUtil.envInfo();
    });

    afterEach(function () {

    });

    it('QTA-009 : ChatBot', function () {

        browser.ignoreSynchronization = true;
        browser.get(JSONData.AutoTextList[0].ALLY_URL);
        browser.driver.sleep(2000);

        allyLogin_page.allyLogin_employerName().sendKeys("QA_Automation");
        allyLogin_page.allyLogin_loadChatWidget_SubmitButton().click().then(function () {
            browser.driver.sleep(7000);
            var keys = ["Y", helperUtil.randomNumber(), "94063", "1", "Y", "Y", "FT", "Y", "4","2+","3","2","Keshav Kashyap",helperUtil.dummyEmailAddress(),1];
            //as(keys);
            helperUtil.chat(keys);
        });


























       /* switch (allyChat_page.allyChat_Question_Intro().getText()){
            case (JSONData.Query.intro): {
                allyChat_page.allyChat_InputBox().sendKeys("Y");
                allyChat_page.allyChat_InputBox_SubmitButton().click();
                browser.driver.sleep(7000);

                var mobileNumber = helperUtil.randomNumber();
                allyChat_page.allyChat_InputBox().sendKeys(mobileNumber);
                allyChat_page.allyChat_InputBox_SubmitButton().click();
                browser.driver.sleep(7000);

                allyChat_page.allyChat_InputBox().sendKeys("94063");
                allyChat_page.allyChat_InputBox_SubmitButton().click();
                browser.driver.sleep(7000);

                allyChat_page.allyChat_InputBox().sendKeys("1");
                allyChat_page.allyChat_InputBox_SubmitButton().click();
                browser.driver.sleep(7000);

                allyChat_page.allyChat_InputBox().sendKeys("Y");
                allyChat_page.allyChat_InputBox_SubmitButton().click();
                browser.driver.sleep(7000);

                allyChat_page.allyChat_InputBox().sendKeys("Y");
                allyChat_page.allyChat_InputBox_SubmitButton().click();
                browser.driver.sleep(7000);

                allyChat_page.allyChat_InputBox().sendKeys("FT");
                allyChat_page.allyChat_InputBox_SubmitButton().click();
                browser.driver.sleep(7000);

                allyChat_page.allyChat_InputBox().sendKeys("Y");
                allyChat_page.allyChat_InputBox_SubmitButton().click();
                browser.driver.sleep(7000);


            }
            case (JSONData.Query.sjdnvsj): {

            }
        }*/

       /* if(allyChat_page.allyChat_Question_Intro().getText()===JSONData.Query.intro){

            var keys = ["Y", helperUtil.randomNumber(), "94063", "1", "Y", "Y", "FT", "Y", "4"];
            as(keys);
/!*
            allyChat_page.allyChat_InputBox().sendKeys("Y");
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);

            var mobileNumber = helperUtil.randomNumber();
            allyChat_page.allyChat_InputBox().sendKeys(mobileNumber);
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);

            allyChat_page.allyChat_InputBox().sendKeys("94063");
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);

            allyChat_page.allyChat_InputBox().sendKeys("1");
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);

            allyChat_page.allyChat_InputBox().sendKeys("Y");
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);

            allyChat_page.allyChat_InputBox().sendKeys("Y");
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);

            allyChat_page.allyChat_InputBox().sendKeys("FT");
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);

            allyChat_page.allyChat_InputBox().sendKeys("Y");
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);

            allyChat_page.allyChat_InputBox().sendKeys("4");
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);*!/


        }
        else{
            console.log(">>>>>>>>>>>");
        }*/




    });

    function as(keys) {
        keys = keys || [];
        keys.forEach(function (key) {
            console.log(key);
            allyChat_page.allyChat_InputBox().sendKeys(key);
            allyChat_page.allyChat_InputBox_SubmitButton().click();
            browser.driver.sleep(7000);
        });
    }

});