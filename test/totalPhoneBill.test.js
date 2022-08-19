import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe("Total Phone Bill", function(){
    it("Should calculate the bill for making 'call, sms, call, sms, sms'", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })
    
    it("Should calculate the bill for making 'sms, sms'", function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
})