var xtend = require('xtend')
var defaultOpts = {
	len: 4,
	character: ' ',
	leading: true
}

module.exports = function LeadingChars(constructorOpts) {
	return function leadingChars(str, opts) {
		opts = xtend(defaultOpts, constructorOpts, opts)
		str = (str || '').toString()
		var result = ''
		if (opts.len>0)
			for(var i=0; i<opts.len-str.length; i++)
				result += opts.character
		else
			for(var i=0; i<Math.abs(opts.len); i++)
				result += opts.character
		return opts.leading? result + str : str + result
	}
}
