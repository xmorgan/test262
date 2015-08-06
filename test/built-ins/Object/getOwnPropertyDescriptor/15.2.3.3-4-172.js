// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-172
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (ReferenceError.prototype.constructor)
includes: [runTestCase.js]
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(ReferenceError.prototype, "constructor");
  if (desc.value === ReferenceError.prototype.constructor &&
      desc.writable === true &&
      desc.enumerable === false &&
      desc.configurable === true) {
    return true;
  }
 }
runTestCase(testcase);