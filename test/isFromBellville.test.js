import assert from "assert"
import isFromBellville from "../isFromBellville.js"

describe("Registrations from Bellville", function(){
    it("Should Check if CY 658 245 reg number is from Bellville", function (){
        assert.equal(isFromBellville("CY 658 245"), true)
    })

    it("Should Check if CJ 658git  reg number is from Bellville", function (){
        assert.equal(isFromBellville("CJ 658"), false)
    })

    
})