// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The [[Prototype]] property of the newly constructed object is set to the original RegExp prototype object, the one that is the initial value of RegExp.prototype
 *
 * @section 15.10.4.1
 * @path 15_Native/15.10_RegExp_Objects/15.10.4_The_RegExp_Constructor/S15.10.4.1_A7_T2.js
 * @description Checking [[Prototype]] property of the newly constructed object
 */

__re = new RegExp();

//CHECK#1
if (RegExp.prototype.isPrototypeOf(__re) !== true) {
	$ERROR('#1: __re = new RegExp(); RegExp.prototype.isPrototypeOf(__re) === true. Actual: ' + (RegExp.prototype.isPrototypeOf(__re)));
}


