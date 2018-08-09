/**
 * Created by Keshav on 08/03/2018.
 */
var requisitionStatus_page = function() {

    this.requisitionStatus_Header = function() {
        var requisitionStatus_Header =element(by.css("#react-app > div > div:nth-child(3) > div:nth-child(1)"));
        expect(requisitionStatus_Header.isPresent()).toBe(true,'Requisition Status Header Element Not found');

        return requisitionStatus_Header.getText();
    };


};
module.exports = new requisitionStatus_page();