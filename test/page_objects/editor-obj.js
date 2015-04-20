/**
 * Created by colinjlacy on 4/18/15.
 */
var Editor = function() {
	this.inputTitle = element(by.id('post-title'));
	this.enterTitle = function(keys) {
		this.inputTitle.sendKeys(keys);
	};
	this.inputSubheading = element(by.id('subheading'));
	this.enterSubheading = function(keys) {
		this.inputSubheading.sendKeys(keys);
	};
	this.inputContent = element.all(by.model('html')).get(0);
	this.enterContent = function(keys) {
		this.inputContent.sendKeys(keys);
	};
	this.submit = element(by.css('.btn.btn-primary'));
	this.clickSubmit = function() {
		this.submit.click();
	};
	this.toolbar = element(by.css('.ta-toolbar'));
	return this;
};

module.exports = new Editor();