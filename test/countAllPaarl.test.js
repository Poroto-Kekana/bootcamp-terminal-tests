import assert from "assert";
import allPaarl from "../countAllPaarl.js";
import countAllPaarl from "../countAllPaarl.js"

describe("Count all Paarl", function(){
    it("Should count number of registrations from paarl", function(){
        let regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        let paarlReg = allPaarl(regNumbers)
        assert.equal(2, paarlReg.length)
    })

    it("Should give registration number", function(){
        let regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        let paarlReg = allPaarl(regNumbers)
        assert.equal("CJ 67890", paarlReg[1])
    })
})
