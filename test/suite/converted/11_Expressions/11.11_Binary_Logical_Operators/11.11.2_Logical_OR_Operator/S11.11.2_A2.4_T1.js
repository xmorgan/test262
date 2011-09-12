// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @section 11.11.2
 * @path 11_Expressions/11.11_Binary_Logical_Operators/11.11.2_Logical_OR_Operator/S11.11.2_A2.4_T1.js
 * @description Checking with "="
 */

//CHECK#1
var x = true; 
if (((x = false) || x) !== false) {
  $ERROR('#1: var x = true; ((x = false) || x) === false');
}

//CHECK#2
var x = true; 
if ((x || (x = false)) !== true) {
  $ERROR('#2: var x = true; (x || (x = false)) === true');
}

