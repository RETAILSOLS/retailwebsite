import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.bindslider();
  }

  bindslider() {

    //=== 08. Banner slider
	function mainSlider() {
		var slider = $('.banner-slider-active');
		slider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-banner:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		slider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-banner[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		slider.slick({
			autoplay: true,
			autoplaySpeed: 6000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
			nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}

  $(document).ready(function () {
		mainSlider();
	});


	$ (window).ready (function () {
		setTimeout (function () {
			$ ('#modal-subscribe').modal ("show")
		}, 3000)
	})



  }
}
