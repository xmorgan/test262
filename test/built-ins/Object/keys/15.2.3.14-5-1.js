// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-5-1
description: >
    Object.keys - own enumerable data property of 'O' is defined in
    returned array
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { };

        Object.defineProperty(obj, "prop", {
            value: 1003,
            enumerable: true,
            configurable: true
        });

        var arr = Object.keys(obj);

        return arr.hasOwnProperty(0) && arr[0] === "prop";
    }
runTestCase(testcase);