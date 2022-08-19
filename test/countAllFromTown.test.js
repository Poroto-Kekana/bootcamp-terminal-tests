import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe("Count Reg numbers from Stellenbosch", function(){
    it("Should return number of registration numbers from Stellenbosch", function() {
        let fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
    })

    it("Should return number of registration numbers from Kuilsriver", function() {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)
    })

})