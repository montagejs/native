/*global require,exports,describe,it,expect,waits,runs */
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

var testPage = TestPageLoader.queueTest("native-input-range-test", function(testPage) {
    var test;
    beforeEach(function() {
        test = testPage.test;
    });

    describe("test/native-input-range/native-input-range-spec", function() {

        describe("InputRange", function() {
            it("can be created", function() {
                expect(test.nativeInputRange1).toBeDefined();
                expect(test.nativeInputRange).toBeDefined();
            });

            describe("min/max values", function() {
                it("can be read from the markup in Native InputRange", function() {
                    expect(test.nativeInputRange.min).toBe('-1');
                    expect(test.nativeInputRange.max).toBe('1');
                });
            });

            describe("value", function() {
                it("can be set on Native InputRange from the serialization", function() {
                    expect(test.nativeInputRange.value).toBe(1);
                    expect(test.nativeInputRange.element.value).toBe("1");
                });

                it("can be changed", function() {
                    expect(test.nativeInputRange1.value).toBe('50');

                    var eventInfo = {
                        target: test.nativeInputRange1.element,
                        clientX: test.nativeInputRange1.element.offsetLeft + 30,
                        clientY: test.nativeInputRange1.element.offsetTop + 5
                    };

                    testPage.clickOrTouch(eventInfo);

                    expect(test.nativeInputRange1.value).toBeGreaterThan(0);
                });

            });

        });
    });
});
