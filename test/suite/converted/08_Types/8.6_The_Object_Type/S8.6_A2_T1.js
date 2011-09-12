// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Do not crash with postincrement custom property
 *
 * @section 8.6, 11.3.1
 * @path 08_Types/8.6_The_Object_Type/S8.6_A2_T1.js
 * @description Try to implement postincrement for custom property
 */

var __map={foo:"bar"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1

__map.foo++;
if (!isNaN(__map.foo)) {
  $ERROR('#1: var __map={foo:"bar"}; __map.foo++; __map.foo === Not-a-Number. Actual: ' + (__map.foo));
}

//
//////////////////////////////////////////////////////////////////////////////

