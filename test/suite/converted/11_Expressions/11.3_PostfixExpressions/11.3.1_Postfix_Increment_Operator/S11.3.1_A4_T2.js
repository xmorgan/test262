// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x++ returns ToNumber(x)
 *
 * @section 11.3.1, 11.6.3
 * @path 11_Expressions/11.3_PostfixExpressions/11.3.1_Postfix_Increment_Operator/S11.3.1_A4_T2.js
 * @description Type(x) is number primitive or Number object
 */

//CHECK#1
var x = -0.1;
var y = x++;
if (y !== -0.1) {
  $ERROR('#1: var x = -0.1; var y = x++; y === -0.1. Actual: ' + (y));
}

//CHECK#2
var x = new Number(1.1);
var y = x++;
if (y !== 1.1) {
  $ERROR('#2: var x = new Number(1.1); var y = x++; y === 1.1. Actual: ' + (y));
}

