import assert from "assert";
import regCheck from "../regCheck.js"

describe("Registration Check", function(){
    it("should check if '5566 L' is from MP", function(){
        assert.equal(regCheck('5566 L', 'MP'), false);
    })

    it("should check if 'ERT 123 EC' is from GP", function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    })
    
})