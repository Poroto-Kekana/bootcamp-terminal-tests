import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

describe("Find Items with Over 20qty", function(){
    it("Should resturn Items with a quantity higher than 20", function(){
        let itemList = [
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        let results = [
            {name : 'bananas', qty : 27}
        ]
        assert.deepEqual(results, findItemsOver20(itemList))
    })

    it("Should resturn Items with a quantity higher than 20", function(){
        let itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ]

        let results = []
        assert.deepEqual(results, findItemsOver20(itemList))
    })
})
