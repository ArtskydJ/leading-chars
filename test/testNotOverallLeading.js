﻿var test = require('tap').test
var LeadingChars = require('../index.js')

var addTabChar = LeadingChars({
	len: 1,
	overall: false,
	character: '\t',
	leading: true
})
test('Test negative lengths', function(t) {
	t.plan(5)
	t.equal(addTabChar(),                '\t',        "Works with no args")
	t.equal(addTabChar(''),              '\t',        "Works with empty string")
	t.equal(addTabChar('00'),            '\t00',      "Leading strings works")
	t.equal(addTabChar('00', {len: 2}),  '\t\t00',    "Extra options work")
	t.equal(addTabChar(5555555),         '\t5555555', "Leading Numbers works")
	t.end()
})
