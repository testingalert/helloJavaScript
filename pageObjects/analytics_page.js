/**
 * Created by Keshav on 08/03/2018.
 */
var analytics_page = function() {

    this.analytics_Header = function() {
        var analytics_Header =element(by.css("#react-app > div > div:nth-child(3) > div:nth-child(1)"));
        expect(analytics_Header.isPresent()).toBe(true,'Analytics Header Element Not found');

        return analytics_Header.getText();
    };

};
module.exports = new analytics_page();