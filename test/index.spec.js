const chai = require("chai"),
    should = chai.should(),
    assert = require("assert"),
    test = "bar";

    describe("test equals bar", function() {
        it("should be string of bar", function() {
            assert.equal(test, "bar", "test equals `bar`");
        })
    })

    //assert.equal(test, "bar", "test equals to the `bar`");
