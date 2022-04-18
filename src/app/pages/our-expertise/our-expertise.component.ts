import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-our-expertise',
  templateUrl: './our-expertise.component.html',
  styleUrls: ['./our-expertise.component.scss']
})
export class OurExpertiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.bindslider();

  }

  bindslider() {


// -------------testmonials----------------


function testimonialsSliderTwo() {
	$('.testimonials-slider-two').slick({
		dots: false,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
		nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
		appendArrows: $('.testimonials-arrow'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
}


$(document).ready(function () {
	testimonialsSliderTwo();
});




  }
}
