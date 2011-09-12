// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * [[HasInstance]] returns a boolean value indicating whether Value delegates behaviour to this object
 *
 * @section 8.6.2, 11.8.6
 * @path 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2_A4.js
 * @description Check that the obj instance of Object, but not instance
 *  of Function, String, Number, Array
 */

var __obj={};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__obj instanceof Object)) {
  $ERROR('#1: var __obj={}; (__obj instanceof Object) === true. Actual: ' + ((__obj instanceof Object)));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj instanceof Function) {
  $ERROR('#2: var __obj={}; (__obj instanceof Function) === false. Actual: ' + ((__obj instanceof Function)));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__obj instanceof String) {
  $ERROR('#3: var __obj={}; (__obj instanceof String) === false. Actual: ' + ((__obj instanceof String)));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__obj instanceof Number) {
  $ERROR('#4: var __obj={}; (__obj instanceof Number) === false. Actual: ' + ((__obj instanceof Number)));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__obj instanceof Array) {
  $ERROR('#5: var __obj={}; (__obj instanceof Array) === false. Actual: ' + ((__obj instanceof Array)));
}
//
//////////////////////////////////////////////////////////////////////////////

