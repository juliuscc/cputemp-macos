#!/usr/bin/env node

const program = require('commander')
const { version } = require('./package.json')
const osxTemp = require('osx-temperature-sensor')

const logTemp = () => console.log(osxTemp.cpuTemperature())

program
	.version(version)
	.option(
		'-l, --log <seconds>',
		'Continuously log the temperature with intervals <seconds> long'
	)
	.parse(process.argv)

logTemp()
if (program.log) setInterval(logTemp, program.log)
