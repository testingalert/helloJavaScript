/**
 * Created by Keshav on 08/03/2018.
 */
var interviews_page = function() {

    this.interviews_Header = function() {
        var interviews_Header =element(by.css("#react-app > div > div:nth-child(3) > div:nth-child(1)"));
        expect(interviews_Header.isPresent()).toBe(true,'Interviews Header Element Not found');

        return interviews_Header.getText();
    };



};
module.exports = new interviews_page();