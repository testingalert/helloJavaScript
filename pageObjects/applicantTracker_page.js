/**
 * Created by Keshav on 08/03/2018.
 */
var applicantTracker_page = function() {

    this.applicantTracker_Header = function() {
        var applicantTracker_Header =element(by.css("#react-app > div > div:nth-child(3) > div:nth-child(1)"));
        expect(applicantTracker_Header.isPresent()).toBe(true,'Applicant Tracker Header Element Not found');

        return applicantTracker_Header.getText();
    };

};
module.exports = new applicantTracker_page();