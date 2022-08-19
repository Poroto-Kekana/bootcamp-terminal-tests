import assert from "assert";
import mostProfitableDepartment from "../mostProfitableDepartment.js"

describe("Most Profitable Department", function(){
    it("Should check the most profitable day from sales data", function(){
        let salesdata = [
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
        ]
        assert.equal("Monday", mostProfitableDepartment(salesdata))   
    })

    it("Should check the most profitable day from sales data", function(){
        let salesdata = [
            {department : 'electronics', sales : 12006, day : 'Friday'},
            {department : 'electronics', sales : 16109, day : 'Saturday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
        ]
        assert.equal("Saturday", mostProfitableDepartment(salesdata))   
    })
})