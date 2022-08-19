import assert from "assert"
import yearsAgo from "../yearsAgo.js"

describe("Years Ago", function(){
    it("Should how many year ago is 1960", function(){
        assert.equal((new Date().getFullYear() - 1960), yearsAgo(1960))
    })

    it("Should how many year ago is 1991", function(){
        assert.equal((new Date().getFullYear() - 1991), yearsAgo(1991))
    })
})