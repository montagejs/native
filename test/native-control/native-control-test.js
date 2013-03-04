var Montage = require("montage").Montage;
var TestController = require("montage-testing/test-controller").TestController;

exports.NativeControlTest = Montage.create(TestController, {


    txt1: {
        value: null
    },

    txt2: {
        value: null
    },

    txt3: {
        value: null
    },

    textarea1: {
        value: null
    }

});
