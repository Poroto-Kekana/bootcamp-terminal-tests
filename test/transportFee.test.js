import assert from "assert";
import transportFee from "../transportFee.js";

describe("Transprt Fee", function(){
    it("Should advice fee amount for Afternoon Shift", function(){
        assert.equal(transportFee('afternoon'), 'R10')
    })

    it("Should advice fee amount for Night Shift", function(){
        assert.equal(transportFee('nightshift'), 'free')
    })
})