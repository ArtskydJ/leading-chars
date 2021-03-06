﻿var test = require('tap').test
var LeadingChars = require('../index.js')

var leadingZeroes = LeadingChars({
	len: 6,
	overall: true,
	character: '0',
	leading: true
})
test('Test Leading Zeroes', function(t) {
	t.plan(5)
	t.equal(leadingZeroes(),                        '000000',    "Works with no args")
	t.equal(leadingZeroes(4),                       '000004',    "Works with numbers")
	t.equal(leadingZeroes('444'),                   '000444',    "Leading works")
	t.equal(leadingZeroes('444', {leading: false}), '444000',    "Options work")
	t.equal(leadingZeroes('444444444'),             '444444444', "Does not cut down lengthy string")
	t.end()
})
