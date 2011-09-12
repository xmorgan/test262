// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The form (?! Disjunction ) specifies a zero-width negative lookahead.
 * In order for it to succeed, the pattern inside Disjunction must fail to match at the current position.
 * The current position is not advanced before matching the sequel
 *
 * @section 15.10.2.8
 * @path 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.8_Atom/S15.10.2.8_A2_T7.js
 * @description Execute /(\.(?!com|org)|\/)/.exec("ah/info") and check results
 */

__executed = /(\.(?!com|org)|\/)/.exec("ah/info");

__expected = ['/', '/'];
__expected.index = 2;
__expected.input = "ah/info";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(\\.(?!com|org)|\\/)/.exec("ah/info"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(\\.(?!com|org)|\\/)/.exec("ah/info"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(\\.(?!com|org)|\\/)/.exec("ah/info"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(\\.(?!com|org)|\\/)/.exec("ah/info"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


