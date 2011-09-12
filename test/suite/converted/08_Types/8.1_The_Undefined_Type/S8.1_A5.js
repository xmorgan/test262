// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function argument that isn't provided has a value of undefined
 *
 * @section 8.1
 * @path 08_Types/8.1_The_Undefined_Type/S8.1_A5.js
 * @description Call function without provided argument
 */

///////////////////////////////////////
//
function test(arg) {
// Check and make sure that arg is not undefined
	if (typeof(arg) !== "undefined") {
    $ERROR('#1: Function argument that isn\'t provided has a value of undefined. Actual: ' + (typeof(arg)));
  }
}

test();
//
////////////////////////////////////////

