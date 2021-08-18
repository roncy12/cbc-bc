import $ from 'jquery';
import classie from 'classie';
import utils from '@bigcommerce/stencil-utils';
import { CollapsibleEvents } from '../common/collapsible';

export default function(context) {

    // ========================================================================
    // Header Desktop
    // ========================================================================
    function header_PC() {
        // Top Promotion
        $('.close-banner-promotion').on('click', function(){
            $('#themevale_top-promotion').remove();
        });

        $('.navUser-action--currencySelector').on('click', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            if ($target.hasClass('is-open')) {
                $target.removeClass('is-open');
                $target.next().slideUp();
            } else {
                $target.addClass('is-open');
                $target.next().slideDown();
            }
        });

        $('.navUser-action--account').on('click', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            if ($target.hasClass('is-open')) {
                $target.removeClass('is-open');
                $target.next().slideUp();
            } else {
                $target.addClass('is-open');
                $target.next().slideDown();
            }
        });

        $(document).on('click', event => {
            if ($('.navUser-action--currencySelector').hasClass('is-open')) {
                if (($(event.target).closest('.navUser-action--currencySelector').length === 0) && ($(event.target).closest('#currencySelection').length === 0)) {
                    $('.navUser-action--currencySelector').removeClass('is-open');
                    $('#currencySelection').slideUp();
                }
            }

            if ($('.navUser-action--account').hasClass('is-open')) {
                if (($(event.target).closest('.navUser-action--account').length === 0) && ($(event.target).closest('#navPages-account-topbar').length === 0)) {
                    $('.navUser-action--account').removeClass('is-open');
                    $('#navPages-account-topbar').slideUp();
                }
            }
        });
    }
    header_PC();

    function activeMenu_Mobile() {
        if ($(window).width() <= 1024) {
            $('.imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                $(this).find('.imageTop-item').appendTo($(this).find('.navPage-subMenu-title'));
            });
            if ($('#menu .navPages').length) {
                $('#menu .navPages').appendTo('#menuMobile');
            }
            if ($('#menuVertical .navPages').length) {
                $('#menuVertical .navPages').appendTo('#menuMobile');
            }
        } else {
            $('.imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                $(this).find('> .navPage-subMenu-action').after($(this).find('.imageTop-item'));
            });
            if (!$('#menu .navPages').length) {
                $('#menuMobile .navPages').appendTo('#menu');
            }
            if (!$('#menuVertical .navPages').length) {
                $('#menuMobile .navPages').appendTo('#menuVertical');
            }
        }
    }
    activeMenu_Mobile();

    function promotion_countdown() {
        if ($('#count-down-promotion').length) {
            // Set the date we're counting down to        
            var countDownDate = new Date( $('#count-down-promotion').attr('data-count-down')).getTime();
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
    promotion_countdown();

    // ========================================================================
    // Header Mobile
    // ========================================================================
    function toggleAccount_mobile() {
        
        $('.accountMobile').on('click', function(e) {
            $('body').addClass('themevale_open-Account');
        });

        $('#account-mobile .themevale_close2').on('click', function(e) {
            $('body').removeClass('themevale_open-Account');
        });

        $('.themevale_background').on('click', function(e) {
            if ($('body').hasClass('themevale_open-Account')) {
                $('body').removeClass('themevale_open-Account');
            }
        });
    }
    toggleAccount_mobile();

    function toggleCart_mobile() {
        
        $('.cartMobile').on('click', function(e) {
            $('body').addClass('themevale_open-Cart');
            if ($(window).width() <= 551) {
                var position_top =  $('.header').position().top + $('.header').outerHeight();
                $('.themevale_open-Cart .themevale_MobileCart').css('top', position_top);
            }
        });

        $('#cart-mobile .themevale_close2').on('click', function(e) {
            $('body').removeClass('themevale_open-Cart');
            if ($(window).width() <= 551) {
                $('.themevale_MobileCart').css('top', '120%');
            }
        });

        $('.themevale_background').on('click', function(e) {
            if ($('body').hasClass('themevale_open-Cart')) {
                $('body').removeClass('themevale_open-Cart');
                if ($(window).width() <= 551) {
                    $('.themevale_MobileCart').css('top', '120%');
                }
            }
        });
    }
    toggleCart_mobile()

    function toggleCurrency_mobile() {
        
        $('.currencyMobile').on('click', function(e) {
            $('body').addClass('themevale_open-Currency');
        });

        $('#currency-mobile .themevale_close2').on('click', function(e) {
            $('body').removeClass('themevale_open-Currency');
        });

        $('.themevale_background').on('click', function(e) {
            if ($('body').hasClass('themevale_open-Currency')) {
                $('body').removeClass('themevale_open-Currency');
            }
        });
    }
    toggleCurrency_mobile()

    function toggleVertical_menu() {
        
        $('[data-menuvertical-toggle="menu"]').on('click', function(e) {
            e.preventDefault();
            $('body').addClass('themevale_open-verticalMenu');
            // $('.themevale_header-vertical-PC').addClass('is-open');
        });

        $('.themevale_header-vertical-PC .themevale_close').on('click', function(e) {
            if ($('body').hasClass('themevale_open-verticalMenu')) {
                $('body').removeClass('themevale_open-verticalMenu');
            }
        });

        $(document).on('click', event => {
            if ($('body').hasClass('themevale_open-verticalMenu')) {
                if (($(event.target).closest('[data-menuvertical-toggle="menu"]').length === 0) && ($(event.target).closest('.themevale_header-vertical-PC').length === 0)) {
                    $('body').removeClass('themevale_open-verticalMenu');
                }
            }
        });
    }
    toggleVertical_menu()

    // ========================================================================
    // Login dropdown
    // ========================================================================
    function login_dropdown() {
        if ($('#login-dropdown').length) {
            $('[data-login-form]').on('click', event => {
                event.preventDefault();
                const $target = $(event.currentTarget);
                if ($target.hasClass('is-open')) {
                    $target.removeClass('is-open');
                    $('#login-dropdown').slideUp();
                } else {
                    $target.addClass('is-open');
                    $('#login-dropdown').slideDown();
                }
            });
            $(document).on('click', event => {
                if ($('[data-login-form]').hasClass('is-open')) {
                    if (($(event.target).closest('[data-login-form]').length === 0) && ($(event.target).closest('#login-dropdown').length === 0)) {
                        $('[data-login-form]').removeClass('is-open');
                        $('#login-dropdown').slideUp();
                    }
                }
            });
        }
    }
    login_dropdown();

    // ========================================================================
    // Footer on Mobile & tablet
    // ========================================================================
    function footer_mobile() {
        if ($(window).width() <= 767) {
            if(!$('.themevale_footer-info').hasClass('footerMobile')) {
                $('.themevale_footer-info').addClass('footerMobile');
                $('.footer-dropdownmobile .footer-info-list').css('display', 'none');
            }
        } else {
            $('.themevale_footer-info').removeClass('footerMobile');
            $('.footer-dropdownmobile').removeClass('open-dropdown');
            $('.footer-dropdownmobile .footer-info-list').css('display', 'block');
        }
    }
    footer_mobile();

    function toggle_footer() {
        $(document).on('click', '.footerMobile .footer-dropdownmobile .footer-info-heading', function() {
            $(this).parent().toggleClass('open-dropdown');
            $(this).parent().find('.footer-info-list').slideToggle();
        });
    }
    toggle_footer();

    function services_slider() {
        if ($(window).width() <= 993) {
            // Footer Service 
            if (!$(".themevale_service_slider").hasClass('slick-slider')) {
                $(".themevale_service_slider").slick({
                    fade: true,
                    dots: false,
                    arrows: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    mobileFirst: true,
                    autoplay: true,
                    nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>", 
                    prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
                    responsive: [
                    {
                        breakpoint: 551,
                        settings: {
                            fade: false,
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },{
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            }
        } else {
            // Footer Service 
            if ($(".themevale_service_slider").hasClass('slick-slider')) {
                $(".themevale_service_slider").slick('unslick');
            }
        }
    }
    services_slider();

    // ========================================================================
    // Back to top
    // ========================================================================
    function back_to_top() {
        var offset = $(window).height()/2;
        const backToTop = $('#back-to-top');

        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? backToTop.addClass('is-visible') : backToTop.removeClass('is-visible');
        });

        backToTop.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
        });
    }
    back_to_top();

    // ========================================================================
    // Layout Product List/Grid
    // ========================================================================
    function layout_ListGrid() {
        const layout = document.getElementById('grid-list-layout');
        $(document).on('click', '.view-as-btn a', function(){
            var column = $(this).attr('data-layout');
            layout.className = 'page';
            classie.add(layout, column);
        });
    }
    layout_ListGrid();

    // ========================================================================
    // Sidebar PC & mobile
    // ========================================================================
    function category_dropdownSidebar() {
        if ($('.all-categories-list').length > 0) {
            $('.all-categories-list .navPages-action-wrapper').on('click', function() {
                var $this = $(this).parent();
                $this.siblings().removeClass('is-clicked');
                $this.toggleClass('is-clicked');
                $this.siblings().find("> .dropdown-category-list").slideUp( "slow" );
                $this.find("> .dropdown-category-list").slideToggle( "slow" );
           });
        }
        
        var category_active = $('link[rel="canonical"]').attr('href');
        var category_active_child = $('.themevale_breadcrumbCategory ul li.breadcrumb.is-active').prev('.breadcrumb').children('a').attr('href');
        var category_active_child2 = $('.themevale_breadcrumbCategory ul li.breadcrumb.is-active').prev('.breadcrumb').prev('.breadcrumb').children('a').attr('href');
        $('.all-categories-list li').each(function () {
            if ($(this).find('.navPages-action-wrapper a').attr('href') === category_active) {
                $(this).children('.navPages-action-wrapper').trigger("click");
            }

            if ($(this).find('.navPages-action-wrapper a').attr('href') === category_active_child) {
                $(this).children('.navPages-action-wrapper').trigger("click");
            }

            if ($(this).find('.navPages-action-wrapper a').attr('href') === category_active_child2) {
                $(this).children('.navPages-action-wrapper').trigger("click");
            }
        });
    }
    category_dropdownSidebar();

    function sidebar_mobile() {
        var $sidebar = $('.page .page-sidebar'),
            $sidebarMobile = $("#sidebar-mobile .page-sidebar");
        if ($(window).width() <= 1024) {
            if ($sidebar.length) {
                if ($sidebar.find('nav').length) {
                    var id_name = $sidebar.attr('id');
                    $sidebar.removeAttr('id');
                    $sidebar.find('nav').appendTo($sidebarMobile);
                    $sidebarMobile.attr('id', id_name);
                }
            }
        } else {
            if ($sidebar.length) {
                if (!$sidebar.find('nav').length) {
                    var id_name = $sidebarMobile.attr('id');
                    $sidebarMobile.removeAttr('id');
                    $sidebarMobile.find('nav').appendTo($sidebar);
                    $sidebar.attr('id', id_name);
                }
            }
        }
        if (!$sidebar.length) {
            $('.themevale_sidebar-mobile-wrapper').remove();
        }
    }
    sidebar_mobile();

    function toggleSidebar_mobile() {
        
        if ($('.page-no-sidebar').length) {
            $(document).on('click', '.themevale_sidebar-mobile', function(e) {
                if (!$('body').hasClass('themevale_open-Sidebar')) {
                    $('body').addClass('themevale_open-Sidebar');
                }
            });
        } else {
            $(document).on('click', '.themevale_sidebar-mobile', function(e) {
                if (!$('body').hasClass('themevale_open-Sidebar')) {
                    $('body').addClass('themevale_open-Sidebar');
                }
            });
        }

        $(document).on('click', '#sidebar-mobile .themevale_close2', function(e) {
            $('body').removeClass('themevale_open-Sidebar');
        });

        $(document).on('click', '.themevale_background', function(e) {
            if ($('body').hasClass('themevale_open-Sidebar')) {
                $('body').removeClass('themevale_open-Sidebar');
            }
        });
    }
    toggleSidebar_mobile();


    // ========================================================================
    // Lookbook
    // ========================================================================
    function lookbook() {
        const $options = {
            config: {
                products: {
                    new: {
                        limit: 20,
                    },
                },
            },
            template: 'themevale/products/lookbook-products'
        };
        const $thisProd = $('.lookbook-popup');
        $('.lookbook-item .position-point').on('click', function() {
            $thisProd.empty();
            var $prodId = $(this).data('product-id');
            var position = $(this).offset();
            var container = $('.body > .container').offset();
            if (container == null) {
                container = $('.themevale-parallax > .container').offset();
            }
            utils.api.product.getById($prodId, $options, (err, response) => {
                if (err) {
                    return false;
                }
                $thisProd.html(response);
            });
            $thisProd.toggleClass("show");
            if ($(window).width() > 551) {
                $thisProd.css({'top': position.top - container.top - 100, 'left': position.left - container.left + 40});
            } else {
                $thisProd.css({'top': position.top - container.top + 15, 'left': 30});
            }
        });
        $(document).on('click', '.close-product', function() {
            if ($thisProd.hasClass("show")) {
                $thisProd.removeClass("show");
            }
        });
        $(document).on('click', event => {
            if ($thisProd.hasClass("show")) {
                if (($(event.target).closest($thisProd).length === 0) && ($(event.target).closest('.position-point').length === 0)) {
                    $thisProd.removeClass("show");
                }
            }
        });

        if ($('.heroCarousel-wrapper.themevale-parallax').length) {
            const $carousel = $(this).find('[data-slick]');
            $carousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
                $thisProd.removeClass("show");
            });
        }
    }
    lookbook();


    // ========================================================================
    // 
    // ========================================================================
    function initLinkBind() {
        const $reviewsContent = $('#product-reviews');
        const $collapsible = $('.productView-reviewTabLink', $reviewsContent);
        const $content = $('#product-reviews', $reviewsContent);

        $('.review-link a').on('click', (event) => {
            event.preventDefault();
            if (!$('.productView-reviewTabLink').parent().hasClass('is-active')) {
                $('.productView-reviewTabLink').trigger('click');
            }

            $('html, body').animate({
                scrollTop: $('#product-reviews').offset().top - $('.header').height(),
            }, 700);

            if (!$content.hasClass('is-active')) {
                $collapsible.trigger(CollapsibleEvents.click);
            }
            
        });
    }
    initLinkBind();


    // ========================================================================
    // WINDOWN RESIZE
    // ========================================================================
    $(window).resize(function() {
        activeMenu_Mobile();
        sidebar_mobile();
        footer_mobile();
        services_slider();
    });
}
