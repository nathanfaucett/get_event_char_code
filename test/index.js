var tape = require("tape"),
    getEventCharCode = require("..");


tape("getEventCharCode(event) should return event char code", function(assert) {
    assert.equal(getEventCharCode({
        charCode: 13
    }), 13);
    assert.end();
});
