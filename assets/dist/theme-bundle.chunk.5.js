(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");








var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
    var $input = jquery__WEBPACK_IMPORTED_MODULE_3___default()(input);
    var $formField = $input.parent('.' + formFieldClass);
    var tagName = $input.prop('tagName').toLowerCase();

    var className = formFieldClass + '--' + tagName;
    var specificClassName = void 0;

    // Input can be text/checkbox/radio etc...
    if (tagName === 'input') {
        var inputType = $input.prop('type');

        if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
            // ie: .form-field--checkbox, .form-field--radio
            className = formFieldClass + '--' + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
        } else {
            // ie: .form-field--input .form-field--inputText
            specificClassName = '' + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
        }
    }

    // Apply class modifier
    return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var $form = jquery__WEBPACK_IMPORTED_MODULE_3___default()(formSelector);
    var $inputs = $form.find(inputTagNames.join(', '));

    // Obtain options
    var _options$formFieldCla = options.formFieldClass,
        formFieldClass = _options$formFieldCla === undefined ? 'form-field' : _options$formFieldCla;

    // Classify each input in a form

    $inputs.each(function (__, input) {
        classifyInput(input, formFieldClass);
    });

    return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
    var fieldId = $field.prop('name').match(/(\[.*\])/);

    if (fieldId && fieldId.length !== 0) {
        return fieldId[0];
    }

    return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
    var fieldId = getFieldId($stateField);
    var stateFieldAttrs = {
        type: 'hidden',
        name: 'FormFieldIsText' + fieldId,
        value: '1'
    };

    $stateField.after(jquery__WEBPACK_IMPORTED_MODULE_3___default()('<input />', stateFieldAttrs));
}

var Validators = {
    /**
     * Sets up a new validation when the form is dirty
     * @param validator
     * @param field
     */
    setEmailValidation: function setEmailValidation(validator, field) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var result = _models_forms__WEBPACK_IMPORTED_MODULE_5__["default"].email(val);

                    cb(result);
                },
                errorMessage: 'You must enter a valid email.'
            });
        }
    },

    /**
     * Validate password fields
     * @param validator
     * @param passwordSelector
     * @param password2Selector
     * @param requirements
     * @param isOptional
     */
    setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
        var $password = jquery__WEBPACK_IMPORTED_MODULE_3___default()(passwordSelector);
        var passwordValidations = [{
            selector: passwordSelector,
            validate: function validate(cb, val) {
                var result = val.length;

                if (isOptional) {
                    return cb(true);
                }

                cb(result);
            },
            errorMessage: 'You must enter a password.'
        }, {
            selector: passwordSelector,
            validate: function validate(cb, val) {
                var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

                // If optional and nothing entered, it is valid
                if (isOptional && val.length === 0) {
                    return cb(true);
                }

                cb(result);
            },
            errorMessage: requirements.error
        }, {
            selector: password2Selector,
            validate: function validate(cb, val) {
                var result = val.length;

                if (isOptional) {
                    return cb(true);
                }

                cb(result);
            },
            errorMessage: 'You must enter a password.'
        }, {
            selector: password2Selector,
            validate: function validate(cb, val) {
                var result = val === $password.val();

                cb(result);
            },
            errorMessage: 'Your passwords do not match.'
        }];

        validator.add(passwordValidations);
    },

    /**
     * Validate password fields
     * @param {Nod} validator
     * @param {Object} selectors
     * @param {string} selectors.errorSelector
     * @param {string} selectors.fieldsetSelector
     * @param {string} selectors.formSelector
     * @param {string} selectors.maxPriceSelector
     * @param {string} selectors.minPriceSelector
     */
    setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
        var errorSelector = selectors.errorSelector,
            fieldsetSelector = selectors.fieldsetSelector,
            formSelector = selectors.formSelector,
            maxPriceSelector = selectors.maxPriceSelector,
            minPriceSelector = selectors.minPriceSelector;


        validator.configure({
            form: formSelector,
            preventSubmit: true,
            successClass: '_' // KLUDGE: Don't apply success class
        });

        validator.add({
            errorMessage: 'Min price must be less than max. price.',
            selector: minPriceSelector,
            validate: 'min-max:' + minPriceSelector + ':' + maxPriceSelector
        });

        validator.add({
            errorMessage: 'Min price must be less than max. price.',
            selector: maxPriceSelector,
            validate: 'min-max:' + minPriceSelector + ':' + maxPriceSelector
        });

        validator.add({
            errorMessage: 'Max. price is required.',
            selector: maxPriceSelector,
            validate: 'presence'
        });

        validator.add({
            errorMessage: 'Min. price is required.',
            selector: minPriceSelector,
            validate: 'presence'
        });

        validator.add({
            errorMessage: 'Input must be greater than 0.',
            selector: [minPriceSelector, maxPriceSelector],
            validate: 'min-number:0'
        });

        validator.setMessageOptions({
            selector: [minPriceSelector, maxPriceSelector],
            parent: fieldsetSelector,
            errorSpan: errorSelector
        });
    },

    /**
     * Sets up a new validation when the form is dirty
     * @param validator
     * @param field
     */
    setStateCountryValidation: function setStateCountryValidation(validator, field) {
        if (field) {
            validator.add({
                selector: field,
                validate: 'presence',
                errorMessage: 'The \'State/Province\' field cannot be blank.'
            });
        }
    },

    /**
     * Removes classes from dirty form if previously checked
     * @param field
     */
    cleanUpStateValidation: function cleanUpStateValidation(field) {
        var $fieldClassElement = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-type="' + field.data('fieldType') + '"]');

        Object.keys(_nod__WEBPACK_IMPORTED_MODULE_4__["default"].classes).forEach(function (value) {
            if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_4__["default"].classes[value])) {
                $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_4__["default"].classes[value]);
            }
        });
    }
};



/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
    email: function email(value) {
        var re = /^.+@.+\..+/;
        return re.test(value);
    },


    /**
     * Validates a password field
     * @param value
     * @returns {boolean}
     */
    password: function password(value) {
        return this.notEmpty(value);
    },


    /**
     * validates if a field is empty
     * @param value
     * @returns {boolean}
     *
     */
    notEmpty: function notEmpty(value) {
        return value.length > 0;
    }
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themevale/themevale_Countdown */ "./assets/js/theme/themevale/themevale_Countdown.js");
/* harmony import */ var _themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themevale/themevale_fbt */ "./assets/js/theme/themevale/themevale_fbt.js");
/* harmony import */ var _themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./themevale/themevale_stickyAddToCart */ "./assets/js/theme/themevale/themevale_stickyAddToCart.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Import all product specific js
 */











var Product = function (_PageManager) {
    _inherits(Product, _PageManager);

    function Product(context) {
        _classCallCheck(this, Product);

        var _this = _possibleConstructorReturn(this, _PageManager.call(this, context));

        _this.url = window.location.href;
        _this.$reviewLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-reveal-id="modal-review-form"]');
        return _this;
    }

    Product.prototype.onReady = function onReady() {
        var _this2 = this;

        // Listen for foundation modal close events to sanitize URL after review.
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('close.fndtn.reveal', function () {
            if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        var validator = void 0;

        // Init collapsible
        Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();

        // countdown time
        var product_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-cart-item-add] [name="product_id"]').val();
        Object(_themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_7__["default"])(product_id);

        this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"](jquery__WEBPACK_IMPORTED_MODULE_0___default()('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();

        var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
        var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
            validator = review.registerValidation(_this2.context);
        });

        $reviewForm.on('submit', function () {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
        Object(_themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_9__["default"])();
        Object(_themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context);
    };

    Product.prototype.productReviewHandler = function productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    };

    return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var _class = function () {
    function _class($reviewForm) {
        _classCallCheck(this, _class);

        this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
            submit: $reviewForm.find('input[type="submit"]')
        });

        this.$reviewsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-reviews');
        this.$collapsible = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.productView-reviewTabLink', this.$reviewsContent);
        // this.initLinkBind();
        this.injectPaginationLink();
        this.collapseReviews();
    }

    /**
     * On initial page load, the user clicks on "(12 Reviews)" link
     * The browser jumps to the review page and should expand the reviews section
     */
    // initLinkBind() {
    //     const $content = $('#product-reviews', this.$reviewsContent);

    //     $('.review-link a').on('click', (event) => {
    //         event.preventDefault();
    //         if (!$('.productView-reviewTabLink').parent().hasClass('is-active')) {
    //             $('.productView-reviewTabLink').trigger('click');
    //         }

    //         $('html, body').animate({
    //             scrollTop: $('#product-reviews').offset().top - $('.header').height(),
    //         }, 700);

    //         if (!$content.hasClass('is-active')) {
    //             this.$collapsible.trigger(CollapsibleEvents.click);
    //         }

    //     });
    // }

    _class.prototype.collapseReviews = function collapseReviews() {
        // We're in paginating state, do not collapse
        if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
            return;
        }

        // force collapse on page load
        this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
    };

    /**
     * Inject ID into the pagination link
     */


    _class.prototype.injectPaginationLink = function injectPaginationLink() {
        var $nextLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination-item--next .pagination-link', this.$reviewsContent);
        var $prevLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination-item--previous .pagination-link', this.$reviewsContent);

        if ($nextLink.length) {
            $nextLink.attr('href', $nextLink.attr('href') + ' #product-reviews');
        }

        if ($prevLink.length) {
            $prevLink.attr('href', $prevLink.attr('href') + ' #product-reviews');
        }
    };

    _class.prototype.registerValidation = function registerValidation(context) {
        this.context = context;
        this.validator.add([{
            selector: '[name="revrating"]',
            validate: 'presence',
            errorMessage: this.context.reviewRating
        }, {
            selector: '[name="revtitle"]',
            validate: 'presence',
            errorMessage: this.context.reviewSubject
        }, {
            selector: '[name="revtext"]',
            validate: 'presence',
            errorMessage: this.context.reviewComment
        }, {
            selector: '[name="email"]',
            validate: function validate(cb, val) {
                var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
                cb(result);
            },
            errorMessage: this.context.reviewEmail
        }]);

        return this.validator;
    };

    _class.prototype.validate = function validate() {
        return this.validator.performCheck();
    };

    return _class;
}();

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VideoGallery = function () {
    function VideoGallery($element) {
        _classCallCheck(this, VideoGallery);

        this.$player = $element.find('[data-video-player]');
        this.$videos = $element.find('[data-video-item]');
        this.currentVideo = {};
        this.bindEvents();
    }

    VideoGallery.prototype.selectNewVideo = function selectNewVideo(e) {
        e.preventDefault();

        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);

        this.currentVideo = {
            id: $target.data('videoId'),
            $selectedThumb: $target
        };

        this.setMainVideo();
        this.setActiveThumb();
    };

    VideoGallery.prototype.setMainVideo = function setMainVideo() {
        this.$player.attr('src', '//www.youtube.com/embed/' + this.currentVideo.id);
    };

    VideoGallery.prototype.setActiveThumb = function setActiveThumb() {
        this.$videos.removeClass('is-active');
        this.currentVideo.$selectedThumb.addClass('is-active');
    };

    VideoGallery.prototype.bindEvents = function bindEvents() {
        this.$videos.on('click', this.selectNewVideo.bind(this));
    };

    return VideoGallery;
}();

function videoGallery() {
    var pluginKey = 'video-gallery';
    var $videoGallery = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + pluginKey + ']');

    $videoGallery.each(function (index, element) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
        var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

        if (isInitialized) {
            return;
        }

        $el.data(pluginKey, new VideoGallery($el));
    });
}

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_fbt.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_fbt.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);







/* harmony default export */ __webpack_exports__["default"] = (function (context) {
    var relate_tab = "#product-related";
    // check custom field fbt
    showFBT();

    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.themvale-fbt-toggle-options', function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next().is(':visible') == false) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next().slideDown();
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next().slideUp();
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', '.themvale-fbt-detail-checkbox', function () {
        var id = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('id').replace('fbt_product', '');
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).is(':checked') == false) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-item[data-product-id="' + id + '"]').removeClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').removeClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('form').find('.themvale-fbt-detail-options').slideUp();
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-item[data-product-id="' + id + '"]').addClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').addClass('isChecked');
        }
        totalPrice();
    });

    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '#themvale-fbt-addAll', function (event) {
        var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-fbt'));
        var arrPro = new Array();
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-detail-checkbox').each(function (i, val) {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).is(':checked')) {
                arrPro.push(i);
            }
        });

        var check = false;

        if (arrPro.length > 0) {
            check = checkProduct($form, arrPro);
        }

        if (check) {
            if (arrPro.length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-fbt .loadingOverlay').show();
                addToCart($form, 0, arrPro);
            }
        } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                text: 'Please make sure all options have been filled in.',
                type: 'warning'
            });
        }

        event.preventDefault();
    });

    function showFBT() {
        // related product
        var options = {
            template: {
                item: 'themevale/fbt-item',
                options: 'themevale/fbt-options',
                image: 'themevale/fbt-image'
            }
        };

        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-name.fbt').length > 0) {
            var num = 0;
            var list = [];

            jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').each(function (i, val) {
                list.push({ i: i, data: "" });
                var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('[data-product-id]').data('product-id');
                if (pId != undefined) {
                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
                        if (err) {
                            return '';
                        }
                        list.forEach(function (element) {
                            if (element.i == i) {
                                element.data = response;
                            }
                        });

                        num++;
                        if (num == jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').length) showList(list);
                    });
                }
            });
        } else if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-name.fbt-product').length > 0) {
            var num = 0;
            var list = [];

            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-value.fbt-product').each(function (i) {
                list.push({ i: i, data: "" });
                if (!isNaN(Number(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text()))) {
                    var productId = Number(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text());
                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, options, function (err, response) {
                        if (err) {
                            return '';
                        }
                        list.forEach(function (element) {
                            if (element.i == i) {
                                element.data = response;
                            }
                        });
                        num++;
                        if (num == jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-value.fbt-product').length) showList(list);
                    });
                } else {
                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text(), options, function (err, response) {
                        if (err) {
                            return '';
                        }
                        list.forEach(function (element) {
                            if (element.i == i) {
                                element.data = response;
                            }
                        });
                        num++;
                        if (num == jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-value.fbt-product').length) showList(list);
                    });
                }
            });
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-fbt').remove();
        }
    }

    function showList(list) {
        list.forEach(function (element) {
            var response = element.data;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-fbt .themvale-fbt-image-list').append(response.image);
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-fbt .themvale-fbt-product-list').append(response.item);
            if (response.options.trim() != "") {
                var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.item).data('product-id');
                var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-fbt .themvale-fbt-product-list .themvale-fbt-product-item[data-product-id="' + pId + '"] form');
                $form.append(response.options);
                var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form);
                var hasOptions = $productOptionsElement.html().trim().length;
                var hasDefaultOptions = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.options).find('[data-default]').length;
                if (hasDefaultOptions && hasOptions) {
                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
                        var attributesData = response.data || {};
                        var attributesContent = response.content || {};
                        updateProductAttributes($form, attributesData);
                        if (hasDefaultOptions) {
                            updateView($form, attributesData, attributesContent);
                        } else {
                            updateDefaultAttributesForOOS(attributesData);
                        }
                    });
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-fbt').show();
        productOptions();
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).width() <= 1024) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-fbt .themvale-fbt-product-list').append('<div class="themvale-fbt-image-item fbt__total">\
              <p class="themevale-text-price"><span>Total Price:</span> <span class="themvale-fbt-total-price" id="themvale-fbt-totalPrice"></span></p>\
              <a class="button button--primary themvale-fbt-total-button" id="themvale-fbt-addAll" href="#">Add all to Cart</a>\
            </div>');
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-fbt').append('<div class="themvale-fbt-image-item fbt__total">\
              <p class="themevale-text-price"><span>Total Price:</span> <span class="themvale-fbt-total-price" id="themvale-fbt-totalPrice"></span></p>\
              <a class="button button--primary themvale-fbt-total-button" id="themvale-fbt-addAll" href="#">Add all to Cart</a>\
            </div>');
        }
        slick_mobile();
        totalPrice();
    }

    function slick_mobile() {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-list').slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: false,
            arrows: true,
            nextArrow: '<svg class="slick-next slick-arrow"><use xlink:href="#icon-slick-next"></use></svg>',
            prevArrow: '<svg class="slick-prev slick-arrow"><use xlink:href="#icon-slick-prev"></use></svg>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: false,
                    arrows: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToScroll: 3,
                    slidesToShow: 3
                }
            }]
        });
    }

    function checkProduct(form, arrPro) {
        var check = true;

        for (var i = 0, len = arrPro.length; i < len; i++) {
            var k = arrPro[i];
            var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()(form[k]);
            if ($form.find('[data-fbt-option-change]').length) {
                check = checkBeforeAdd($form);
                if (check == false) return false;
            }
        }
        return check;
    }

    function checkBeforeAdd($attributes) {
        var check = true;
        $attributes.find('input:text, input:password, input:file, textarea').each(function () {

            if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
                if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
                    check = false;
                }
            }
        });

        $attributes.find('select').each(function () {

            if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
                if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
                    check = false;
                }
            }
        });

        var att = "";
        $attributes.find('input:radio, input:checkbox').each(function () {
            if (att != jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name")) {

                att = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name");
                if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {
                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
                    }
                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
                    }
                } else {
                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
                            check = false;
                        }
                    }
                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
                            check = false;
                        }
                    }
                }
            }
        });

        return check;
    }

    function addToCart(form, i, arrP) {

        if (i >= arrP.length) {
            window.location = '/cart.php';
            return;
        }

        if (window.FormData === undefined) {
            return;
        }
        var k = arrP[i];
        // Add item to cart
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[k])), function (err, response) {
            var errorMessage = err || response.data.error;

            // Guard statement
            if (errorMessage) {
                // Strip the HTML from the error message
                var tmp = document.createElement('DIV');
                tmp.innerHTML = errorMessage;
                alert(tmp.textContent || tmp.innerText);
            }
            i++;
            if (i >= arrP.length) {
                window.location = '/cart.php';
                return;
            }
            addToCart(form, i, arrP);
            // return response.data.cart_item.product_id;
        });
    }

    function totalPrice() {
        var total = 0;
        var pos = 0;
        var symbol = "$";
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item.isChecked').each(function (i, val) {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').length) var currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').text();else var currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withoutTax').text();
            var price = parseFloat(currency.replace(/[^0-9.-]+/g, ""));
            var s = currency.replace(parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), "");
            if (isNaN(parseFloat(s.replace(/[^0-9.-]+/g, "")))) symbol = s;
            if (currency.indexOf(symbol) != -1) pos = currency.indexOf(symbol);
            total = total + price;
        });
        total = parseFloat(total).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (pos == 0) total = symbol + total;else total = total + symbol;
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#themvale-fbt-totalPrice').html(total);
    }

    function productOptions() {
        totalPrice();
        var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', jquery__WEBPACK_IMPORTED_MODULE_2___default()(document));

        // var arrPro = new Array();
        for (var i = 0, len = $form.length; i < len; i++) {
            var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form[i]);
            $productOptionsElement.on('change', function (event) {
                productOptionsChanged(event);
            });
        }
    }

    function productOptionsChanged(event) {
        var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target);
        var $form = $changedOption.parents('form');
        var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $form).val();

        // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
        if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
            return;
        }

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            var productAttributesData = response.data || {};
            var productAttributesContent = response.content || {};
            showProductImage(productId, productAttributesData);
            updateProductAttributes($form, productAttributesData);
            updateView($form, productAttributesData, productAttributesContent);
            totalPrice();
        });
    }

    function updateProductAttributes($scope, data) {
        var behavior = data.out_of_stock_behavior;
        var inStockIds = data.in_stock_attributes;
        var outOfStockMessage = ' (' + data.out_of_stock_message + ')';

        if (behavior !== 'hide_option' && behavior !== 'label_option') {
            return;
        }

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-attribute-value]', $scope).each(function (i, attribute) {
            var $attribute = jquery__WEBPACK_IMPORTED_MODULE_2___default()(attribute);
            var attrId = parseInt($attribute.data('productAttributeValue'), 10);

            if (inStockIds.indexOf(attrId) !== -1) {
                enableAttribute($attribute, behavior, outOfStockMessage);
            } else {
                disableAttribute($attribute, behavior, outOfStockMessage);
            }
        });
    }

    function disableAttribute($attribute, behavior, outOfStockMessage) {
        if (getAttributeType($attribute) === 'set-select') {
            return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.hide();
        } else {
            $attribute.addClass('unavailable');
        }
    }

    function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        var $select = $attribute.parent();

        if (behavior === 'hide_option') {
            $attribute.toggleOption(false);
            // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
            if ($select.val() === $attribute.attr('value')) {
                $select[0].selectedIndex = 0;
            }
        } else {
            $attribute.attr('disabled', 'disabled');
            $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
        }
    }

    function enableAttribute($attribute, behavior, outOfStockMessage) {
        if (getAttributeType($attribute) === 'set-select') {
            return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.show();
        } else {
            $attribute.removeClass('unavailable');
        }
    }

    function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        if (behavior === 'hide_option') {
            $attribute.toggleOption(true);
        } else {
            $attribute.prop('disabled', false);
            $attribute.html($attribute.html().replace(outOfStockMessage, ''));
        }
    }

    function getAttributeType($attribute) {
        var $parent = $attribute.closest('[data-product-attribute]');

        return $parent ? $parent.data('productAttribute') : null;
    }

    function showProductImage(productId, data) {
        if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(data.image)) {

            var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.image.getSrc(data.image.data, context.themeSettings.product_size);

            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-item[data-product-id="' + productId + '"]').find('img').attr({
                'src': mainImageUrl,
                'data-src': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('src')
            });
        } else {
            var _mainImageUrl = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-item[data-product-id="' + productId + '"]').find('img').attr('data-src');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-item[data-product-id="' + productId + '"]').find('img').attr({
                'src': _mainImageUrl,
                'data-src': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('src')
            });
        }
    }

    function updateView($scope, data) {
        var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var viewModel = getViewModel($scope);

        if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
            updatePriceView(viewModel, data.price);
        }
        var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();

        if (!data.purchasable || !data.instock) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-item[data-product-id="' + productId + '"]').removeClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-item[data-product-id="' + productId + '"]').addClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);

            if ($scope.find('[data-fbt-option-change]').length) {
                var check = checkBeforeAdd($scope);
                if (check == true) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $scope).slideUp();
                }
            }
        }
    }

    function updateDefaultAttributesForOOS($scope, data) {
        var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();

        if (!data.purchasable || !data.instock) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-item[data-product-id="' + productId + '"]').removeClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-image-item[data-product-id="' + productId + '"]').addClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);

            if ($scope.find('[data-fbt-option-change]').length) {
                var check = checkBeforeAdd($scope);
                if (check == true) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $scope).slideUp();
                }
            }
        }
    }

    function getViewModel($scope) {
        return {
            $priceWithTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-with-tax]', $scope),
            $priceWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-without-tax]', $scope),
            rrpWithTax: {
                $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withTax', $scope),
                $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-with-tax]', $scope)
            },
            rrpWithoutTax: {
                $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withoutTax', $scope),
                $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-price-without-tax]', $scope)
            },
            nonSaleWithTax: {
                $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withTax', $scope),
                $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-with-tax]', $scope)
            },
            nonSaleWithoutTax: {
                $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withoutTax', $scope),
                $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-without-tax]', $scope)
            },
            priceSaved: {
                $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-section--saving', $scope),
                $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-saved]', $scope)
            },
            priceNowLabel: {
                $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-now-label', $scope)
            },
            priceLabel: {
                $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-label', $scope)
            },
            $weight: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info [data-product-weight]', $scope),
            $increments: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--increments :input', $scope),
            $addToCart: jquery__WEBPACK_IMPORTED_MODULE_2___default()('#form-action-addToCart', $scope),
            $wishlistVariation: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-wishlist-add] [name="variation_id"]', $scope),
            stock: {
                $container: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--stock', $scope),
                $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-stock]', $scope)
            },
            $sku: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-sku]'),
            $upc: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-upc]'),
            quantity: {
                $text: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.incrementTotal', $scope),
                $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name=qty\\[\\]]', $scope)
            },
            $bulkPricing: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-bulkPricing', $scope)
        };
    }

    function clearPricingNotFound(viewModel) {
        viewModel.rrpWithTax.$div.hide();
        viewModel.rrpWithoutTax.$div.hide();
        viewModel.nonSaleWithTax.$div.hide();
        viewModel.nonSaleWithoutTax.$div.hide();
        viewModel.priceSaved.$div.hide();
        viewModel.priceNowLabel.$span.hide();
        viewModel.priceLabel.$span.hide();
    }
    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    function updatePriceView(viewModel, price) {
        clearPricingNotFound(viewModel);

        if (price.with_tax) {
            viewModel.priceLabel.$span.show();
            viewModel.$priceWithTax.html(price.with_tax.formatted);
        }

        if (price.without_tax) {
            viewModel.priceLabel.$span.show();
            viewModel.$priceWithoutTax.html(price.without_tax.formatted);
        }

        if (price.rrp_with_tax) {
            viewModel.rrpWithTax.$div.show();
            viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
        }

        if (price.rrp_without_tax) {
            viewModel.rrpWithoutTax.$div.show();
            viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
        }

        if (price.saved) {
            viewModel.priceSaved.$div.show();
            viewModel.priceSaved.$span.html(price.saved.formatted);
        }

        if (price.non_sale_price_with_tax) {
            viewModel.priceLabel.$span.hide();
            viewModel.nonSaleWithTax.$div.show();
            viewModel.priceNowLabel.$span.show();
            viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
        }

        if (price.non_sale_price_without_tax) {
            viewModel.priceLabel.$span.hide();
            viewModel.nonSaleWithoutTax.$div.show();
            viewModel.priceNowLabel.$span.show();
            viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
        }
    }

    /**
     * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
     * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
     * @param formData: FormData object
     * @returns FormData object
     */
    function filterEmptyFilesFromForm(formData) {
        try {
            for (var _iterator = formData, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref2;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref2 = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref2 = _i.value;
                }

                var _ref = _ref2;
                var key = _ref[0];
                var val = _ref[1];

                if (val instanceof File && !val.name && !val.size) {
                    formData.delete(key);
                }
            }
        } catch (e) {
            console.error(e); // eslint-disable-line no-console
        }
        return formData;
    }
});

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_stickyAddToCart.js":
/*!****************************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_stickyAddToCart.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
    var scroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-action-addToCart').offset();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scroll.top + 100) {
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 767) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left.position-right #recently_bought_list').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
                } else {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left.position-right #recently_bought_list').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
                }
            }
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').removeClass('show_sticky');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').removeClass('is-open');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 767) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", 15);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left.position-right #recently_bought_list').css("bottom", 15);
            } else {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", 0);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left.position-right #recently_bought_list').css("bottom", 0);
            }
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.choose_options_add', function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('is-active');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').toggleClass('is-open');
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.pop-up-option .close', function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pop-up-option").removeClass('is-open');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
    });

    window.onload = function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scroll.top - 160) {
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 767) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left.position-right #recently_bought_list').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
                } else {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left.position-right #recently_bought_list').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
                }
            }
        }
    };
});

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.5.js.map