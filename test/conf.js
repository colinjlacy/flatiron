/**
 * Created by colinjlacy on 4/18/15.
 */
exports.config = {
	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome'
	},

	specs: './specs/**/*.js',
	framework: 'jasmine2',
	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true // Use colors in the command line report.
	}
};