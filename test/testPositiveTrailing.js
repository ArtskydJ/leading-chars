﻿var test = require('tap').test
var LeadingChars = require('../index.js')

var trailingFours = LeadingChars({
	len: 5,
	character: '4',
	leading: false
})
test('Test Trailing Fours', function(t) {
	t.plan(4)
	t.equal(trailingFours(),        '44444',   "Works with no args")
	t.equal(trailingFours(''),      '44444',   "Works with empty string")
	t.equal(trailingFours('00'),    '00444',   "Trailing works")
	t.equal(trailingFours(5555555), '5555555', "Does not cut down lengthy number")
	t.end()
})
