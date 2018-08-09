/**
 * Created by Keshav on 08/03/2018.
 */
var updatesFromAdmin_page = function() {

    this.requisitionStatus_Header = function() {
        var dashboard_Header =element(by.xpath("//*[@id='main-header']/div[2]/div[1]/sub-header/div/div[1]/h1"));
        expect(dashboard_Header.isPresent()).toBe(true,'Dashboard Header Element Not found');

        return dashboard_Header.getText();
    };


};
module.exports = new updatesFromAdmin_page();