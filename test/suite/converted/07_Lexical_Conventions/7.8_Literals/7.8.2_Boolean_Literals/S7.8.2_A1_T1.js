// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Literal :: BooleanLiteral
 *
 * @section 7.8.2
 * @path 07_Lexical_Conventions/7.8_Literals/7.8.2_Boolean_Literals/S7.8.2_A1_T1.js
 * @description BooleanLiteral :: true
 */

//CHECK#1
if (Boolean(true) !== true) {
  $ERROR('#1: Boolean(true) === true. Actual: Boolean(true) === ' + (Boolean(true)));
} 

