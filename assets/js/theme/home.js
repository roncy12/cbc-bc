import $ from 'jquery';
import PageManager from './page-manager';
import Pace from 'pace';
import utils from '@bigcommerce/stencil-utils';
import parallax from './themevale/parallax/jquery.parallax-scroll.min';
import initInstagramFeed from './themevale/instagram/instagram-feed';
import themevale_AddOption from './themevale/themevale_AddOptionForProduct';
import themevale_AddOption2 from './themevale/themevale_AddOptionForProduct2';
import themevale_AddOption3 from './themevale/themevale_AddOptionForProduct3';

export default class Home extends PageManager {
    onReady() {
        initInstagramFeed();

        this.productsShowMore();
        this.homepage_countdown();
        this.homepage_countdown2();
        this.homepage_bannerBg();
        this.initAjaxProductsByCategory();
        this.initAjaxProductsByCategory2();
        this.homepage_collectionsParallax();
        this.initAjaxProductsByCategoryTabs();
        this.initAjaxProductsByCategorySortingTabs();
    }

    productsShowMore(context) {
        var productsToShow = Number($('[data-number-product]').attr('data-number-product'));
        if ($('[data-event="show more"]').length) {
            if ($(window).width() > 551) {
                if ($('[data-event="show more"] .productGrid .product').length > productsToShow) {
                    $('[data-event="show more"] .productGrid .product').css({ 'display': 'inline-block' });
                    for(var i = productsToShow + 1, len = $('[data-event="show more"] .productGrid .product').length; i <= len; i++) {
                        $('[data-event="show more"] .productGrid .product:nth-child('+i+')').css({ 'display': 'none' });
                    }
                    if (!$('[data-event="show more"] .container .themevale_showMoreProduct').length) {
                        $('[data-event="show more"] .container').append('<div class="themevale_showMoreProduct"><a class="button big-button button--border" href="javascript:void(0);">Show More</a></div>');
                    }
                }
            } else {
                productsToShow = 4;
                if ($('[data-event="show more"] .productGrid .product').length > productsToShow) {
                    $('[data-event="show more"] .productGrid .product').css({ 'display': 'inline-block' });
                    $('[data-event="show more"] .productGrid .product:nth-child(n + 7)').css({ 'display': 'none' });
                    if (!$('[data-event="show more"] .container .themevale_showMoreProduct').length) {
                        $('[data-event="show more"] .container').append('<div class="themevale_showMoreProduct"><a class="button big-button button--border" href="javascript:void(0);">Show More</a></div>');
                    }
                }
            }

            $('.themevale_showMoreProduct a').on('click', function(e) {
                e.preventDefault();
                var listProducts = $(this).parents('[data-event="show more"]');
                listProducts.find('.productGrid .product:hidden:lt(' + productsToShow + ')').show();
                if (listProducts.find('.productGrid .product:hidden').length === 0) {
                    $(this).parent().css({ 'display': 'none' });
                }
            });
        }
    }

    homepage_countdown() {
        if ($('#count-down').length) {
            // Set the date we're counting down to        
            var countDownDate = new Date( $('#count-down').attr('data-count-down')).getTime();
            // Update the count down every 1 second
            var countdownfunction = setInterval(function() {

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
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
                    // Output the result in an element with id="countDowntimer"
                    var strCountDown = "<span class='block-time'>"+ days + "<span class='block-label'>days</span></span><span class='block-time'>"+ hours + "<span class='block-label'>hours</span></span><span class='block-time'>" + minutes + "<span class='block-label'>mins</span></span><span class='block-time'>" + seconds + "<span class='block-label'>secs</span></span>";
                    document.getElementById("time").innerHTML = strCountDown
                }
            }, 1000);
        }
    }

    homepage_countdown2() {
        if ($('.countDowntimer').length) {
            // Set the date we're counting down to        
            var countDownDate = new Date( document.getElementById("number").innerHTML ).getTime();
            // Update the count down every 1 second
            var countdownfunction = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();
        
                // Find the distance between now an the count down date
                var distance = countDownDate - now;
        
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                // Output the result in an element with id="countDowntimer"
                document.getElementById("number").innerHTML = days + "d " + hours + ":" + minutes + ":" + seconds;
                
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(countdownfunction);
                    document.getElementById("number").innerHTML = "EXPIRED";
                }
            }, 1000);
        }
    }

    homepage_bannerBg() {
        $('.themevale_product_hasbanner').each(function() {
            var image = ('url(' + $(this).find(".banner-section [data-src]").data("src") + ')');
            $(this).find('.banner-section').css('background-image', image);
        })
    }

    homepage_collectionsParallax() {
        $('.banner-parallax-2').each(function() {
            var image = ('url(' + $(this).find(".banner-parallax").data("src") + ')');
            $(this).find('.image-parallax-wrapper').css('background-image', image);
        });
    }

    // ========================================================================
    // Ajax load products in a category tabs
    // ========================================================================

    // Ajax load products in a category
    initAjaxProductsByCategory() {
        var template = 'themevale/homepage/component/ajax-products-by-category-id-result', 
            urlKey = 'themevale-products-by-category-id';

        $('.themevale_productsByCategoryId-carousel [data-themevale-products-by-category-id]').each((i, placeholder) => {
            Pace.ignore(() => {
                this.request($(placeholder), template, urlKey);
            });
        });
    }
    initAjaxProductsByCategory2() {
        var template = 'themevale/homepage/component/ajax-products-by-category-id-result2', 
            urlKey = 'themevale-products-by-category-id';

        $('.themevale_productsByCategoryId-list [data-themevale-products-by-category-id]').each((i, placeholder) => {
            Pace.ignore(() => {
                this.request($(placeholder), template, urlKey);
            });
        });
    }
    request($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            themevale_AddOption(this.context);
            this.productsShowMore();
            $('[data-slick]', $placeholder).slick();
        });
    }

    // Ajax load products in a category tabs
    initAjaxProductsByCategoryTabs() {
        var template = 'themevale/homepage/component/ajax-products-by-category-result', 
            urlKey = 'themevale-products-by-category-tabs';

        // Ajax request loading products in the active tab
        $('.is-active [data-themevale-products-by-category-tabs]').each((i, placeholder) => {
            Pace.ignore(() => {
               this.request2($(placeholder), template, urlKey);
            });
        });

        $('.themevale_product-tabs [data-tab]').on('toggled', (event, tab) => {
            Pace.ignore(() => {
                this.request2($('[data-themevale-products-by-category-tabs]', $('a', tab).attr('href')), template, urlKey);
            });
        });
    }
    
    request2($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            themevale_AddOption2(this.context);
            $('[data-slick]', $placeholder).slick();
        });
    }

    initAjaxProductsByCategorySortingTabs() {
        var urlKey = 'themevale-products-by-category-sorting-tabs',
            template = 'themevale/homepage/component/ajax-products-by-category-sorting-tabs-result';

        // Ajax request loading products in the active tab
        $('.is-active[data-themevale-products-by-category-sorting-tabs]').each((i, placeholder) => {
            Pace.ignore(() => {
                this.request3($(placeholder), template, urlKey);
            });
        });

        $('.themevale_productsByCategorySortTabs [data-tab]').on('toggled', (event, tab) => {
            Pace.ignore(() => {
                this.request3($($('a', tab).attr('href')), template, urlKey);
            });
        });
    }
    
    request3($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            themevale_AddOption3(this.context);
            $('[data-slick]', $placeholder).slick();
        });
    }
}
