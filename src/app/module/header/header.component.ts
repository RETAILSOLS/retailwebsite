import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'com-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.bindfunctions();
  }

  bindfunctions() {

    //=== 01. Main Menu
	function mainMenu() {
		var menuItems = $('.primary-menu'),
			navContainer = $('.header-navigation'),
			menuContainer = $('.site-nav-menu'),
			navToggler = $('.nav-toggler'),
			closeIcon = $('.nav-close'),
			LinkcloseIcon = $('.primary-menu .nav-link');

		// Adds toggle button to li items that have children
		menuItems.find('li a').each(function () {
			if ($(this).next().length > 0) {
				$(this).parent('li').append('<span class="dd-trigger"><i class="fal fa-plus"></i></span>');
			}
		});

		// expands the dropdown menu on each click
		menuItems.find('li .dd-trigger').on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('open').parent('li').children('ul').stop(true, true).slideToggle(350);
			$(this).find("i").toggleClass("fa-minus fa-plus");
		});

		// Open menu on toggler click
		navToggler.on('click', function (e) {
			menuContainer.toggleClass('menu-opened');
			e.preventDefault();
			$(this).toggleClass('menu-opened');
		});

		// Close menu on toggler click
		closeIcon.on('click', function (e) {
			menuContainer.removeClass('menu-opened');
			navToggler.removeClass('menu-opened');
			e.preventDefault();
		});

		// Close menu on toggler click
		LinkcloseIcon.on('click', function (e) {
			menuContainer.removeClass('menu-opened');
			navToggler.removeClass('menu-opened');
			e.preventDefault();
		});

		// check browser width in real-time
		function breakpointCheck() {
			var windoWidth = window.innerWidth;

			if (windoWidth <= 991) {
				navContainer.addClass('breakpoint-on');
			} else {
				navContainer.removeClass('breakpoint-on');
			}
		}

		breakpointCheck();
		$(window).on('resize', function () {
			breakpointCheck();
		});

		// Search Widget
		var searchBtn = $('.search-icon'),
			searchClose = $('.search-close'),
			searchFrom = $('.search-form');

		searchBtn.on('click', function (e) {
			searchFrom.toggleClass('opened');
			e.preventDefault();
		});

		searchClose.on('click', function (e) {
			searchFrom.removeClass('opened');
			e.preventDefault();
		});

		// One Page Active Class
		var scrollLink = $(".onepage-nav li a");
		$(window).scroll(function () {
			var scrollbarLocation = $(this).scrollTop();
			scrollLink.each(function () {
				var sectionOffset = $(this.hash).offset().top - 90;
				if (sectionOffset <= scrollbarLocation) {
					$(this).parent().addClass("current");
					$(this).parent().siblings().removeClass("current");
				}
			});
		});

		// // One Page Nav animation
		$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

				if (target.length) {

					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function () {

						var $target = $(target);
						$target.focus();

						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex', '-1');
							$target.focus();
						};
					});
				}
			}
		});
	}

	//=== 02. Preloader
	function preloader() {
		if ($('#preloader').length) {
			$('#preloader').delay(300).fadeOut(500);
		}
	}

	//=== 03. Portfolio Slider
	function portfolioSlider() {
		$('.portfolio-slider-one').slick({
			dots: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
			nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $('.portfolio-arrow'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}

	function portfolioSliderTwo() {
		$('.portfolio-slider-two').slick({
			dots: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
			nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
			speed: 1000,
			slidesToShow: 4,
			slidesToScroll: 1,
			appendArrows: $('.portfolio-arrow-two'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}

	function portfolioSliderThree() {
		$('.portfolio-slider-three').slick({
			dots: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
			nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}

	//=== 04. Team Slider
	function teamSlider() {
		$('.team-slider').slick({
			dots: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: false,
			speed: 1000,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}

	function teamSliderTwo() {
		$('.team-slider-two').slick({
			dots: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: true,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
			nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
			appendArrows: $('.team-slider-two-arrow'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}



	//=== 06. Testimonials
	function testimonialsSlider() {
		$('.testimonials-slider').slick({
			dots: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			arrows: false,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}


	//=== 07. Back to top
	function showBackToTop() {
		var scroll = $(window).scrollTop();

		if (scroll > 600) {
			$('.back-to-top').fadeIn(200)
		} else {
			$('.back-to-top').fadeOut(200)
		}
	}
	function backToTop() {
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();

			$('html, body').animate({
				scrollTop: 0,
			}, 1500);
		});
	}

	

	//=== 09. Brand Slider
	function brandSlider() {
		$('.brand-slider').slick({
			dots: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 5000,
			arrows: false,
			speed: 1000,
			slidesToShow: 5,
			slidesToScroll: 2,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
					}
				}
			]
		});
	}

	//=== 10. Easy Pie Chart
	function easyPieChart() {
		$('.piechart-active').on('inview', function (event, isInView) {
			if (isInView) {
				$(this).find('.counter').each(function () {
					var $this = $(this);
					$({
						Counter: 0
					}).animate({
						Counter: $this.text()
					}, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						},
					});
				});
				$(this).find('.chart').each(function () {
					var $this = $(this);
					$this.easyPieChart({
						size: '230',
						trackColor: '#f1f9ff',
						barColor: '#0c59db',
						lineWidth: 10,
						scaleLength: 0
					});
				});
				$(this).unbind('inview');
			}
		});
	}

	//=== 11. Product Gallery
	function productGallery() {
		var mainImage = $('.product-main-slider'),
			thumbImage = $('.product-thumb-slider');
		mainImage.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			asNavFor: thumbImage
		});

		thumbImage.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: mainImage,
			dots: false,
			arrows: false,
			focusOnSelect: true
		});
	}

	//=== 12. Video Popup
	function videoPopup() {
		$('.video-popup').magnificPopup({
			type: 'iframe'
		});
	}

	//===== 13. Product quantity
	function productQuantity() {
		$('.add').click(function () {
			if ($(this).prev().val()) {
				$(this).prev().val(+$(this).prev().val() + 1);
			}
		});
		$('.sub').click(function () {
			if ($(this).next().val() > 1) {
				if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
			}
		});
	}

	//===== 14. History Isotope
	function historyIsotope() {
		$('.history-section').imagesLoaded(function () {
			$('.history-isotope').isotope();
		});
	}

	//===== 15. Sticky Header
	function stickyHeader() {
		var sticky = $('header.sticky-header');
		var scrollFromtop = $(window).scrollTop();
		var scrollLimit = $('header').height() + 10;

		if (scrollFromtop < scrollLimit) {
			sticky.removeClass('sticky-on');
		} else {
			sticky.addClass('sticky-on');
		}
	}

	//===== 16. Syotimer
	function syotimerActive() {
		$('#simple_timer').syotimer({
			year: 2022,
			month: 5,
			day: 9,
			hour: 20,
			minute: 30,
		});
	}

	/*---------------------
	=== DOCUMENT READY  ===
	----------------------*/
	$(document).ready(function () {
		mainMenu();
		portfolioSlider();
		portfolioSliderTwo();
		portfolioSliderThree();
		teamSlider();
		teamSliderTwo();
		testimonialsSlider();
		// mainSlider();
		backToTop();
		brandSlider();
		easyPieChart();
		productGallery();
		videoPopup();
		productQuantity();
		historyIsotope();
		syotimerActive();
	});

	/*--------------------
	=== WINDOW SCROLL  ===
	----------------------*/
	$(window).on('scroll', function () {
		showBackToTop();
		stickyHeader();
	});


  }

}
