// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-1-3
description: >
    Object.keys does not throw TypeError if type of first param is not
    Object (string)
includes: [runTestCase.js]
---*/

function testcase() {
    Object.keys('abc');
    return true;
}
runTestCase(testcase);