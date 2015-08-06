// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-525
description: >
    ES5 Attributes - fail to update [[Get]] attribute of accessor
    property ([[Get]] is a Function, [[Set]] is undefined,
    [[Enumerable]] is false, [[Configurable]] is false) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var getFunc = function () {
            return 1001;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: undefined,
            enumerable: false,
            configurable: false
        });

        var result1 = obj.prop === 1001;
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        try {
            Object.defineProperty(obj, "prop", {
                get: undefined
            });

            return false;
        } catch (e) {
            var result2 = obj.prop === 1001;
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

            return result1 && result2 && desc1.get === getFunc && desc2.get === getFunc && e instanceof TypeError;
        }
    }
runTestCase(testcase);