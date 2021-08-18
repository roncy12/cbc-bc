(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Cart = function (_PageManager) {
    _inherits(Cart, _PageManager);

    function Cart() {
        _classCallCheck(this, Cart);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    Cart.prototype.onReady = function onReady() {
        this.$cartContent = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-content]');
        this.$cartMessages = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-status]');
        this.$cartTotals = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-totals]');
        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

        this.bindEvents();
    };

    Cart.prototype.cartUpdate = function cartUpdate($target) {
        var _this2 = this;

        var itemId = $target.data('cartItemid');
        var $el = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#qty-' + itemId);
        var oldQty = parseInt($el.val(), 10);
        var maxQty = parseInt($el.data('quantityMax'), 10);
        var minQty = parseInt($el.data('quantityMin'), 10);
        var minError = $el.data('quantityMinError');
        var maxError = $el.data('quantityMaxError');
        var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
        // Does not quality for min/max quantity
        if (newQty < minQty) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                text: minError,
                type: 'error'
            });
        } else if (maxQty > 0 && newQty > maxQty) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                text: maxError,
                type: 'error'
            });
        }

        this.$overlay.show();

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
            _this2.$overlay.hide();

            if (response.data.status === 'succeed') {
                // if the quantity is changed "1" from "0", we have to remove the row.
                var remove = newQty === 0;

                _this2.refreshContent(remove);
            } else {
                $el.val(oldQty);
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    text: response.data.errors.join('\n'),
                    type: 'error'
                });
            }
        });
    };

    Cart.prototype.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target) {
        var _this3 = this;

        var preVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        var itemId = $target.data('cartItemid');
        var $el = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#qty-' + itemId);
        var maxQty = parseInt($el.data('quantityMax'), 10);
        var minQty = parseInt($el.data('quantityMin'), 10);
        var oldQty = preVal !== null ? preVal : minQty;
        var minError = $el.data('quantityMinError');
        var maxError = $el.data('quantityMaxError');
        var newQty = parseInt(Number($el.attr('value')), 10);
        var invalidEntry = void 0;
        // Does not quality for min/max quantity
        if (!newQty) {
            invalidEntry = $el.attr('value');
            $el.val(oldQty);
            return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                text: invalidEntry + ' is not a valid entry',
                type: 'error'
            });
        } else if (newQty < minQty) {
            $el.val(oldQty);
            return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                text: minError,
                type: 'error'
            });
        } else if (maxQty > 0 && newQty > maxQty) {
            $el.val(oldQty);
            return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                text: maxError,
                type: 'error'
            });
        }

        this.$overlay.show();
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
            _this3.$overlay.hide();

            if (response.data.status === 'succeed') {
                // if the quantity is changed "1" from "0", we have to remove the row.
                var remove = newQty === 0;

                _this3.refreshContent(remove);
            } else {
                $el.val(oldQty);
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    text: response.data.errors.join('\n'),
                    type: 'error'
                });
            }
        });
    };

    Cart.prototype.cartRemoveItem = function cartRemoveItem(itemId) {
        var _this4 = this;

        this.$overlay.show();
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
            if (response.data.status === 'succeed') {
                _this4.refreshContent(true);
            } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    text: response.data.errors.join('\n'),
                    type: 'error'
                });
            }
        });
    };

    Cart.prototype.cartEditOptions = function cartEditOptions(itemId) {
        var _this5 = this;

        var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["defaultModal"])();
        var options = {
            template: 'cart/modals/configure-product'
        };

        modal.open();

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
            modal.updateContent(response.content);

            _this5.bindGiftWrappingForm();
        });

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, option) {
            var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_3___default()(option);
            var $form = $changedOption.parents('form');
            var $submit = jquery__WEBPACK_IMPORTED_MODULE_3___default()('input.button', $form);
            var $messageBox = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.alertMessageBox');
            var item = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="item_id"]', $form).attr('value');

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
                var data = result.data || {};

                if (err) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        text: err,
                        type: 'error'
                    });
                    return false;
                }

                if (data.purchasing_message) {
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()('p.alertBox-message', $messageBox).text(data.purchasing_message);
                    $submit.prop('disabled', true);
                    $messageBox.show();
                } else {
                    $submit.prop('disabled', false);
                    $messageBox.hide();
                }

                if (!data.purchasable || !data.instock) {
                    $submit.prop('disabled', true);
                } else {
                    $submit.prop('disabled', false);
                }
            });
        });
    };

    Cart.prototype.refreshContent = function refreshContent(remove) {
        var _this6 = this;

        var $cartItemsRows = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-item-row]', this.$cartContent);
        var $cartPageTitle = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-page-title]');
        var options = {
            template: {
                content: 'cart/content',
                totals: 'cart/totals',
                pageTitle: 'cart/page-title',
                statusMessages: 'cart/status-messages'
            }
        };

        this.$overlay.show();

        // Remove last item from cart? Reload
        if (remove && $cartItemsRows.length === 1) {
            return window.location.reload();
        }

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
            _this6.$cartContent.html(response.content);
            _this6.$cartTotals.html(response.totals);
            _this6.$cartMessages.html(response.statusMessages);

            $cartPageTitle.replaceWith(response.pageTitle);
            _this6.bindEvents();
            _this6.$overlay.hide();

            var quantity = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-quantity]', _this6.$cartContent).data('cartQuantity') || 0;

            jquery__WEBPACK_IMPORTED_MODULE_3___default()('body').trigger('cart-quantity-update', quantity);
        });
    };

    Cart.prototype.bindCartEvents = function bindCartEvents() {
        var _this7 = this;

        var debounceTimeout = 400;
        var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
        var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
        var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
        var preVal = void 0;

        // cart update
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-cart-update]', this.$cartContent).on('click', function (event) {
            var $target = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget);

            event.preventDefault();

            // update cart quantity
            cartUpdate($target);
        });

        // cart qty manually updates
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-item-qty-input', this.$cartContent).on('focus', function () {
            preVal = _this7.value;
        }).change(function (event) {
            var $target = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget);
            event.preventDefault();

            // update cart quantity
            cartUpdateQtyTextChange($target, preVal);
        });

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-remove', this.$cartContent).on('click', function (event) {
            var itemId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('cartItemid');
            var string = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('confirmDelete');
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                text: string,
                type: 'warning',
                showCancelButton: true
            }).then(function () {
                // remove item from cart
                cartRemoveItem(itemId);
            });
            event.preventDefault();
        });

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-item-edit]', this.$cartContent).on('click', function (event) {
            var itemId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('itemEdit');

            event.preventDefault();
            // edit item in cart
            _this7.cartEditOptions(itemId);
        });
    };

    Cart.prototype.bindPromoCodeEvents = function bindPromoCodeEvents() {
        var _this8 = this;

        var $couponContainer = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code');
        var $couponForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-form');
        var $codeInput = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="couponcode"]', $couponForm);

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-add').on('click', function (event) {
            event.preventDefault();

            jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).hide();
            $couponContainer.show();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-cancel').show();
            $codeInput.trigger('focus');
        });

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-cancel').on('click', function (event) {
            event.preventDefault();

            $couponContainer.hide();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-cancel').hide();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.coupon-code-add').show();
        });

        $couponForm.on('submit', function (event) {
            var code = $codeInput.val();

            event.preventDefault();

            // Empty code
            if (!code) {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    text: $codeInput.data('error'),
                    type: 'error'
                });
            }

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
                if (response.data.status === 'success') {
                    _this8.refreshContent();
                } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        text: response.data.errors.join('\n'),
                        type: 'error'
                    });
                }
            });
        });
    };

    Cart.prototype.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
        var _this9 = this;

        var $certContainer = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-code');
        var $certForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.cart-gift-certificate-form');
        var $certInput = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="certcode"]', $certForm);

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-add').on('click', function (event) {
            event.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).toggle();
            $certContainer.toggle();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-cancel').toggle();
        });

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-cancel').on('click', function (event) {
            event.preventDefault();
            $certContainer.toggle();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-add').toggle();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.gift-certificate-cancel').toggle();
        });

        $certForm.on('submit', function (event) {
            var code = $certInput.val();

            event.preventDefault();

            if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_4__["default"])(code)) {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    text: $certInput.data('error'),
                    type: 'error'
                });
            }

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
                if (resp.data.status === 'success') {
                    _this9.refreshContent();
                } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                        text: resp.data.errors.join('\n'),
                        type: 'error'
                    });
                }
            });
        });
    };

    Cart.prototype.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
        var _this10 = this;

        var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["defaultModal"])();

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-item-giftwrap]').on('click', function (event) {
            var itemId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('itemGiftwrap');
            var options = {
                template: 'cart/modals/gift-wrapping-form'
            };

            event.preventDefault();

            modal.open();

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
                modal.updateContent(response.content);

                _this10.bindGiftWrappingForm();
            });
        });
    };

    Cart.prototype.bindGiftWrappingForm = function bindGiftWrappingForm() {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.giftWrapping-select').on('change', function (event) {
            var $select = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget);
            var id = $select.val();
            var index = $select.data('index');

            if (!id) {
                return;
            }

            var allowMessage = $select.find('option[value=' + id + ']').data('allowMessage');

            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.giftWrapping-image-' + index).hide();
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('#giftWrapping-image-' + index + '-' + id).show();

            if (allowMessage) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#giftWrapping-message-' + index).show();
            } else {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('#giftWrapping-message-' + index).hide();
            }
        });

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.giftWrapping-select').trigger('change');

        function toggleViews() {
            var value = jquery__WEBPACK_IMPORTED_MODULE_3___default()('input:radio[name ="giftwraptype"]:checked').val();
            var $singleForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.giftWrapping-single');
            var $multiForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.giftWrapping-multiple');

            if (value === 'same') {
                $singleForm.show();
                $multiForm.hide();
            } else {
                $singleForm.hide();
                $multiForm.show();
            }
        }

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="giftwraptype"]').on('click', toggleViews);

        toggleViews();
    };

    Cart.prototype.bindEvents = function bindEvents() {
        this.bindCartEvents();
        this.bindPromoCodeEvents();
        this.bindGiftWrappingEvents();
        this.bindGiftCertificateEvents();

        // initiate shipping estimator module
        this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"](jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-shipping-estimator]'));
    };

    return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var ShippingEstimator = function () {
    function ShippingEstimator($element) {
        _classCallCheck(this, ShippingEstimator);

        this.$element = $element;

        this.$state = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-field-type="State"]', this.$element);
        this.initFormValidation();
        this.bindStateCountryChange();
        this.bindEstimatorEvents();
    }

    ShippingEstimator.prototype.initFormValidation = function initFormValidation() {
        var _this = this;

        this.shippingEstimator = 'form[data-shipping-estimator]';
        this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
            submit: this.shippingEstimator + ' .shipping-estimate-submit'
        });

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-submit', this.$element).on('click', function (event) {
            // When switching between countries, the state/region is dynamic
            // Only perform a check for all fields when country has a value
            // Otherwise areAll('valid') will check country for validity
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.shippingEstimator + ' select[name="shipping-country"]').val()) {
                _this.shippingValidator.performCheck();
            }

            if (_this.shippingValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });

        this.bindValidation();
        this.bindStateValidation();
        this.bindUPSRates();
    };

    ShippingEstimator.prototype.bindValidation = function bindValidation() {
        this.shippingValidator.add([{
            selector: this.shippingEstimator + ' select[name="shipping-country"]',
            validate: function validate(cb, val) {
                var countryId = Number(val);
                var result = countryId !== 0 && !Number.isNaN(countryId);

                cb(result);
            },
            errorMessage: 'The \'Country\' field cannot be blank.'
        }]);
    };

    ShippingEstimator.prototype.bindStateValidation = function bindStateValidation() {
        var _this2 = this;

        this.shippingValidator.add([{
            selector: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.shippingEstimator + ' select[name="shipping-state"]'),
            validate: function validate(cb) {
                var result = void 0;

                var $ele = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2.shippingEstimator + ' select[name="shipping-state"]');

                if ($ele.length) {
                    var eleVal = $ele.val();

                    result = eleVal && eleVal.length && eleVal !== 'State/province';
                }

                cb(result);
            },
            errorMessage: 'The \'State/Province\' field cannot be blank.'
        }]);
    };

    /**
     * Toggle between default shipping and ups shipping rates
     */


    ShippingEstimator.prototype.bindUPSRates = function bindUPSRates() {
        var UPSRateToggle = '.estimator-form-toggleUPSRate';

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', UPSRateToggle, function (event) {
            var $estimatorFormUps = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--ups');
            var $estimatorFormDefault = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--default');

            event.preventDefault();

            $estimatorFormUps.toggleClass('u-hiddenVisually');
            $estimatorFormDefault.toggleClass('u-hiddenVisually');
        });
    };

    ShippingEstimator.prototype.bindStateCountryChange = function bindStateCountryChange() {
        var _this3 = this;

        var $last = void 0;

        // Requests the states for a country with AJAX
        Object(_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$state, this.context, { useIdForStates: true }, function (err, field) {
            if (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    text: err,
                    type: 'error'
                });

                throw new Error(err);
            }

            var $field = jquery__WEBPACK_IMPORTED_MODULE_0___default()(field);

            if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
                _this3.shippingValidator.remove(_this3.$state);
            }

            if ($last) {
                _this3.shippingValidator.remove($last);
            }

            if ($field.is('select')) {
                $last = field;
                _this3.bindStateValidation();
            } else {
                $field.attr('placeholder', 'State/province');
                _common_form_utils__WEBPACK_IMPORTED_MODULE_4__["Validators"].cleanUpStateValidation(field);
            }

            // When you change a country, you swap the state/province between an input and a select dropdown
            // Not all countries require the province to be filled
            // We have to remove this class when we swap since nod validation doesn't cleanup for us
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
        });
    };

    ShippingEstimator.prototype.bindEstimatorEvents = function bindEstimatorEvents() {
        var $estimatorContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimator');
        var $estimatorForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form');

        $estimatorForm.on('submit', function (event) {
            var params = {
                country_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-country"]', $estimatorForm).val(),
                state_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-state"]', $estimatorForm).val(),
                city: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-city"]', $estimatorForm).val(),
                zip_code: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-zip"]', $estimatorForm).val()
            };

            event.preventDefault();

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quotes').html(response.content);

                // bind the select button
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select-shipping-quote').on('click', function (clickEvent) {
                    var quoteId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quote:checked').val();

                    clickEvent.preventDefault();

                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.submitShippingQuote(quoteId, function () {
                        window.location.reload();
                    });
                });
            });
        });

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').on('click', function (event) {
            event.preventDefault();

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).hide();
            $estimatorContainer.removeClass('u-hiddenVisually');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').show();
        });

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').on('click', function (event) {
            event.preventDefault();

            $estimatorContainer.addClass('u-hiddenVisually');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').show();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').hide();
        });
    };

    return ShippingEstimator;
}();

/* harmony default export */ __webpack_exports__["default"] = (ShippingEstimator);

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
    if (typeof cert !== 'string') {
        return false;
    }

    // Add any custom gift certificate validation logic here
    return true;
});

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.12.js.map