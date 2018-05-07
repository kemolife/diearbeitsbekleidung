/* working app js */
// chenge default buttons in slick.js
const slick = require('slick-carousel-browserify');

(function() {
    
    'use strict';
	
	let app = {
		animate	: {
			speed		: 200
		},
		nav		: {
			class		: '.navbar',
			toggler		: '.navbar-toggler',
			item		: '.navbar .nav-item',
			link		: '.navbar .nav-link',
			addClose	: 'navbar-close',
			addExtend	: 'navbar__extended',
			submenu		: {
				parent	: '.nav-item.has-submenu',
				sibling	: '.nav-item.has-submenu .nav-link',
				class	: '.nav__submenu',
				item	: '.nav__submenu--item',
				link	: '.nav__submenu--link'
			}
		},
		home	: {
			categories	: '.section__top-categories--list',
			topSales	: '.section__product--mobile .tab-pane',
			search		: {
				btn		: '.section__search .dropdown-toggle',
				link	: '.section__search .dropdown a',
				selected: '.section__search .dropdown .selected'
			}
		},
		header	: {
			lang		: {
				btn		: '.header__language .dropdown-toggle',
				link	: '.header__language .dropdown-menu a',
				selected: '.header__language .dropdown-menu .selected'
			},
			search		: {
				btn		: '.header__search--toggler',
				field	: '.header__search'
			}
		},
		// home beruf
		berufList			: '.section__beruf--list',
		/*homeCategories		: '.section__top-categories--list',*/
		//
		introSlider			: '.intro__slider'
		//
		/*homeTopSales		: '.section__product--mobile .tab-pane',*/
		// desk header search
		/*headerSearchBtn		: '.header__search--toggler',
		headerSearchField	: '.header__search'*/
	};
	
	/* mobile menu */
	$(app.nav.toggler).on('click', function() {
		//$(app.navClass).toggleClass(app.navExtended);
		$(this).closest('.col-mob').siblings('.col-mob').fadeToggle();
		$(this).toggleClass(app.nav.addClose);
		
		$('body').toggleClass('overflow-y');
		
		if($(app.nav.toggler).attr('aria-expanded', 'true')) {
			$(app.nav.submenu.parent).removeClass('show');
		}
	});
	
	$(app.nav.submenu.sibling).on('click', function(e) {
		e.preventDefault();
		
		if(window.innerWidth < 992) {
			$(this).closest(app.nav.submenu.parent).toggleClass('show').siblings().removeClass('show');
		}
	});
	
	// header lang select
	if($(app.header.lang.btn).siblings('.dropdown-menu').find('.selected').length) {
	   let $btnTitle = $(this).children('span');
		$btnTitle.text($(this).siblings('.dropdown-menu').find('.selected').text());
	}
	$(app.header.lang.link).on('click', function(e) {
		e.preventDefault();
		let $btn = $(this).closest('.dropdown-menu').siblings('.btn');
		$btn.children('span').text($(this).text());
	});
	
	// desk header search
	$(app.header.search.btn).on('click', function() {
		$(app.header.search.field).slideToggle(app.animate.speed);
	});
	
	// home advanced search
	$(app.home.search.btn).each(function() {
		if($(this).siblings('.dropdown-menu').find('.selected').length) {
		   let $btnTitle = $(this).children('.dropdown-title');
			$btnTitle.text($(this).siblings('.dropdown-menu').find('.selected').text());
		}
	});
	$(app.home.search.link).on('click', function(e) {
		e.preventDefault();
		let $btn = $(this).closest('.dropdown-menu').siblings('.btn');
		$btn.children('.dropdown-title').text($(this).text());
	});
	
	// intro slider
	if($(app.introSlider.length)) {
		slick($(app.introSlider), {
			slidesToShow: 1,
			dots: true,
			arrows: false,
			mobileFirst: true,
			responsive: [{
				breakpoint: 1199,
				settings: {
					arrows: true,
					dots: false
				}
			}]
		});
	}
	
	// home top/sales/new slider
	if($(app.home.topSales).length) {
		//console.log($(app.homeTopSales).length);
		$(app.home.topSales).each(function() {
		//console.log($(this));
			slick($(this).find('>.row'), {
				slidesToShow: 2,
				dots: true,
				arrows: false,
				mobileFirst: true
			});
		});
	}
	
	// home gender categories mobile slider
	//if(window.innerWidth < 1200) {
		if($(app.home.categories.length)) {
			slick($(app.home.categories), {
				variableWidth: true,
				slidesToShow: 1,
				adaptiveHeight: true,
				mobileFirst: true,
				responsive: [{
					breakpoint: 991,
					settings: {
						variableWidth: true,
						adaptiveHeight: true,
						slidesToShow: 2
					}
				},{
					breakpoint: 1199,
					settings: {
						variableWidth: true,
						adaptiveHeight: false,
						slidesToShow: 3
					}
				}]
			});
		}
	//}
	
	// beruf categories desktop slider
	if(window.innerWidth > 1199) {
		if($(app.berufList.length)) {
			slick($(app.berufList), {
				variableWidth: true,
				slidesToShow: 3
			});
		}
	}
	
})(console.log('app.js loaded'));