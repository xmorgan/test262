// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Since applying the "call" method to Function constructor themself leads to creating a new function instance, the second argument must be a valid function body
 *
 * @section 15.3, 10.2.3, 15.3.2.1
 * @path 15_Native/15.3_Function_Objects/S15.3_A2_T2.js
 * @description Checking if executing "Function.call(this, "var #x  = 1;")" fails
 */

//CHECK#
try{
  Function.call(this, "var #x  = 1;");
} catch(e){
  if (!(e instanceof SyntaxError)) {
  	$ERROR('#1: function body must be valid');
  }
}    


