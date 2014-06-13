leading-chars
=============

[![Build Status](https://travis-ci.org/ArtskydJ/leading-chars.svg?branch=master)](https://travis-ci.org/ArtskydJ/leading-chars)

- [Description](https://github.com/ArtskydJ/leading-chars#description)
- [Install](https://github.com/ArtskydJ/leading-chars#install)
- [Require](https://github.com/ArtskydJ/leading-chars#require)
- [LeadingChars(opts)](https://github.com/ArtskydJ/leading-chars#leadingcharsopts)
	- [opts](https://github.com/ArtskydJ/leading-chars#opts)
		- [len](https://github.com/ArtskydJ/leading-chars#len-number)
		- [character](https://github.com/ArtskydJ/leading-chars#character-string)
		- [leading](https://github.com/ArtskydJ/leading-chars#description)
- [constructed(str, opts)](https://github.com/ArtskydJ/leading-chars#description)
	- [str](https://github.com/ArtskydJ/leading-chars#str-string-or-number)
	- [opts](https://github.com/ArtskydJ/leading-chars#opts-1)
- [Use](https://github.com/ArtskydJ/leading-chars#use)

##Description

Creates leading or trailing characters in a string or number

##Install
	npm install leading-chars
	
##Require
	var LeadingChars = require('leading-chars')

##LeadingChars(opts)
LeadingChars is a constructor function that takes options and exports the user function.

##opts

Here are descriptions of the properties
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
Same as 'LeadingChars()' [opts](https://github.com/ArtskydJ/leading-chars#opts)

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
