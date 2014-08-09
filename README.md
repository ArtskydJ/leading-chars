leading-chars
=============

[![Build Status](https://travis-ci.org/ArtskydJ/leading-chars.svg?branch=master)](https://travis-ci.org/ArtskydJ/leading-chars)
[![Github Repository](http://img.shields.io/badge/Repository-Github-brightgreen.svg)](https://github.com/ArtskydJ/leading-chars)

- [Description](#description)
- [Install](#install)
- [Require](#require)
- [LeadingChars(opts)](#leadingcharsopts)
	- [opts](#opts)
		- [len](#len-number)
		- [character](#character-string)
		- [leading](#description)
- [constructed(str, opts)](#description)
	- [str](#str-string-or-number)
	- [opts](#opts-1)
- [Use](#use)
- [License](#license)

##Description

Creates leading or trailing characters in a string or number

##Install
	npm install leading-chars
	
##Require
	var LeadingChars = require('leading-chars')

##LeadingChars(opts)
LeadingChars is a constructor function that takes options and exports the user function.

##opts

- `Opts` has the following properties:
	- `len` is a number of the length (see examples).
	- `overall` is a boolean. It specifies whether the `character` is filled up to `len`, (`true`,) or if the `character` is concatenated `len` times, (`false`).
	- `character` is the character that is added to the input string or number.
	- `leading` is a boolean of whether the character should be added to the beginning or the end.

###len (Number)
Length can be positive or negative.

**E.g. len:4, character:'0', leading:true**

	a -> 000a  
	aaa -> 0aaa  
	aaaaa -> aaaaa  

**E.g. len:-2, character:'0', leading:true**

	a -> 00a  
	aaa -> 00aaa  
	aaaaa -> 00aaaaa

###character (String)
What character is appended; In the previous examples it was '0'

This can be multiple characters in length, e.g. 'hi'

###leading (Boolean)
The module name can be slightly misleading. The module is also capable of trailing characters.

**Leading: true (Leading)**

	a -> 000a  
	aaa -> 0aaa

**Leading: false (Trailing)**

	a -> a000  
	aaa -> aaa0 

##constructed(str, opts)
###str (String or Number)
This is the string that is appended to.
###opts
Same as 'LeadingChars()' [opts](#opts)

##Use
	//Create a template
	var leadingZeroes = LeadingChars({
		len: 8,
		character: '0',
		leading: true
	})

	leadingZeroes('5f39a6') //returns '005f39a6'
	leadingZeroes('')       //returns '00000000'
	leadingZeroes('ftw')    //returns '00000ftw'

	var indent = LeadingChars({
		len: -1,
		character: '\t',
		leading: true
	})
	indent('Hey what is up')  //returns '\tHey what is up'
	indent()                  //returns '\t'
	indent('blah', {len: -2}) //returns '\t\tblah'

##License

[MIT](http://opensource.org/licenses/MIT)
