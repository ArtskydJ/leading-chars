﻿var test = require('tap').test
var LeadingChars = require('../index.js')

var appendDots = LeadingChars({
	len: 3,
	overall: false,
	character: '.',
	leading: false
})
test('Test appending dots', function(t) {
	t.plan(5)
	t.equal(appendDots(),                        '...',        "Works with no args")
	t.equal(appendDots(''),                      '...',        "Works with empty string")
	t.equal(appendDots('Hey'),                   'Hey...',     "Trailing strings works")
	t.equal(appendDots('Hey', {character: '!'}), 'Hey!!!',     "Options work")
	t.equal(appendDots(5555555),                 '5555555...', "Trailing numbers works")
	t.end()
})
