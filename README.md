# fanc
fanc is a javascript library including some useful tiny functions.

## Install
fanc can be installed vi npm, like:

	npm install -S fanc

## Use in your code.
You can require each function separately (which is recommended):

	var isint32 = require('fanc/isint32');
	var toint32 = require('fanc/toint32');

And you can use it as an ordinary function:

	if (!isint32(n)) {
		n = toint32(n);
	}
	console.log(n)

Or, you can require the entire library at once:

	var fanc = require('fanc');

Then, you will be able to use any functions like below code. 

	if (!fanc.isint32(n)) {
		n = fanc.toint32(n);
	}
	console.log(n)

