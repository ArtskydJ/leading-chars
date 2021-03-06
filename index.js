var xtend = require('xtend')
var defaultOptions = {
	len: 4,
	overall: true,
	character: ' ',
	leading: true
}

module.exports = function LeadingChars(constructorOptions) {
	return function leadingChars(strOrNum, options) {
		options = xtend(defaultOptions, constructorOptions, options)
		options.len = Math.abs(options.len)

		var str = strOrNum? strOrNum.toString() : ''
		var result = ''

		for(var i=0; options.overall? i<options.len-str.length : i<options.len; i++)
			result += options.character
		return options.leading? result + str : str + result
	}
}
