#!/usr/bin/env node

const program = require('commander')
const { version } = require('./package.json')
const osxTemp = require('osx-temperature-sensor')
const { reset, limits } = require('./colors')

program
	.version(version)
	.option(
		'-l, --log <milliseconds>',
		'continuously log the temperature with intervals <milliseconds> long'
	)
	.option('-c, --color', 'color code the output depending on temperature')
	.option(
		'-f, --fahrenheit',
		'present the temperature using Fahrenheit instead of Celsius'
	)
	.parse(process.argv)

const celsiusToFahrenheit = c => Math.round(c * 1.8 + 32)
const convertObjectToFahrenheit = ({ main, cores, max }) => ({
	main: celsiusToFahrenheit(main),
	cores: cores.map(celsiusToFahrenheit),
	max: celsiusToFahrenheit(max)
})

const getTemp = program.fahrenheit
	? () => convertObjectToFahrenheit(osxTemp.cpuTemperature())
	: () => osxTemp.cpuTemperature()

const logWithColor = temps => {
	const correctLimits = program.fahrenheit ? celsiusToFahrenheit : arg => arg

	const color = limits.find(
		limit =>
			correctLimits(limit.min) <= temps.main &&
			correctLimits(limit.max) >= temps.main
	).color
	return console.log(color, temps, reset)
}

const logTemp = temp => (program.color ? logWithColor(temp) : console.log(temp))

logTemp(getTemp())
if (program.log) setInterval(() => logTemp(getTemp()), program.log)
