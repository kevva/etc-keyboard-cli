#!/usr/bin/env node
'use strict';
const meow = require('meow');
const etcKeyboard = require('etc-keyboard');

meow([`
	Usage
	  $ etc-keyboard
	  us
`]);

etcKeyboard().then(layout => console.log(layout));
