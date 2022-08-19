import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe("Count Reg numbers from Stellenbosch", function(){
    it("Should return number of registration numbers from Stellenbosch", function(){
    let regNumbers = 'CL 124,CY 567,CL 345, CJ 456,CL 341'
    let regStellies = countAllFromTown(regNumbers.startsWith('CL'))
    assert.equal(3, regStellies)
    })

    it("Should return number of registration numbers from Kuilsriver", function(){
        let regNumbers = 'CL 124,CY 567,CL 345, CJ 456,CL 341'
        let regKuilsriver = countAllFromTown(regNumbers.startsWith('CJ'))
        assert.equal(1, regKuilsriver)
    })
    


})