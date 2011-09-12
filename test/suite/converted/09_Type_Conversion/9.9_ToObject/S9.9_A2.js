// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * ToObject conversion from null value must throw TypeError
 *
 * @section 9.9
 * @path 09_Type_Conversion/9.9_ToObject/S9.9_A2.js
 * @description Trying to convert null to Object
 */

// CHECK#1
try{
  null['foo'];
  $ERROR('#1.1: null[\'foo\'] throw TypeError. Actual: ' + (null['foo']));
} 
catch(e){
  if((e instanceof TypeError) !== true){
    $ERROR('#1.2: null[\'foo\'] must throw TypeError. Actual: ' + (e));
  }
}

// CHECK#2
try{
  with(null) x = 2;
  $ERROR('#2.1: with(null) x = 2 must throw TypeError. Actual: x === . Actual: ' + (x));
} 
catch(e){
  if((e instanceof TypeError) !== true){
    $ERROR('#2.2: with(null) x = 2 must throw TypeError. Actual: ' + (e));
  }
}

// CHECK#3
try{  
  for(var y in null) y = 2;
  $ERROR('#3.1:  for(var y in null) y = 2 must throw TypeError. Actual: y === . Actual: ' + (y));
} 
catch(e){
  if((e instanceof TypeError) !== true){
    $ERROR('#3.2:  for(var y in null) y = 2 must throw TypeError. Actual: ' + (e));
  }
}

// CHECK#4
try{
  for(var z in 'bbb'.match(/aaa/)) z = 2;
  $ERROR('#4.1: for(var z in \'bbb\'.match(/aaa/)) z = 2 must throw TypeError. Actual: z === . Actual: ' + (z));
} 
catch(e){
  if((e instanceof TypeError) !== true){
    $ERROR('#4.2: for(var z in \'bbb\'.match(/aaa/)) z = 2 must throw TypeError. Actual: ' + (e));
  }
}

