import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe("Count Registration Numbers", function(){
    it("Should count the number of reg numbers ", function(){
        let regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    })

    it("SHould count number of reg number", function(){
        let regCount = countRegNumber('CL 587 589, CA 596 452')
        assert.equal(regCount, 2)
    })
    
})

