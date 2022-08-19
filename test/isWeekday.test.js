import assert from "assert";
import isWeekday from "../isWeekday.js";

describe("WeekDay Function", function(){
    it("Check if Saturday is a Weekday", function(){
        assert.equal(isWeekday('Saturday'), false);
    })

    it("Check if Monday is a Weekday", function(){
        assert.equal(isWeekday("Monday"), true)
    })
})

