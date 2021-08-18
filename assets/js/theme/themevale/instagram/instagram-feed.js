import $ from 'jquery';
import Instafeed from 'instafeed.js';

export default function() {
    if ($('#InstagramGallery #instafeed').length) {
        const feed = new Instafeed({
            get: 'user',
            userId: $('#instafeed').data('userid'),
            accessToken: $('#instafeed').data('accesstoken'),
            resolution: 'low_resolution',
            template: '<a class="instagram-link" href="{{link}}" target="_blank" rel="noopener"><img class="lazyload" data-src="{{image}}" alt=""/></a>',
            limit: '12',
            before: function(){
                $('#instafeed').after('<div class="before-loading text-center"></div>') ;
            },
            after: function() {
                $('#instafeed ~ .before-loading').remove();
                $('.themevale_instagram-carousel').slick({
                    dots: false,
                    arrows: true,
                    infinite: false,
                    mobileFirst: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>", 
                    prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
                    responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 551,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }]
                });
            }
        });
        feed.run();
    }

    if ($('#InstagramGallery2 #instafeed').length) {
        const feed = new Instafeed({
            get: 'user',
            userId: $('#instafeed').data('userid'),
            accessToken: $('#instafeed').data('accesstoken'),
            resolution: 'low_resolution',
            template: '<a class="instagram-link" href="{{link}}" target="_blank" rel="noopener"><img class="lazyload" data-src="{{image}}" alt=""/></a>',
            limit: '12',
            before: function(){
                $('#instafeed').after('<div class="before-loading text-center"></div>') ;
            },
            after: function() {
                $('#instafeed ~ .before-loading').remove();
                $('.themevale_instagram-carousel').slick({
                    dots: false,
                    arrows: true,
                    infinite: false,
                    mobileFirst: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>", 
                    prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
                    responsive: [
                    {
                        breakpoint: 1281,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 551,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }]
                });
            }
        });
        feed.run();
    }

    if ($('#InstagramGallery3 #instafeed').length) {
        const feed = new Instafeed({
            get: 'user',
            userId: $('#instafeed').data('userid'),
            accessToken: $('#instafeed').data('accesstoken'),
            resolution: 'low_resolution',
            template: '<a class="instagram-link" href="{{link}}" target="_blank" rel="noopener"><img class="lazyload" data-src="{{image}}" alt=""/></a>',
            limit: '12',
            before: function(){
                $('#instafeed').after('<div class="before-loading text-center"></div>') ;
            },
            after: function() {
                $('#instafeed ~ .before-loading').remove();
                $('.themevale_instagram-carousel').slick({
                    dots: false,
                    arrows: false,
                    infinite: true,
                    mobileFirst: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>", 
                    prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
                    responsive: [
                    {
                        breakpoint: 1051,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            centerMode: true,
                            infinite: true,
                            centerPadding: '220px',
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 551,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }]
                });
            }
        });
        feed.run();
    }

    if ($('#InstagramGallery4 #instafeed').length) {
        const feed = new Instafeed({
            get: 'user',
            userId: $('#instafeed').data('userid'),
            accessToken: $('#instafeed').data('accesstoken'),
            resolution: 'low_resolution',
            template: '<div class="instagram-link item"><a class="instagram-image" href="{{link}}" target="_blank" rel="noopener"><img class="lazyload" data-src="{{image}}" alt=""/></a></div>',
            limit: '12',
            before: function(){
                $('#instafeed').after('<div class="before-loading text-center"></div>') ;
            },
            after: function() {
                $('#instafeed ~ .before-loading').remove();
                if ($(window).width() < 1025) {
                    $('.themevale_instagram-carousel').slick({
                        dots: false,
                        arrows: true,
                        infinite: false,
                        mobileFirst: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>", 
                        prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
                        responsive: [
                        {
                            breakpoint: 1025,
                            settings: "unslick"
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        },
                        {
                            breakpoint: 551,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }]
                    });
                } else {
                    $('.themevale_instagram-carousel').slick('unslick');
                }
            }
        });
        feed.run();
    }
}
