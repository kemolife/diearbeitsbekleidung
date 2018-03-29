/* Main JS */

(function() {
    
    'use strict';
	
	let app = {
		navClass:		'.navbar',
		navExtended:	'navbar__extended',
		navToggler:		'.navbar-toggler',
		navClose:		'navbar-close'
	};
	
	/*$(app.navToggler).toggle(function() {
		$(app.navClass).addClass(app.navExtended);
		$(this).closest('.col-4').siblings('.col-4').fadeOut();
		$(this).addClass(app.navClose);
	}, function() {
		$(app.navClass).removeClass(app.navExtended);
		$(this).closest('.col-4').siblings('.col-4').fadeIn();
		$(this).removeClass(app.navClose);
	});*/
	
	$(app.navToggler).on('click', function() {
		$(app.navClass).toggleClass(app.navExtended);
		$(this).closest('.col-4').siblings('.col-4').fadeToggle();
		$(this).toggleClass(app.navClose);
		$('body').toggleClass('overflow-y');
	});
	/*$('.'+app.navClose).on('click', function() {
		$(this).removeClass(app.navClose).closest('.col-4').siblings('.col-4').fadeIn();
	});*/
	
	// inject telesyk copyright
	/*function AwesomeClass(name, src) {
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
	telesykIam.scriptProtection();*/
	
})(console.log('app.js loaded'));