import assert from "assert";
import fromWhere from "../fromWhere.js"

describe("From Where", function(){
    it("should check where 'CA' registration is from", function(){
        assert.equal(fromWhere('CA'), "Cape Town")
    })

    it("should check where 'CC' registration is from", function(){
        assert.equal(fromWhere('CC'), "Some other place!")
    })
})