/**
 * Created by Keshav on 08/03/2018.
 */

require('./commonHeader_page.js');

var employerLogin_page = function() {

    this.login_userName = function() {
        var login_userName = element(by.css("#id_username"));
        expect(login_userName.isPresent()).toBe(true,'Login Email input box Not found');
        return login_userName;
    };

    this.login_password = function() {
        var login_password = element(by.css("#id_password"));
        expect(login_password.isPresent()).toBe(true,'Login Password input box Not found');
        return login_password;
    };

    this.login_clickContinue  = function() {
        var login_clickContinue = element(by.css("body > div.outer-div > div > div.content > form > input[type='submit']:nth-child(3)"));
        expect(login_clickContinue.isPresent()).toBe(true,'Login Submit Button Not found');
        return login_clickContinue;

    };



};
module.exports = new employerLogin_page();