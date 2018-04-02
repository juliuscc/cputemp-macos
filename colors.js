const reset = '\x1b[0m'

const cyan = '\x1b[36m'
const blue = '\x1b[34m'
const green = '\x1b[32m'
const yellow = '\x1b[33m'
const red = '\x1b[31m'

const limits = [
	{ min: Number.NEGATIVE_INFINITY, max: 20, color: cyan },
	{ min: 20, max: 30, color: blue },
	{ min: 30, max: 45, color: green },
	{ min: 45, max: 65, color: yellow },
	{ min: 65, max: Number.POSITIVE_INFINITY, color: red }
]

module.exports = { reset, limits }
