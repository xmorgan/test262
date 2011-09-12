// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and
 * returns an Array object containing the results of the match, or null if the string did not match
 *
 * @section 15.10.6.2
 * @path 15_Native/15.10_RegExp_Objects/15.10.6_Properties_of_the_RegExp_Prototype_Object/15.10.6.2_RegExp.prototype.exec/S15.10.6.2_A1_T9.js
 * @description String is undefined variable and RegExp is /1|12/
 */

var __string;

//CHECK#1
__re = /1|12/;
if (__re.exec(__string) !== null) {
	$ERROR('#1: var __string; /1|12/.exec(__string) === null; function __string(){}. Actual: ' + (__re));
}

function __string(){};

