// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-360-1
description: >
    ES5 Attributes - Updating indexed data property 'P' whose
    attributes are [[Writable]]: false, [[Enumerable]]: true,
    [[Configurable]]: true to an accessor property, 'A' is an Array
    object (8.12.9 - step 9.b.i)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = [];

        Object.defineProperty(obj, "0", {
            value: 2010,
            writable: false,
            enumerable: true,
            configurable: true
        });
        var desc1 = Object.getOwnPropertyDescriptor(obj, "0");

        function getFunc() {
            return 20;
        }
        Object.defineProperty(obj, "0", {
            get: getFunc
        });
        var desc2 = Object.getOwnPropertyDescriptor(obj, "0");

        return desc1.hasOwnProperty("value") && desc2.hasOwnProperty("get") &&
            desc2.enumerable === true && desc2.configurable === true &&
            obj[0] === 20 && typeof desc2.set === "undefined" && desc2.get === getFunc;
    }
runTestCase(testcase);