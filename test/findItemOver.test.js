import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe("Find Items over Threshold", function(){
    it("Should find Item over 10", function(){
        let itemList = [
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        let results = [
            {name : 'bananas', qty : 27}
        ]
        assert.deepEqual(results, findItemsOver(itemList, 10))
    })

    it("Should resturn Items over 20", function(){
        let itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ]

        let results = []
        assert.deepEqual(results, findItemsOver(itemList, 20))
    })
})
