/**
 * Created by Keshav on 08/03/2018.
 */

require('./commonHeader_page.js');

var allyChat_page = function() {

    this.allyChat_InputBox = function() {
        var allyChat_InputBox = element(by.css("#chat-container > span:nth-child(3) > div > div > div:nth-child(1) > input"));
        expect(allyChat_InputBox.isPresent()).toBe(true,'Ally Chat Input box Not found');
        return allyChat_InputBox;
    };

    this.allyChat_InputBox_SubmitButton = function() {
        var allyChat_InputBox_SubmitButton = element(by.css("#staticstroke"));
        expect(allyChat_InputBox_SubmitButton.isPresent()).toBe(true,'Ally Chat Input Box Submit Button Not found');
        return allyChat_InputBox_SubmitButton;
    };

    this.allyChat_Question_Intro = function() {
        var allyChat_Question_Intro = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(1) > p > span > span"));
        expect(allyChat_Question_Intro.isPresent()).toBe(true,'Ally intro input Not found');
        return allyChat_Question_Intro;
    };


    this.allyChat_Question_CellNumber = function() {
        var allyChat_Question_CellNumber = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(3) > p > span > span"));
        expect(allyChat_Question_CellNumber.isPresent()).toBe(true,'Ally Cell number input Not found');
        return allyChat_Question_CellNumber;
    };

    this.allyChat_Question_ZipCode = function() {
        var allyChat_Question_ZipCode = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(5) > p > span > span"));
        expect(allyChat_Question_ZipCode.isPresent()).toBe(true,'Ally ZipCode input Not found');
        return allyChat_Question_ZipCode;
    };

    this.allyChat_Question_AvailableJobs = function() {
        var allyChat_Question_AvailableJobs = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(7) > p > span > span"));
        expect(allyChat_Question_AvailableJobs.isPresent()).toBe(true,'Ally Available Jobs input Not found');
        return allyChat_Question_AvailableJobs;
    };

    this.allyChat_Question_LegallyAllowed = function() {
        var allyChat_Question_LegallyAllowed = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(9) > p > span > span"));
        expect(allyChat_Question_LegallyAllowed.isPresent()).toBe(true,'Ally Legally Allowed for Jobs input Not found');
        return allyChat_Question_LegallyAllowed;
    };

    this.allyChat_Question_AgeCheck = function() {
        var allyChat_Question_AgeCheck = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(11) > p > span > span"));
        expect(allyChat_Question_AgeCheck.isPresent()).toBe(true,'Ally Age Check input Not found');
        return allyChat_Question_AgeCheck;
    };

    this.allyChat_Question_JobType = function() {
        var allyChat_Question_JobType = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(13) > p > span > span"));
        expect(allyChat_Question_JobType.isPresent()).toBe(true,'Ally Available Jobs Type input Not found');
        return allyChat_Question_JobType;
    };

    this.allyChat_Question_ServSafeCertification = function() {
        var allyChat_Question_ServSafeCertification = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(15) > p > span > span"));
        expect(allyChat_Question_ServSafeCertification.isPresent()).toBe(true,'Ally ServSafe Certification input Not found');
        return allyChat_Question_ServSafeCertification;
    };

    this.allyChat_Question_NBAGames = function() {
        var allyChat_Question_NBAGames = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(17) > p > span > span"));
        expect(allyChat_Question_NBAGames.isPresent()).toBe(true,'Ally NBA Games input Not found');
        return allyChat_Question_NBAGames;
    };

    this.allyChat_Question_YearsOfExperience = function() {
        var allyChat_Question_NBAGames = element(by.css("#chat-container > span:nth-child(2) > div > div > div:nth-child(19) > p > span > span"));
        expect(allyChat_Question_NBAGames.isPresent()).toBe(true,'Ally Years of Experience input Not found');
        return allyChat_Question_NBAGames;
    };


};
module.exports = new allyChat_page();

