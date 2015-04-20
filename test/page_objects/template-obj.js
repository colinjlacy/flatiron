/**
 * Created by colinjlacy on 4/18/15.
 */
var Template = function() {
	this.navItems = element.all(by.css('nav a'));
	this.clickNav = function(int) {
		this.navItems.get(int).click();
	};
	return this;
};

module.exports = new Template();