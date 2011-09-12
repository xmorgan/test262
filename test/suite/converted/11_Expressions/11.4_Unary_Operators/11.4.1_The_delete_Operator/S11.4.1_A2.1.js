// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) is not Reference, return true
 *
 * @section 11.4.1
 * @path 11_Expressions/11.4_Unary_Operators/11.4.1_The_delete_Operator/S11.4.1_A2.1.js
 * @description Checking primitive value and Object value cases
 */

//CHECK#1
if (delete 1 !== true) {
  $ERROR('#1: delete 1 === true');
}

//CHECK#2
if (delete new Object() !== true) {
  $ERROR('#2: delete new Object() === true');
}


