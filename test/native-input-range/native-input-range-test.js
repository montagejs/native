var Montage = require("montage").Montage;
var TestController = require("montage-testing/test-controller").TestController;

exports.NativeInputRangeTest = Montage.create(TestController, {

    scroll: {
        value: null
    },

    nativeInputRange1: {
        value: null
    },

    nativeInputRange: {
        value: null
    },

    scroll_range: {
        value: null
    }

});
