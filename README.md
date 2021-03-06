leading-chars
=============

> Creates leading or trailing characters in a string or number

[![Build Status](https://travis-ci.org/ArtskydJ/leading-chars.svg?branch=master)](https://travis-ci.org/ArtskydJ/leading-chars)

# examples

Leading Zeroes:

```js
var leadingZeroes = LeadingChars({
	len: 8,
	overall: true,
	character: '0',
	leading: true
})

leadingZeroes('5f39a6') //returns '005f39a6'
leadingZeroes('')       //returns '00000000'
leadingZeroes('ftw')    //returns '00000ftw'
```

Indent with one tab:

```js
var indent = LeadingChars({
	len: 1,
	overall: false,
	character: '\t',
	leading: true
})

indent('Hey what is up')  //returns '\tHey what is up'
indent()                  //returns '\t'
indent('blah', {len: 2})  //returns '\t\tblah'
```

Append full stops: (Sometimes referred to as 'periods')

```js
var addFullStop = LeadingChars({
	len: 1,
	overall: false,
	character: '.',
	leading: false
})

addFullStop('Hey what is up') //returns 'Hey what is up.'
addFullStop(null)             //returns '.'
addFullStop('blah', {len: 3}) //returns 'blah...'
```

Fill with J's:

```js
var fillWithJs = LeadingChars({
	len: 4,
	overall: true,
	character: 'J',
	leading: true
})

fillWithJs('a')     //returns 'JJJa'
fillWithJs('aaa')   //returns 'Jaaa'
fillWithJs('aaaaa') //returns 'aaaaa'
```

Prefix 2 E's:

```js
var prefixTwoEs = LeadingChars({
	len: 2,
	overall: false,
	character: 'E',
	leading: true
})

prefixTwoEs('a')     //returns 'EEa'  
prefixTwoEs('aaa')   //returns 'EEaaa'  
prefixTwoEs('aaaaa') //returns 'EEaaaaa'
```

Leading Smileys:

```js
var leadingSmileys = LeadingChars({
	len: 2,
	overall: false,
	character: ':) ',
	leading: true
})

leadingSmileys('lol')  //returns ':) :) lol'  
leadingSmileys('wat')  //returns ':) :) wat'  
leadingSmileys('uber') //returns ':) :) uber'
```

Trailing Frowneys:

```js
var trailingFrowneys = LeadingChars({
	len: 1,
	overall: false,
	character: ' :(',
	leading: true
})

trailingFrowneys('no')     //returns 'no :('  
trailingFrowneys('so sad') //returns 'so sad :('  
trailingFrowneys('um why') //returns 'um why :('
```
# api

```js
var LeadingChars = require('leading-chars')
```

# `LeadingChars(options)`

LeadingChars is a constructor function that takes options and exports the user function.

If you don't understand these notes, check out the [examples](#examples), they should make it more clear.

- `options` is an object with the following properties:
	- `len` is a number for how many characters to fill or concatenate (depending on `overall`).
	- `overall` is a boolean. It specifies whether the `character` is filled up to `len`, (`true`), or if the `character` is concatenated `len` times, (`false`).
	- `character` is the character that is added to the string or number.
	- `leading` is a boolean of whether `character` should be added to the beginning or the end. If you want the concatenated characters to lead the string or number, set this to `true`. If you want them characters to trail, set this to `false`.
- Returns: [`constructed(input, options)`](#constructedinput-options)

# constructed(input, options)

- `input` is the string or number that is appended to.

- `options` are the same as `LeadingChars()`s [options](#options), and they take precedence.

# install

Install with [NPM](https://nodejs.org/download)

	npm install leading-chars
	

# license

[VOL](http://veryopenlicense.com)
