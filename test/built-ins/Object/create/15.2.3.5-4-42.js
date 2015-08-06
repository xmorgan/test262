// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-42
description: >
    Object.create - value of one property in 'Properties' is null
    (8.10.5 step 1)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.create({}, {
                prop: null 
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }

    }
runTestCase(testcase);