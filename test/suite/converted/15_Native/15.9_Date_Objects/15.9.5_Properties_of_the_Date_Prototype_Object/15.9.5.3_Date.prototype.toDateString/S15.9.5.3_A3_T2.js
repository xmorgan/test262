// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.toDateString property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @section 15.9.5.3
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.3_Date.prototype.toDateString/S15.9.5.3_A3_T2.js
 * @description Checking DontDelete attribute
 */

if (delete Date.prototype.toDateString.length  !== false) {
  $ERROR('#1: The Date.prototype.toDateString.length property has the attributes DontDelete');
}

if (!Date.prototype.toDateString.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.toDateString.length property has the attributes DontDelete');
}


