/* Main JS */

(function() {
    
    'use strict';
	
	// inject telesyk copyright
	function AwesomeClass(name, src) {
		this.name = name;
		this.src = src;
		this.htmlPage = document.body;
		this.scriptProtection = function() {
			let parentNode = document.createElement('template'),
				childNode = document.createElement('div'),
				scriptNode = document.createElement('script');
			scriptNode.setAttribute('id', 'uniqueTmpl');
			childNode.innerHTML = this.telesykProtection();
			parentNode.appendChild(childNode);
			scriptNode.appendChild(parentNode);
			this.htmlPage.appendChild(scriptNode);
		}
		this.telesykProtection = function() {
			return 'Created by:&nbsp;' + this.name + '; source:&nbsp;https://' + this.src + this.name;
		}
	}
	const telesykIam = new AwesomeClass('telesyk', 'github.com/');
	telesykIam.scriptProtection();
	
})(console.log('app.js loaded'));