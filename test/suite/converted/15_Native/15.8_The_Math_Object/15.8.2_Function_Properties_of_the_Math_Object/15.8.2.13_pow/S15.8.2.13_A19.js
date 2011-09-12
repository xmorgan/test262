// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is -0 and y>0 and y is an odd integer, Math.pow(x,y) is -0
 *
 * @section 15.8.2.13
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.13_pow/S15.8.2.13_A19.js
 * @description Checking if Math.pow(x,y) equals to -0, where x is -0 and y>0
 */

// CHECK#1

x = -0;
y = new Array();
y[0] = 1;
y[1] = 111;
y[2] = 111111;
ynum = 3;

for (i = 0; i < ynum; i++)
{
	if (Math.pow(x,y[i]) !== -0)
	{
		$ERROR("#1: Math.pow(" + x + ", " + y[i] + ") !== -0");
	}
}

