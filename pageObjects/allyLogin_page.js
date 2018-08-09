/**
 * Created by Keshav on 08/03/2018.
 */

require('./commonHeader_page.js');

var allyLogin_page = function() {

    this.allyLogin_employerName = function() {
        var allyLogin_employerName = element(by.css("body > form:nth-child(5) > div > input"));
        expect(allyLogin_employerName.isPresent()).toBe(true,'Ally Login Employer input box Not found');
        return allyLogin_employerName;
    };

    this.allyLogin_loadChatWidget_SubmitButton = function() {
        var allyLogin_loadChatWidget_SubmitButton = element(by.css("body > form:nth-child(5) > div.button > button"));
        expect(allyLogin_loadChatWidget_SubmitButton.isPresent()).toBe(true,'Ally Login Chat Widget Submit Not found');
        return allyLogin_loadChatWidget_SubmitButton;
    };


};
module.exports = new allyLogin_page();


//input[@class='webwidget_input']