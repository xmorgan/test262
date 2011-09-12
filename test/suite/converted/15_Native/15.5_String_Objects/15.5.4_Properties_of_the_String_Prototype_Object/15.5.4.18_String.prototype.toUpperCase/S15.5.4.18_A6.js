// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toUpperCase has not prototype property
 *
 * @section 15.5.4.18, 13.2
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.18_String.prototype.toUpperCase/S15.5.4.18_A6.js
 * @description Checking String.prototype.toUpperCase.prototype
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.toUpperCase.prototype !== undefined) {
  $ERROR('#1: String.prototype.toUpperCase.prototype === undefined. Actual: '+String.prototype.toUpperCase.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////

