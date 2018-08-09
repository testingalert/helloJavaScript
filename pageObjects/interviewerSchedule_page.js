/**
 * Created by Keshav on 08/03/2018.
 */
var interviewerSchedule_page = function() {

    this.interviewerSchedule_Header = function() {
        var interviewerSchedule_Header =element(by.css("#react-app > div > div:nth-child(3) > div > div > div.inline.info-container > div > div > div.center-inline.info-content-top-header"));
        expect(interviewerSchedule_Header.isPresent()).toBe(true,'Interviewer Schedule Header Element Not found');

        return interviewerSchedule_Header.getText();
    };




};
module.exports = new interviewerSchedule_page();