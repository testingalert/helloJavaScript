/**
 * Created by Keshav on 08/03/2018.
 */

var commonHeader_page = function() {

    this.commonHeader_Sidebar = function() {
        var commonHeader_Sidebar =element(by.css("#dropdown-menu > i"));
        expect(commonHeader_Sidebar.isPresent()).toBe(true,'Sidebar Element Not found');

        return commonHeader_Sidebar.getText();
    };

    this.commonHeader_Sidebar_ApplicantTracker = function() {
        var commonHeader_Sidebar_ApplicantTracker =element(by.css("#react-app > div > div.dashboard-header > div.dashboard-logo > span > div > div > ul > li:nth-child(1) > a"));
        expect(commonHeader_Sidebar_ApplicantTracker.isPresent()).toBe(true,'Sidebar Applicant Tracker Element Not found');

        return commonHeader_Sidebar_ApplicantTracker.getText();
    };

    this.commonHeader_Sidebar_Interviews = function() {
        var commonHeader_Sidebar_Interviews =element(by.css("#react-app > div > div.dashboard-header > div.dashboard-logo > span > div > div > ul > li:nth-child(2) > a"));
        expect(commonHeader_Sidebar_Interviews.isPresent()).toBe(true,'Sidebar Interviews Element Not found');

        return commonHeader_Sidebar_Interviews.getText();
    };

    this.commonHeader_Sidebar_RequisitionStatus = function() {
        var commonHeader_Sidebar_RequisitionStatus =element(by.css("#react-app > div > div.dashboard-header > div.dashboard-logo > span > div > div > ul > li:nth-child(3) > a"));
        expect(commonHeader_Sidebar_RequisitionStatus.isPresent()).toBe(true,'Sidebar Requisition Status Element Not found');

        return commonHeader_Sidebar_RequisitionStatus.getText();
    };

    this.commonHeader_Sidebar_Analytics = function() {
        var commonHeader_Sidebar_Analytics =element(by.css("#react-app > div > div.dashboard-header > div.dashboard-logo > span > div > div > ul > li:nth-child(4) > a"));
        expect(commonHeader_Sidebar_Analytics.isPresent()).toBe(true,'Sidebar Analytics Element Not found');

        return commonHeader_Sidebar_Analytics.getText();
    };

    this.commonHeader_Sidebar_InterviewerSchedule = function() {
        var commonHeader_Sidebar_InterviewerSchedule =element(by.css("#react-app > div > div.dashboard-header > div.dashboard-logo > span > div > div > ul > li:nth-child(5) > a"));
        expect(commonHeader_Sidebar_InterviewerSchedule.isPresent()).toBe(true,'Sidebar Interviewer Schedule Element Not found');

        return commonHeader_Sidebar_InterviewerSchedule.getText();
    };

    this.commonHeader_Logo = function() {
        var commonHeader_Logo =element(by.css("#react-app > div > div.dashboard-header > div.dashboard-logo > img"));
        expect(commonHeader_Logo.isPresent()).toBe(true,'Logo Element Not found');

        return commonHeader_Logo.getText();
    };

    this.commonHeader_DownloadManual = function() {
        var commonHeader_DownloadManual =element(by.css("#react-app > div > div.dashboard-header > div.user-utils > a.download-manual-link"));
        expect(commonHeader_DownloadManual.isPresent()).toBe(true,'Download Manual Element Not found');

        return commonHeader_DownloadManual.getText();
    };

    this.commonHeader_UserName = function() {
        var commonHeader_UserName =element(by.css("#react-app > div > div.dashboard-header > div.user-utils > div"));
        expect(commonHeader_UserName.isPresent()).toBe(true,'UserName Element Not found');

        return commonHeader_UserName.getText();
    };

    this.commonHeader_Logout = function() {
        var commonHeader_Logout =element(by.css("#react-app > div > div.dashboard-header > div.user-utils > a.logout_link > i"));
        expect(commonHeader_Logout.isPresent()).toBe(true,'Logout Element Not found');

        return commonHeader_Logout.getText();
    };






};
module.exports = new commonHeader_page();