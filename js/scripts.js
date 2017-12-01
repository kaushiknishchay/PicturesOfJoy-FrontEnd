$(document).ready(function () {
	'use strict';
	/*-----------------------------------------------------------------------------------*/
	/*	SCROLL NAVIGATION HIGHLIGHT
	 /*-----------------------------------------------------------------------------------*/
	var headerWrapper = parseInt($('.navbar').height(), 10);
	var header_height = $('.navbar').height();
	var shrinked_header_height = 70;
	var firstStyle =
			{
				'padding-top': '' + shrinked_header_height + 'px',
				'margin-top': '-' + shrinked_header_height + 'px'
			};
	$('.onepage section').css(firstStyle);
	var secondStyle =
			{
				'padding-top': '' + header_height + 'px',
				'margin-top': '-' + header_height + 'px'
			};
	$('.onepage section:first-of-type').css(secondStyle);
	var offsetTolerance = -(header_height);
	//Detecting user's scroll
	$(window).scroll(function () {
		//Check scroll position
		var scrollPosition = parseInt($(this).scrollTop(), 10);
		//Move trough each menu and check its position with scroll position then add current class
		$('.onepage .navbar ul.navbar-nav a').each(function () {
			var thisHref = $(this).attr('href');
			var thisTruePosition = parseInt($(thisHref).offset().top, 10);
			var thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
			if (scrollPosition >= thisPosition) {
				$('.current').removeClass('current');
				$('.navbar ul.navbar-nav a[href=' + thisHref + ']').parent('li').addClass('current');
			}
		});
		//If we're at the bottom of the page, move pointer to the last section
		var bottomPage = parseInt($(document).height(), 10) - parseInt($(window).height(), 10);
		if (scrollPosition == bottomPage || scrollPosition >= bottomPage) {
			$('.current').removeClass('current');
			$('.onepage .navbar ul.navbar-nav a:last').parent('li').addClass('current');
		}
	});
	/*-----------------------------------------------------------------------------------*/
	/*	MENU
	 /*-----------------------------------------------------------------------------------*/
	$('.js-activated').dropdownHover({
		instantlyCloseOthers: false,
		delay: 0
	}).dropdown();
	$('.btn.responsive-menu').on('click', function () {
		$(this).toggleClass('opn');
	});
	$('.onepage .navbar .nav li a').on('click', function () {
		$('.navbar .navbar-collapse.in').collapse('hide');
		$('.btn.responsive-menu').removeClass('opn');
	});
	$('.offset').css('padding-top', $('.navbar').height() + 'px');
	/*-----------------------------------------------------------------------------------*/
	/*	STICKY FILTER HIGHLIGHT
	 /*-----------------------------------------------------------------------------------*/
	var stickyWrapper = parseInt($('#sticky-filter').height(), 10);
	var stickyOffsetTolerance = 70;
	//Detecting user's scroll
	$(window).scroll(function () {
		//Check scroll position
		var stickyScrollPosition = parseInt($(this).scrollTop(), 10);
		//Move trough each menu and check its position with scroll position then add current class
		$('#sticky-filter a').each(function () {
			var stickyThisHref = $(this).attr('href');
			var stickyThisTruePosition = parseInt($(stickyThisHref).offset().top, 10);
			var stickyThisPosition = stickyThisTruePosition - stickyWrapper - stickyOffsetTolerance;
			if (stickyScrollPosition >= stickyThisPosition) {
				$('.current').removeClass('current');
				$('#sticky-filter a[href=' + stickyThisHref + ']').parent('li').addClass('current');
			}
		});
		//If we're at the bottom of the page, move pointer to the last section
		var stickyBottomPage = parseInt($(document).height(), 10) - parseInt($(window).height(), 10);
		if (stickyScrollPosition == stickyBottomPage || stickyScrollPosition >= stickyBottomPage) {
			$('.current').removeClass('current');
			$('#sticky-filter a:last').parent('li').addClass('current');
		}
	});
	/*-----------------------------------------------------------------------------------*/
	/*	LOCALSCROLL
	 /*-----------------------------------------------------------------------------------*/
	$('.navbar, .scroll').localScroll({
		hash: true
	});
	$('#sticky-filter ul').localScroll({
		offset: {top: -134, left: 0}
	});
	/*-----------------------------------------------------------------------------------*/
	/*	STICKY FILTER
	 /*-----------------------------------------------------------------------------------*/
	$("#sticky-filter").sticky({topSpacing: 70, className: "sfilter", responsiveBreakpoint: 0});
	/*-----------------------------------------------------------------------------------*/
	/*	CUBE PORTFOLIO
	 /*-----------------------------------------------------------------------------------*/
	$('.cbp-onepage-grid').cubeportfolio({
		filters: '#js-filters-full-width',
		loadMore: '#cbp-onepage-grid-more',
		loadMoreAction: 'click',
		layoutMode: 'mosaic',
		sortToPreventGaps: true,
		defaultFilter: '*',
		animationType: 'quicksand',
		gapHorizontal: 10,
		gapVertical: 10,
		gridAdjustment: 'responsive',
		mediaQueries: [{
			width: 768,
			cols: 3
		}, {
			width: 767,
			cols: 1
		}],
		caption: 'fadeIn',
		displayType: 'lazyLoading',
		displayTypeSpeed: 100,

		// lightbox
		lightboxDelegate: '.cbp-lightbox',
		lightboxGallery: true,
		lightboxTitleSrc: 'data-title',
		lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
		// singlePageInline
		singlePageInlineDelegate: '.cbp-singlePageInline',
		singlePageInlinePosition: 'top',
		singlePageDeeplinking: true,
		singlePageInlineInFocus: true,
		offsetValue: 100,
		singlePageInlineCallback: function (url, element) {
			// to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
			var t = this;
			$.ajax({
				url: url,
				type: 'GET',
				dataType: 'html',
				timeout: 10000
			}).done(function (result) {
				t.updateSinglePageInline(result);
			}).fail(function () {
				t.updateSinglePageInline('AJAX Error! Please refresh the page!');
			});
		}
	});
	$('#js-grid-full-width').cubeportfolio({
		filters: '#js-filters-full-width',
		loadMore: '#js-grid-full-width-more',
		loadMoreAction: 'click',
		layoutMode: 'mosaic',
		sortToPreventGaps: true,
		defaultFilter: '*',
		animationType: 'quicksand',
		gapHorizontal: 0,
		gapVertical: 0,
		gridAdjustment: 'responsive',
		mediaQueries: [{
			width: 2560,
			cols: 6
		}, {
			width: 1920,
			cols: 5
		}, {
			width: 1450,
			cols: 4
		}, {
			width: 1024,
			cols: 3
		}, {
			width: 768,
			cols: 2
		}, {
			width: 650,
			cols: 1
		}],
		caption: 'fadeIn',
		displayType: 'lazyLoading',
		displayTypeSpeed: 100,

		// lightbox
		lightboxDelegate: '.cbp-lightbox',
		lightboxGallery: true,
		lightboxTitleSrc: 'data-title',
		lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
		// singlePageInline
		singlePageInlineDelegate: '.cbp-singlePageInline',
		singlePageInlinePosition: 'top',
		singlePageDeeplinking: true,
		singlePageInlineInFocus: true,
		offsetValue: 100,
		singlePageInlineCallback: function (url, element) {
			// to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
			var t = this;
			$.ajax({
				url: url,
				type: 'GET',
				dataType: 'html',
				timeout: 10000
			}).done(function (result) {
				t.updateSinglePageInline(result);
			}).fail(function () {
				t.updateSinglePageInline('AJAX Error! Please refresh the page!');
			});
		}
	});
	$('#js-grid-mosaic').cubeportfolio({
		filters: '#js-filters-mosaic',
		loadMore: '#js-grid-mosaic-more',
		loadMoreAction: 'click',
		layoutMode: 'mosaic',
		sortToPreventGaps: true,
		defaultFilter: '*',
		animationType: 'quicksand',
		gapHorizontal: 0,
		gapVertical: 0,
		gridAdjustment: 'responsive',
		mediaQueries: [{
			width: 768,
			cols: 4
		}, {
			width: 767,
			cols: 2
		}],
		caption: 'fadeIn',
		displayType: 'lazyLoading',
		displayTypeSpeed: 100,

		// lightbox
		lightboxDelegate: '.cbp-lightbox',
		lightboxGallery: true,
		lightboxTitleSrc: 'data-title',
		lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
		// singlePageInline
		singlePageInlineDelegate: '.cbp-singlePageInline',
		singlePageInlinePosition: 'top',
		singlePageDeeplinking: true,
		singlePageInlineInFocus: true,
		offsetValue: 100,
		singlePageInlineCallback: function (url, element) {
			// to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
			var t = this;
			$.ajax({
				url: url,
				type: 'GET',
				dataType: 'html',
				timeout: 10000
			}).done(function (result) {
				t.updateSinglePageInline(result);
			}).fail(function () {
				t.updateSinglePageInline('AJAX Error! Please refresh the page!');
			});
		}
	});
	/*-----------------------------------------------------------------------------------*/
	/*	OWL CAROUSEL
	 /*-----------------------------------------------------------------------------------*/
	/*-----------------------------------------------------------------------------------*/
	/*	FITVIDS VIDEO
	 /*-----------------------------------------------------------------------------------*/
	$('.player').fitVids();
	/*-----------------------------------------------------------------------------------*/
	/*	IMAGE ICON HOVER
	 /*-----------------------------------------------------------------------------------*/
	$('.icon-overlay a').prepend('<span class="icn-more"></span>');
	/*-----------------------------------------------------------------------------------*/
	/*	REVOLUTION
	 /*-----------------------------------------------------------------------------------*/
	$('.tp-fullscreen').revolution({
		delay: 9000,
		startwidth: 1170,
		startheight: 750,
		hideThumbs: 0,
		hideArrowsOnMobile: "on",
		fullWidth: "on",
		fullScreen: "on",
		soloArrowLeftHOffset: 0,
		soloArrowRightHOffset: 0,
		fullScreenOffsetContainer: ".mode-sm:not(.onepage) .navbar, .mode-xs:not(.onepage) .navbar"
	});

	/*-----------------------------------------------------------------------------------*/
	/*	BACKGROUND VIDEO PARALLAX
	 /*-----------------------------------------------------------------------------------*/
	$('#video-office').backgroundVideo({
		$outerWrap: $('.outer-wrap'),
		pauseVideoOnViewLoss: false,
		parallaxOptions: {
			effect: 1.9
		}
	});
	/*-----------------------------------------------------------------------------------*/
	/*	PARALLAX MOBILE
	 /*-----------------------------------------------------------------------------------*/
	if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
		$('.parallax').addClass('mobile');
	}
	/*-----------------------------------------------------------------------------------*/
	/*	DATA REL
	 /*-----------------------------------------------------------------------------------*/
	$('a[data-rel]').each(function () {
		$(this).attr('rel', $(this).data('rel'));
	});

	/*-----------------------------------------------------------------------------------*/
	/* WIDTH CLASS
	 /*-----------------------------------------------------------------------------------*/
	assign_bootstrap_mode();
	$(window).resize(function () {
		assign_bootstrap_mode();
	});
	function assign_bootstrap_mode() {
		var width = $(window).width();
		var mode = '';
		if (width < 768) {
			mode = "mode-xs";
		} else if (width < 992) {
			mode = "mode-sm";
		} else if (width < 1200) {
			mode = "mode-md";
		} else if (width > 1200) {
			mode = "mode-lg";
		}
		$("body").removeClass("mode-xs").removeClass("mode-sm").removeClass("mode-md").removeClass("mode-lg").addClass(mode);
	}

	/*-----------------------------------------------------------------------------------*/
	/*	ISOTOPE GRID VIEW COL3
	 /*-----------------------------------------------------------------------------------*/
	var $gridviewcol3 = $('.grid-view.col3 .isotope');
	$gridviewcol3.isotope({
		itemSelector: '.grid-view-post',
		transitionDuration: '0.6s',
		masonry: {
			columnWidth: '.col-sm-6.col-md-4'
		},
		layoutMode: 'masonry'
	});
	$(window).resize(function () {
		$gridviewcol3.isotope({
			masonry: {
				columnWidth: '.col-sm-6.col-md-4'
			}
		});
	});
	$gridviewcol3.imagesLoaded(function () {
		$gridviewcol3.isotope('layout');
	});
	/*-----------------------------------------------------------------------------------*/
	/*	ISOTOPE GRID VIEW COL2
	 /*-----------------------------------------------------------------------------------*/
	var $gridviewcol2 = $('.grid-view.col2 .isotope');
	$gridviewcol2.isotope({
		itemSelector: '.grid-view-post',
		transitionDuration: '0.6s',
		masonry: {
			columnWidth: '.col-md-6.col-sm-12'
		},
		layoutMode: 'masonry'
	});
	$(window).resize(function () {
		$gridviewcol2.isotope({
			masonry: {
				columnWidth: '.col-md-6.col-sm-12'
			}
		});
	});
	$gridviewcol2.imagesLoaded(function () {
		$gridviewcol2.isotope('layout');
	});
	/*-----------------------------------------------------------------------------------*/
	/*	ISOTOPE PORTFOLIO GRID
	 /*-----------------------------------------------------------------------------------*/
	var $portfoliogrid = $('.image-grid .isotope');
	$portfoliogrid.isotope({
		itemSelector: '.item',
		transitionDuration: '0.7s',
		masonry: {
			columnWidth: $portfoliogrid.width() / 12
		},
		layoutMode: 'masonry'
	});
	$(window).resize(function () {
		$portfoliogrid.isotope({
			masonry: {
				columnWidth: $portfoliogrid.width() / 12
			}
		});
	});
	$portfoliogrid.imagesLoaded(function () {
		$portfoliogrid.isotope('layout');
	});
});
/*-----------------------------------------------------------------------------------*/
/*	LOADING
 /*-----------------------------------------------------------------------------------*/
$(window).load(function () {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('#preloader .textload').delay(0).fadeOut('slow');
	$('body').delay(350).css({
		'overflow': 'visible'
	});
});

/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
 /*-----------------------------------------------------------------------------------*/
function init() {
	"use strict";
	window.addEventListener('scroll', function (e) {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
				shrinkOn = 100,
				header = document.querySelector(".navbar");
		if (distanceY > shrinkOn) {
			classie.add(header, "fixed");
		} else {
			if (classie.has(header, "fixed")) {
				classie.remove(header, "fixed");
			}
		}
	});
}
window.onload = init();
$(window).resize(function () {
	$('.offset').css('padding-top', $('.navbar').height() + 'px');
}); 