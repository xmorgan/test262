// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-157
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', test the [[Value]] field of 'desc' which is less
    than value of the length property is defined into 'O' with
    deleting properties with large index named (15.4.5.1 step 3.f)
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 1];

        Object.defineProperties(arr, {
            length: {
                value: 1
            }
        });
        return arr.length === 1 && !arr.hasOwnProperty("1") && arr[0] === 0;
    }
runTestCase(testcase);