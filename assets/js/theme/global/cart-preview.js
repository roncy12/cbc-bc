import $ from 'jquery';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import 'jquery-mousewheel';
import 'mCustomScrollbar';

export const CartPreviewEvents = {
    close: 'closed.fndtn.dropdown',
    open: 'opened.fndtn.dropdown',
};


export default function (context) {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cartDropdown = $('.dropdown-cart');
    const $cartLoading = $('<div class="loadingOverlay"></div>');

    $('body').on('cart-quantity-update', (event, quantity) => {
        $('.cart-quantity')
            .text(quantity)
            .toggleClass('countPill--positive', quantity > 0);
    });

    $cart.on('click', function(event) {
        event.preventDefault();
        if(context.themeSettings.header_layout_2 == true) {
            var options = {
                template: 'common/cart-preview-2',
            };
        } else {
            var options = {
                template: 'common/cart-preview',
            };
        }

        // Redirect to full cart page
        //
        // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
        // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
        // if (/Mobi/i.test(navigator.userAgent)) {
        //     return event.stopPropagation();
        // }

        $(this).parent().toggleClass('is-open');

        $cartDropdown
            .addClass(loadingClass)
            .html($cartLoading);
        $cartLoading
            .show();

        utils.api.cart.getContent(options, (err, response) => {
            $cartDropdown
                .removeClass(loadingClass)
                .html(response);
            $cartLoading
                .hide();

            const $previewCartList = $('.previewCartList');
            $previewCartList.mCustomScrollbar('destroy');
            if ($previewCartList.length) {
                $previewCartList.mCustomScrollbar({
                    scrollInertia: 400,
                });
            }
        });
    });

    if ($(window).width() > 1024) {
        $('body').on('click', function(event) {
            if ($(event.target).closest('.themevale_cart').length === 0 && $cart.parent().hasClass('is-open')) {
                $cart.parent().removeClass('is-open');
            }
        });
    }
}
