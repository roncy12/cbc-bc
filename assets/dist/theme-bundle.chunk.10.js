(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pace */ "./node_modules/pace/pace.min.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _themevale_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themevale/parallax/jquery.parallax-scroll.min */ "./assets/js/theme/themevale/parallax/jquery.parallax-scroll.min.js");
/* harmony import */ var _themevale_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_themevale_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _themevale_instagram_instagram_feed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themevale/instagram/instagram-feed */ "./assets/js/theme/themevale/instagram/instagram-feed.js");
/* harmony import */ var _themevale_themevale_AddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themevale/themevale_AddOptionForProduct */ "./assets/js/theme/themevale/themevale_AddOptionForProduct.js");
/* harmony import */ var _themevale_themevale_AddOptionForProduct2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themevale/themevale_AddOptionForProduct2 */ "./assets/js/theme/themevale/themevale_AddOptionForProduct2.js");
/* harmony import */ var _themevale_themevale_AddOptionForProduct3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themevale/themevale_AddOptionForProduct3 */ "./assets/js/theme/themevale/themevale_AddOptionForProduct3.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Home = function (_PageManager) {
    _inherits(Home, _PageManager);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    Home.prototype.onReady = function onReady() {
        Object(_themevale_instagram_instagram_feed__WEBPACK_IMPORTED_MODULE_5__["default"])();

        this.productsShowMore();
        this.homepage_countdown();
        this.homepage_countdown2();
        this.homepage_bannerBg();
        this.initAjaxProductsByCategory();
        this.initAjaxProductsByCategory2();
        this.homepage_collectionsParallax();
        this.initAjaxProductsByCategoryTabs();
        this.initAjaxProductsByCategorySortingTabs();
    };

    Home.prototype.productsShowMore = function productsShowMore(context) {
        var productsToShow = Number(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-number-product]').attr('data-number-product'));
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"]').length) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 551) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').length > productsToShow) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').css({ 'display': 'inline-block' });
                    for (var i = productsToShow + 1, len = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').length; i <= len; i++) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product:nth-child(' + i + ')').css({ 'display': 'none' });
                    }
                    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .container .themevale_showMoreProduct').length) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .container').append('<div class="themevale_showMoreProduct"><a class="button big-button button--border" href="javascript:void(0);">Show More</a></div>');
                    }
                }
            } else {
                productsToShow = 4;
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').length > productsToShow) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product').css({ 'display': 'inline-block' });
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .productGrid .product:nth-child(n + 7)').css({ 'display': 'none' });
                    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .container .themevale_showMoreProduct').length) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-event="show more"] .container').append('<div class="themevale_showMoreProduct"><a class="button big-button button--border" href="javascript:void(0);">Show More</a></div>');
                    }
                }
            }

            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_showMoreProduct a').on('click', function (e) {
                e.preventDefault();
                var listProducts = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('[data-event="show more"]');
                listProducts.find('.productGrid .product:hidden:lt(' + productsToShow + ')').show();
                if (listProducts.find('.productGrid .product:hidden').length === 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().css({ 'display': 'none' });
                }
            });
        }
    };

    Home.prototype.homepage_countdown = function homepage_countdown() {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#count-down').length) {
            // Set the date we're counting down to        
            var countDownDate = new Date(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#count-down').attr('data-count-down')).getTime();
            // Update the count down every 1 second
            var countdownfunction = setInterval(function () {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = countDownDate - now;

                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(countdownfunction);
                    document.getElementById("time").innerHTML = "";
                } else {
                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
                    var seconds = Math.floor(distance % (1000 * 60) / 1000);

                    // Output the result in an element with id="countDowntimer"
                    var strCountDown = "<span class='block-time'>" + days + "<span class='block-label'>days</span></span><span class='block-time'>" + hours + "<span class='block-label'>hours</span></span><span class='block-time'>" + minutes + "<span class='block-label'>mins</span></span><span class='block-time'>" + seconds + "<span class='block-label'>secs</span></span>";
                    document.getElementById("time").innerHTML = strCountDown;
                }
            }, 1000);
        }
    };

    Home.prototype.homepage_countdown2 = function homepage_countdown2() {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.countDowntimer').length) {
            // Set the date we're counting down to        
            var countDownDate = new Date(document.getElementById("number").innerHTML).getTime();
            // Update the count down every 1 second
            var countdownfunction = setInterval(function () {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
                var seconds = Math.floor(distance % (1000 * 60) / 1000);

                // Output the result in an element with id="countDowntimer"
                document.getElementById("number").innerHTML = days + "d " + hours + ":" + minutes + ":" + seconds;

                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(countdownfunction);
                    document.getElementById("number").innerHTML = "EXPIRED";
                }
            }, 1000);
        }
    };

    Home.prototype.homepage_bannerBg = function homepage_bannerBg() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_product_hasbanner').each(function () {
            var image = 'url(' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".banner-section [data-src]").data("src") + ')';
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.banner-section').css('background-image', image);
        });
    };

    Home.prototype.homepage_collectionsParallax = function homepage_collectionsParallax() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.banner-parallax-2').each(function () {
            var image = 'url(' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".banner-parallax").data("src") + ')';
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.image-parallax-wrapper').css('background-image', image);
        });
    };

    // ========================================================================
    // Ajax load products in a category tabs
    // ========================================================================

    // Ajax load products in a category


    Home.prototype.initAjaxProductsByCategory = function initAjaxProductsByCategory() {
        var _this2 = this;

        var template = 'themevale/homepage/component/ajax-products-by-category-id-result',
            urlKey = 'themevale-products-by-category-id';

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_productsByCategoryId-carousel [data-themevale-products-by-category-id]').each(function (i, placeholder) {
            pace__WEBPACK_IMPORTED_MODULE_2___default.a.ignore(function () {
                _this2.request(jquery__WEBPACK_IMPORTED_MODULE_0___default()(placeholder), template, urlKey);
            });
        });
    };

    Home.prototype.initAjaxProductsByCategory2 = function initAjaxProductsByCategory2() {
        var _this3 = this;

        var template = 'themevale/homepage/component/ajax-products-by-category-id-result2',
            urlKey = 'themevale-products-by-category-id';

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_productsByCategoryId-list [data-themevale-products-by-category-id]').each(function (i, placeholder) {
            pace__WEBPACK_IMPORTED_MODULE_2___default.a.ignore(function () {
                _this3.request(jquery__WEBPACK_IMPORTED_MODULE_0___default()(placeholder), template, urlKey);
            });
        });
    };

    Home.prototype.request = function request($placeholder, tmpl, urlKey) {
        var _this4 = this;

        if ($placeholder.data('themevaleLoaded')) return;

        var template = tmpl;
        if ($placeholder.data('themevaleTemplate')) {
            template = $placeholder.data('themevaleTemplate');
        }

        var url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, { template: template }, function (err, resp) {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            Object(_themevale_themevale_AddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(_this4.context);
            _this4.productsShowMore();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slick]', $placeholder).slick();
        });
    };

    // Ajax load products in a category tabs


    Home.prototype.initAjaxProductsByCategoryTabs = function initAjaxProductsByCategoryTabs() {
        var _this5 = this;

        var template = 'themevale/homepage/component/ajax-products-by-category-result',
            urlKey = 'themevale-products-by-category-tabs';

        // Ajax request loading products in the active tab
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.is-active [data-themevale-products-by-category-tabs]').each(function (i, placeholder) {
            pace__WEBPACK_IMPORTED_MODULE_2___default.a.ignore(function () {
                _this5.request2(jquery__WEBPACK_IMPORTED_MODULE_0___default()(placeholder), template, urlKey);
            });
        });

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_product-tabs [data-tab]').on('toggled', function (event, tab) {
            pace__WEBPACK_IMPORTED_MODULE_2___default.a.ignore(function () {
                _this5.request2(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-themevale-products-by-category-tabs]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('a', tab).attr('href')), template, urlKey);
            });
        });
    };

    Home.prototype.request2 = function request2($placeholder, tmpl, urlKey) {
        var _this6 = this;

        if ($placeholder.data('themevaleLoaded')) return;

        var template = tmpl;
        if ($placeholder.data('themevaleTemplate')) {
            template = $placeholder.data('themevaleTemplate');
        }

        var url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, { template: template }, function (err, resp) {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            Object(_themevale_themevale_AddOptionForProduct2__WEBPACK_IMPORTED_MODULE_7__["default"])(_this6.context);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slick]', $placeholder).slick();
        });
    };

    Home.prototype.initAjaxProductsByCategorySortingTabs = function initAjaxProductsByCategorySortingTabs() {
        var _this7 = this;

        var urlKey = 'themevale-products-by-category-sorting-tabs',
            template = 'themevale/homepage/component/ajax-products-by-category-sorting-tabs-result';

        // Ajax request loading products in the active tab
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.is-active[data-themevale-products-by-category-sorting-tabs]').each(function (i, placeholder) {
            pace__WEBPACK_IMPORTED_MODULE_2___default.a.ignore(function () {
                _this7.request3(jquery__WEBPACK_IMPORTED_MODULE_0___default()(placeholder), template, urlKey);
            });
        });

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_productsByCategorySortTabs [data-tab]').on('toggled', function (event, tab) {
            pace__WEBPACK_IMPORTED_MODULE_2___default.a.ignore(function () {
                _this7.request3(jquery__WEBPACK_IMPORTED_MODULE_0___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default()('a', tab).attr('href')), template, urlKey);
            });
        });
    };

    Home.prototype.request3 = function request3($placeholder, tmpl, urlKey) {
        var _this8 = this;

        if ($placeholder.data('themevaleLoaded')) return;

        var template = tmpl;
        if ($placeholder.data('themevaleTemplate')) {
            template = $placeholder.data('themevaleTemplate');
        }

        var url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, { template: template }, function (err, resp) {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            Object(_themevale_themevale_AddOptionForProduct3__WEBPACK_IMPORTED_MODULE_8__["default"])(_this8.context);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slick]', $placeholder).slick();
        });
    };

    return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./assets/js/theme/themevale/instagram/instagram-feed.js":
/*!***************************************************************!*\
  !*** ./assets/js/theme/themevale/instagram/instagram-feed.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var instafeed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! instafeed.js */ "./node_modules/instafeed.js/instafeed.js");
/* harmony import */ var instafeed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(instafeed_js__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#InstagramGallery #instafeed').length) {
        var feed = new instafeed_js__WEBPACK_IMPORTED_MODULE_1___default.a({
            get: 'user',
            userId: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').data('userid'),
            accessToken: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').data('accesstoken'),
            resolution: 'low_resolution',
            template: '<a class="instagram-link" href="{{link}}" target="_blank" rel="noopener"><img class="lazyload" data-src="{{image}}" alt=""/></a>',
            limit: '12',
            before: function before() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').after('<div class="before-loading text-center"></div>');
            },
            after: function after() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed ~ .before-loading').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_instagram-carousel').slick({
                    dots: false,
                    arrows: true,
                    infinite: false,
                    mobileFirst: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
                    prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    }, {
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

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#InstagramGallery2 #instafeed').length) {
        var _feed = new instafeed_js__WEBPACK_IMPORTED_MODULE_1___default.a({
            get: 'user',
            userId: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').data('userid'),
            accessToken: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').data('accesstoken'),
            resolution: 'low_resolution',
            template: '<a class="instagram-link" href="{{link}}" target="_blank" rel="noopener"><img class="lazyload" data-src="{{image}}" alt=""/></a>',
            limit: '12',
            before: function before() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').after('<div class="before-loading text-center"></div>');
            },
            after: function after() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed ~ .before-loading').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_instagram-carousel').slick({
                    dots: false,
                    arrows: true,
                    infinite: false,
                    mobileFirst: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
                    prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
                    responsive: [{
                        breakpoint: 1281,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6
                        }
                    }, {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    }, {
                        breakpoint: 551,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }]
                });
            }
        });
        _feed.run();
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#InstagramGallery3 #instafeed').length) {
        var _feed2 = new instafeed_js__WEBPACK_IMPORTED_MODULE_1___default.a({
            get: 'user',
            userId: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').data('userid'),
            accessToken: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').data('accesstoken'),
            resolution: 'low_resolution',
            template: '<a class="instagram-link" href="{{link}}" target="_blank" rel="noopener"><img class="lazyload" data-src="{{image}}" alt=""/></a>',
            limit: '12',
            before: function before() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').after('<div class="before-loading text-center"></div>');
            },
            after: function after() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed ~ .before-loading').remove();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_instagram-carousel').slick({
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
                    responsive: [{
                        breakpoint: 1051,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            centerMode: true,
                            infinite: true,
                            centerPadding: '220px'
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    }, {
                        breakpoint: 551,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }]
                });
            }
        });
        _feed2.run();
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#InstagramGallery4 #instafeed').length) {
        var _feed3 = new instafeed_js__WEBPACK_IMPORTED_MODULE_1___default.a({
            get: 'user',
            userId: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').data('userid'),
            accessToken: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').data('accesstoken'),
            resolution: 'low_resolution',
            template: '<div class="instagram-link item"><a class="instagram-image" href="{{link}}" target="_blank" rel="noopener"><img class="lazyload" data-src="{{image}}" alt=""/></a></div>',
            limit: '12',
            before: function before() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed').after('<div class="before-loading text-center"></div>');
            },
            after: function after() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#instafeed ~ .before-loading').remove();
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 1025) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_instagram-carousel').slick({
                        dots: false,
                        arrows: true,
                        infinite: false,
                        mobileFirst: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
                        prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
                        responsive: [{
                            breakpoint: 1025,
                            settings: "unslick"
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        }, {
                            breakpoint: 551,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }]
                    });
                } else {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_instagram-carousel').slick('unslick');
                }
            }
        });
        _feed3.run();
    }
});

/***/ }),

/***/ "./assets/js/theme/themevale/parallax/jquery.parallax-scroll.min.js":
/*!**************************************************************************!*\
  !*** ./assets/js/theme/themevale/parallax/jquery.parallax-scroll.min.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  ParallaxScroll.init();
});var ParallaxScroll = { showLogs: !1, round: 1e3, init: function init() {
    return this._log("init"), this._inited ? (this._log("Already Inited"), void (this._inited = !0)) : (this._requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
        window.setTimeout(a, 1e3 / 60);
      };
    }(), void this._onScroll(!0));
  }, _inited: !1, _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"], _requestAnimationFrame: null, _log: function _log(a) {
    this.showLogs && console.log("Parallax Scroll / " + a);
  }, _onScroll: function _onScroll(a) {
    var b = $(document).scrollTop(),
        c = $(window).height();this._log("onScroll " + b), $("[data-parallax]").each($.proxy(function (d, e) {
      var f = $(e),
          g = [],
          h = !1,
          i = f.data("style");void 0 == i && (i = f.attr("style") || "", f.data("style", i));var k,
          j = [f.data("parallax")];for (k = 2; f.data("parallax" + k); k++) {
        j.push(f.data("parallax-" + k));
      }var l = j.length;for (k = 0; k < l; k++) {
        var m = j[k],
            n = m["from-scroll"];void 0 == n && (n = Math.max(0, $(e).offset().top - c)), n = 0 | n;var o = m.distance,
            p = m["to-scroll"];void 0 == o && void 0 == p && (o = c), o = Math.max(0 | o, 1);var q = m.easing,
            r = m["easing-return"];if (void 0 != q && $.easing && $.easing[q] || (q = null), void 0 != r && $.easing && $.easing[r] || (r = q), q) {
          var s = m.duration;void 0 == s && (s = o), s = Math.max(0 | s, 1);var t = m["duration-return"];void 0 == t && (t = s), o = 1;var u = f.data("current-time");void 0 == u && (u = 0);
        }void 0 == p && (p = n + o), p = 0 | p;var v = m.smoothness;void 0 == v && (v = 30), v = 0 | v, (a || 0 == v) && (v = 1), v = 0 | v;var w = b;w = Math.max(w, n), w = Math.min(w, p), q && (void 0 == f.data("sens") && f.data("sens", "back"), w > n && ("back" == f.data("sens") ? (u = 1, f.data("sens", "go")) : u++), w < p && ("go" == f.data("sens") ? (u = 1, f.data("sens", "back")) : u++), a && (u = s), f.data("current-time", u)), this._properties.map($.proxy(function (a) {
          var b = 0,
              c = m[a];if (void 0 != c) {
            "scale" == a || "scaleX" == a || "scaleY" == a || "scaleZ" == a ? b = 1 : c = 0 | c;var d = f.data("_" + a);void 0 == d && (d = b);var e = (c - b) * ((w - n) / (p - n)) + b,
                i = d + (e - d) / v;if (q && u > 0 && u <= s) {
              var j = b;"back" == f.data("sens") && (j = c, c = -c, q = r, s = t), i = $.easing[q](null, u, j, c, s);
            }i = Math.ceil(i * this.round) / this.round, i == d && e == c && (i = c), g[a] || (g[a] = 0), g[a] += i, d != g[a] && (f.data("_" + a, g[a]), h = !0);
          }
        }, this));
      }if (h) {
        if (void 0 != g.z) {
          var x = m.perspective;void 0 == x && (x = 800);var y = f.parent();y.data("style") || y.data("style", y.attr("style") || ""), y.attr("style", "perspective:" + x + "px; -webkit-perspective:" + x + "px; " + y.data("style"));
        }void 0 == g.scaleX && (g.scaleX = 1), void 0 == g.scaleY && (g.scaleY = 1), void 0 == g.scaleZ && (g.scaleZ = 1), void 0 != g.scale && (g.scaleX *= g.scale, g.scaleY *= g.scale, g.scaleZ *= g.scale);var z = "translate3d(" + (g.x ? g.x : 0) + "px, " + (g.y ? g.y : 0) + "px, " + (g.z ? g.z : 0) + "px)",
            A = "rotateX(" + (g.rotateX ? g.rotateX : 0) + "deg) rotateY(" + (g.rotateY ? g.rotateY : 0) + "deg) rotateZ(" + (g.rotateZ ? g.rotateZ : 0) + "deg)",
            B = "scaleX(" + g.scaleX + ") scaleY(" + g.scaleY + ") scaleZ(" + g.scaleZ + ")",
            C = z + " " + A + " " + B + ";";this._log(C), f.attr("style", "transform:" + C + " -webkit-transform:" + C + " " + i);
      }
    }, this)), window.requestAnimationFrame ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame($.proxy(this._onScroll, this, !1));
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_AddOptionForProduct2.js":
/*!*********************************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_AddOptionForProduct2.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
    if (context.themeSettings.themevale_AddOptionForProduct == true) {
        var callProductOption = function callProductOption() {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(product_class).each(function () {
                var $product = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                var productId = $product.attr("data-product-id");
                var colorVariantToShow = 4;
                var productLink = $product.find('.product_img_link').attr('href');

                if (productId != undefined) {
                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, { template: 'themevale/themevale_AddOptionForProduct' }, function (err, response) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', response).length == 1) {
                            var $response = jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).find('.form-label--alternate').remove().end();
                            response = $response;
                            var count_option = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute-value]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', response)).length;
                            var more_option = count_option - colorVariantToShow;
                            var data_option = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', response).html();
                            if (count_option > colorVariantToShow) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute-value]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', response)).each(function (i) {
                                    if (i >= colorVariantToShow) {
                                        var option_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-product-attribute-value');
                                        data_option = data_option.replace('data-product-attribute-value=\"' + option_id + '\"', 'data-product-attribute-value="' + option_id + '" data-show style="display:none;" ');
                                    }
                                });
                                data_option = data_option + '<span class="showmore"><a href="' + productLink + '" title="More Color">+' + more_option + '</a></span>';
                            }

                            var numbers = Math.floor(Math.random() * 10 + 1);

                            data_option = data_option.replace(new RegExp(escapeRegExp("attribute_"), 'g'), "attribute_" + productId + "_" + numbers + "_");
                            $product.find('.card_optionImage').remove();
                            $product.find('.card-body .card-price').after("<div class='card_optionImage product-option-" + productId + "'><div data-product-option-change><div data-product-attribute=\"swatch\">" + data_option + "</div></div></div>");

                            var $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', productId);
                            $product.find('[data-product-attribute="swatch"] input[type="radio"]').each(function () {
                                var _this = this;

                                var name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name');
                                var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
                                if (value != "") {
                                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize() + "&" + encodeURIComponent(name) + "=" + value, 'products/bulk-discount-rates', function (err, response) {
                                        var productAttributesData = response.data || {};

                                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(productAttributesData.image)) {

                                            var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].tools.image.getSrc(productAttributesData.image.data, context.themeSettings.productgallery_size);
                                            var thumnailImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].tools.image.getSrc(productAttributesData.image.data, context.themeSettings.productview_thumb_size);
                                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this).next().find('.form-option-variant').addClass('form-option--image').attr('img-src', mainImageUrl).css('background-image', 'url(' + thumnailImageUrl + ')');
                                        }
                                    });
                                }
                            });
                        }

                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="set-rectangle"]', response).length == 1) {
                            var $response2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).find('.form-label--alternate').remove().end();
                            response = $response2;
                            var count_option2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute-value]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="set-rectangle"]', response)).length;
                            var more_option2 = count_option2 - colorVariantToShow;
                            var data_option2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="set-rectangle"]', response).html();
                            if (count_option2 > colorVariantToShow) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute-value]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="set-rectangle"]', response)).each(function (i) {
                                    if (i >= colorVariantToShow) {
                                        var option_id2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-product-attribute-value');
                                        data_option2 = data_option2.replace('data-product-attribute-value=\"' + option_id2 + '\"', 'data-product-attribute-value="' + option_id2 + '" data-show style="display:none;" ');
                                    }
                                });
                                data_option2 = data_option2 + '<span class="showmore"><a href="' + productLink + '" title="More Size">+' + more_option2 + '</a></span>';
                            }
                            data_option2 = data_option2.replace(new RegExp(escapeRegExp("attribute_"), 'g'), "attribute_" + productId + "_");
                            $product.find('.card_optionSize').remove();
                            $product.find('.card-figure .card-figcaption2').prepend("<div class='card_optionSize product-option-" + productId + "'><div data-product-option-change><div data-product-attribute=\"set-rectangle\">" + data_option2 + "</div></div></div>");
                        }
                    });
                }
            });
        };

        var chooseOption = function chooseOption() {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.form-option', function (event) {
                var img = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children().attr('img-src');
                var $product_img = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(product_class).find(".card-image");
                $product_img.attr("src", img);
                $product_img.attr("data-src", img);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card_optionImage .form-option').removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
            });
        };

        var escapeRegExp = function escapeRegExp(str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        };

        var product_class = ".themevale_product-tabs .card";
        var product_image = [];
        var product_hover = [];

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
            callProductOption();
            chooseOption();
        });
    }
});

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_AddOptionForProduct3.js":
/*!*********************************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_AddOptionForProduct3.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
    if (context.themeSettings.themevale_AddOptionForProduct == true) {
        var callProductOption = function callProductOption() {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(product_class).each(function () {
                var $product = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                var productId = $product.attr("data-product-id");
                var colorVariantToShow = 4;
                var productLink = $product.find('.product_img_link').attr('href');

                if (productId != undefined) {
                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, { template: 'themevale/themevale_AddOptionForProduct' }, function (err, response) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', response).length == 1) {
                            var $response = jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).find('.form-label--alternate').remove().end();
                            response = $response;
                            var count_option = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute-value]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', response)).length;
                            var more_option = count_option - colorVariantToShow;
                            var data_option = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', response).html();
                            if (count_option > colorVariantToShow) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute-value]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', response)).each(function (i) {
                                    if (i >= colorVariantToShow) {
                                        var option_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-product-attribute-value');
                                        data_option = data_option.replace('data-product-attribute-value=\"' + option_id + '\"', 'data-product-attribute-value="' + option_id + '" data-show style="display:none;" ');
                                    }
                                });
                                data_option = data_option + '<span class="showmore"><a href="' + productLink + '" title="More Color">+' + more_option + '</a></span>';
                            }

                            var numbers = Math.floor(Math.random() * 10 + 1);

                            data_option = data_option.replace(new RegExp(escapeRegExp("attribute_"), 'g'), "attribute_" + productId + "_" + numbers + "_");
                            $product.find('.card_optionImage').remove();
                            $product.find('.card-body .card-price').after("<div class='card_optionImage product-option-" + productId + "'><div data-product-option-change><div data-product-attribute=\"swatch\">" + data_option + "</div></div></div>");

                            var $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="swatch"]', productId);
                            $product.find('[data-product-attribute="swatch"] input[type="radio"]').each(function () {
                                var _this = this;

                                var name = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name');
                                var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
                                if (value != "") {
                                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize() + "&" + encodeURIComponent(name) + "=" + value, 'products/bulk-discount-rates', function (err, response) {
                                        var productAttributesData = response.data || {};

                                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(productAttributesData.image)) {

                                            var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].tools.image.getSrc(productAttributesData.image.data, context.themeSettings.productgallery_size);
                                            var thumnailImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].tools.image.getSrc(productAttributesData.image.data, context.themeSettings.productview_thumb_size);
                                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this).next().find('.form-option-variant').addClass('form-option--image').attr('img-src', mainImageUrl).css('background-image', 'url(' + thumnailImageUrl + ')');
                                        }
                                    });
                                }
                            });
                        }

                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="set-rectangle"]', response).length == 1) {
                            var $response2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).find('.form-label--alternate').remove().end();
                            response = $response2;
                            var count_option2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute-value]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="set-rectangle"]', response)).length;
                            var more_option2 = count_option2 - colorVariantToShow;
                            var data_option2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="set-rectangle"]', response).html();
                            if (count_option2 > colorVariantToShow) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute-value]', jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-product-attribute="set-rectangle"]', response)).each(function (i) {
                                    if (i >= colorVariantToShow) {
                                        var option_id2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-product-attribute-value');
                                        data_option2 = data_option2.replace('data-product-attribute-value=\"' + option_id2 + '\"', 'data-product-attribute-value="' + option_id2 + '" data-show style="display:none;" ');
                                    }
                                });
                                data_option2 = data_option2 + '<span class="showmore"><a href="' + productLink + '" title="More Size">+' + more_option2 + '</a></span>';
                            }
                            data_option2 = data_option2.replace(new RegExp(escapeRegExp("attribute_"), 'g'), "attribute_" + productId + "_");
                            $product.find('.card_optionSize').remove();
                            $product.find('.card-figure .card-figcaption2').prepend("<div class='card_optionSize product-option-" + productId + "'><div data-product-option-change><div data-product-attribute=\"set-rectangle\">" + data_option2 + "</div></div></div>");
                        }
                    });
                }
            });
        };

        var chooseOption = function chooseOption() {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.form-option', function (event) {
                var img = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children().attr('img-src');
                var $product_img = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(product_class).find(".card-image");
                $product_img.attr("src", img);
                $product_img.attr("data-src", img);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card_optionImage .form-option').removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
            });
        };

        var escapeRegExp = function escapeRegExp(str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        };

        var product_class = ".themevale_productsByCategorySortTabs .card";
        var product_image = [];
        var product_hover = [];

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
            callProductOption();
            chooseOption();
        });
    }
});

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.10.js.map