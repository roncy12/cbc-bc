(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Account = function (_PageManager) {
    _inherits(Account, _PageManager);

    function Account(context) {
        _classCallCheck(this, Account);

        var _this = _possibleConstructorReturn(this, _PageManager.call(this, context));

        _this.$state = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-field-type="State"]');
        _this.$body = jquery__WEBPACK_IMPORTED_MODULE_3___default()('body');
        return _this;
    }

    Account.prototype.onReady = function onReady() {
        var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_8__["classifyForm"])('form[data-edit-account-form]');
        var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_8__["classifyForm"])('form[data-address-form]');
        var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_8__["classifyForm"])('form[data-inbox-form]');
        var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_8__["classifyForm"])('[data-account-return-form]');
        var $paymentMethodForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_8__["classifyForm"])('form[data-payment-method-form]');
        var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_8__["classifyForm"])('[data-account-reorder-form]');
        var $invoiceButton = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-print-invoice]');

        // Injected via template
        this.passwordRequirements = this.context.passwordRequirements;

        // Instantiates wish list JS
        _wishlist__WEBPACK_IMPORTED_MODULE_5__["default"].load(this.context);

        if ($editAccountForm.length) {
            this.registerEditAccountValidation($editAccountForm);
            if (this.$state.is('input')) {
                Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_8__["insertStateHiddenField"])(this.$state);
            }
        }

        if ($invoiceButton.length) {
            $invoiceButton.on('click', function () {
                var left = window.screen.availWidth / 2 - 450;
                var top = window.screen.availHeight / 2 - 320;
                var url = $invoiceButton.data('printInvoice');

                window.open(url, 'orderInvoice', 'width=900,height=650,left=' + left + ',top=' + top + ',scrollbars=1');
            });
        }

        if ($addressForm.length) {
            this.initAddressFormValidation($addressForm);

            if (this.$state.is('input')) {
                Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_8__["insertStateHiddenField"])(this.$state);
            }
        }

        if ($inboxForm.length) {
            this.registerInboxValidation($inboxForm);
        }

        if ($accountReturnForm.length) {
            this.initAccountReturnFormValidation($accountReturnForm);
        }

        if ($paymentMethodForm.length) {
            this.initPaymentMethodFormValidation($paymentMethodForm);
        }

        if ($reorderForm.length) {
            this.initReorderForm($reorderForm);
        }

        this.bindDeleteAddress();
        this.bindDeletePaymentMethod();
    };

    /**
     * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
     */


    Account.prototype.bindDeleteAddress = function bindDeleteAddress() {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-delete-address]').on('submit', function (event) {
            var message = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('deleteAddress');

            if (!window.confirm(message)) {
                event.preventDefault();
            }
        });
    };

    Account.prototype.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-delete-payment-method]').on('submit', function (event) {
            var message = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).data('deletePaymentMethod');

            if (!window.confirm(message)) {
                event.preventDefault();
            }
        });
    };

    Account.prototype.initReorderForm = function initReorderForm($reorderForm) {
        var _this2 = this;

        $reorderForm.on('submit', function (event) {
            var $productReorderCheckboxes = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.account-listItem .form-checkbox:checked');
            var submitForm = false;

            $reorderForm.find('[name^="reorderitem"]').remove();

            $productReorderCheckboxes.each(function (index, productCheckbox) {
                var productId = jquery__WEBPACK_IMPORTED_MODULE_3___default()(productCheckbox).val();
                var $input = jquery__WEBPACK_IMPORTED_MODULE_3___default()('<input>', {
                    type: 'hidden',
                    name: 'reorderitem[' + productId + ']',
                    value: '1'
                });

                submitForm = true;

                $reorderForm.append($input);
            });

            if (!submitForm) {
                event.preventDefault();
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                    text: _this2.context.selectItem,
                    type: 'error'
                });
            }
        });
    };

    Account.prototype.initAddressFormValidation = function initAddressFormValidation($addressForm) {
        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_6__["default"])($addressForm);
        var stateSelector = 'form[data-address-form] [data-field-type="State"]';
        var $stateElement = jquery__WEBPACK_IMPORTED_MODULE_3___default()(stateSelector);
        var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
            submit: 'form[data-address-form] input[type="submit"]'
        });

        addressValidator.add(validationModel);

        if ($stateElement) {
            var $last = void 0;

            // Requests the states for a country with AJAX
            Object(_common_state_country__WEBPACK_IMPORTED_MODULE_7__["default"])($stateElement, this.context, function (err, field) {
                if (err) {
                    throw new Error(err);
                }

                var $field = jquery__WEBPACK_IMPORTED_MODULE_3___default()(field);

                if (addressValidator.getStatus($stateElement) !== 'undefined') {
                    addressValidator.remove($stateElement);
                }

                if ($last) {
                    addressValidator.remove($last);
                }

                if ($field.is('select')) {
                    $last = field;
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_8__["Validators"].setStateCountryValidation(addressValidator, field);
                } else {
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_8__["Validators"].cleanUpStateValidation(field);
                }
            });
        }

        $addressForm.on('submit', function (event) {
            addressValidator.performCheck();

            if (addressValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Account.prototype.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
        var errorMessage = $accountReturnForm.data('accountReturnFormError');

        $accountReturnForm.on('submit', function (event) {
            var formSubmit = false;

            // Iterate until we find a non-zero value in the dropdown for quantity
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
                if (parseInt(jquery__WEBPACK_IMPORTED_MODULE_3___default()(ele).val(), 10) !== 0) {
                    formSubmit = true;

                    // Exit out of loop if we found at least one return
                    return true;
                }
            });

            if (formSubmit) {
                return true;
            }

            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                text: errorMessage,
                type: 'error'
            });

            return event.preventDefault();
        });
    };

    Account.prototype.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
        var _this3 = this;

        // Inject validations into form fields before validation runs
        $paymentMethodForm.find('#first_name.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.firstNameLabel + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#last_name.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.lastNameLabel + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#company.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.companyLabel + '", "required": false, "maxlength": 0 }');
        $paymentMethodForm.find('#phone.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.phoneLabel + '", "required": false, "maxlength": 0 }');
        $paymentMethodForm.find('#address1.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.address1Label + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#address2.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.address2Label + '", "required": false, "maxlength": 0 }');
        $paymentMethodForm.find('#city.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.cityLabel + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#country.form-field').attr('data-validation', '{ "type": "singleselect", "label": "' + this.context.countryLabel + '", "required": true, prefix: "' + this.context.chooseCountryLabel + '" }');
        $paymentMethodForm.find('#state.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.stateLabel + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.postalCodeLabel + '", "required": true, "maxlength": 0 }');

        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_6__["default"])($paymentMethodForm);
        var paymentMethodSelector = 'form[data-payment-method-form]';
        var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({ submit: paymentMethodSelector + ' input[type="submit"]' });
        var $stateElement = jquery__WEBPACK_IMPORTED_MODULE_3___default()(paymentMethodSelector + ' [data-field-type="State"]');

        var $last = void 0;
        // Requests the states for a country with AJAX
        Object(_common_state_country__WEBPACK_IMPORTED_MODULE_7__["default"])($stateElement, this.context, function (err, field) {
            if (err) {
                throw new Error(err);
            }

            var $field = jquery__WEBPACK_IMPORTED_MODULE_3___default()(field);

            if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
                paymentMethodValidator.remove($stateElement);
            }

            if ($last) {
                paymentMethodValidator.remove($last);
            }

            if ($field.is('select')) {
                $last = field;
                _common_form_utils__WEBPACK_IMPORTED_MODULE_8__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
            } else {
                _common_form_utils__WEBPACK_IMPORTED_MODULE_8__["Validators"].cleanUpStateValidation(field);
            }
        });

        // Use credit card number input listener to highlight credit card type
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(paymentMethodSelector + ' input[name="credit_card_number"]').on('keyup', function (_ref) {
            var target = _ref.target;

            var cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["creditCardType"])(target.value);
            if (cardType) {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()(paymentMethodSelector + ' img[alt="' + cardType + '"').siblings().css('opacity', '.2');
            } else {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()(paymentMethodSelector + ' img').css('opacity', '1');
            }
        });

        // Set of credit card validation
        _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + ' input[name="credit_card_number"]', this.context.creditCardNumber);
        _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + ' input[name="expiration"]', this.context.expiration);
        _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + ' input[name="name_on_card"]', this.context.nameOnCard);
        _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + ' input[name="cvv"]', this.context.cvv);

        // Set of credit card format
        _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + ' input[name="credit_card_number"]');
        _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setExpirationFormat(paymentMethodSelector + ' input[name="expiration"');

        // Billing address validation
        paymentMethodValidator.add(validationModel);

        $paymentMethodForm.on('submit', function (event) {
            event.preventDefault();
            // Perform final form validation
            paymentMethodValidator.performCheck();
            if (paymentMethodValidator.areAll('valid')) {
                // Serialize form data and reduce it to object
                var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
                    var refObj = obj;
                    refObj[item.name] = item.value;
                    return refObj;
                }, {});

                // Assign country and state code
                var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context.countries, function (_ref2) {
                    var value = _ref2.value;
                    return value === data.country;
                });
                var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
                    var value = _ref3.value;
                    return value === data.state;
                });
                data.country_code = country ? country.code : data.country;
                data.state_or_province_code = state ? state.code : data.state;

                // Default Instrument
                data.default_instrument = !!data.default_instrument;

                // Store credit card
                Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["storeInstrument"])(_this3.context, data, function () {
                    window.location.href = _this3.context.paymentMethodsUrl;
                }, function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
                        text: _this3.context.generic_error,
                        type: 'error'
                    });
                });
            }
        });
    };

    Account.prototype.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_6__["default"])($editAccountForm);
        var formEditSelector = 'form[data-edit-account-form]';
        var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
            submit: '${formEditSelector} input[type="submit"]'
        });
        var emailSelector = formEditSelector + ' [data-field-type="EmailAddress"]';
        var $emailElement = jquery__WEBPACK_IMPORTED_MODULE_3___default()(emailSelector);
        var passwordSelector = formEditSelector + ' [data-field-type="Password"]';
        var $passwordElement = jquery__WEBPACK_IMPORTED_MODULE_3___default()(passwordSelector);
        var password2Selector = formEditSelector + ' [data-field-type="ConfirmPassword"]';
        var $password2Element = jquery__WEBPACK_IMPORTED_MODULE_3___default()(password2Selector);
        var currentPasswordSelector = formEditSelector + ' [data-field-type="CurrentPassword"]';
        var $currentPassword = jquery__WEBPACK_IMPORTED_MODULE_3___default()(currentPasswordSelector);

        // This only handles the custom fields, standard fields are added below
        editValidator.add(validationModel);

        if ($emailElement) {
            editValidator.remove(emailSelector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_8__["Validators"].setEmailValidation(editValidator, emailSelector);
        }

        if ($passwordElement && $password2Element) {
            editValidator.remove(passwordSelector);
            editValidator.remove(password2Selector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_8__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
        }

        if ($currentPassword) {
            editValidator.add({
                selector: currentPasswordSelector,
                validate: function validate(cb, val) {
                    var result = true;

                    if (val === '' && $passwordElement.val() !== '') {
                        result = false;
                    }

                    cb(result);
                },
                errorMessage: this.context.currentPassword
            });
        }

        editValidator.add([{
            selector: formEditSelector + ' input[name=\'account_firstname\']',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.firstName
        }, {
            selector: formEditSelector + ' input[name=\'account_lastname\']',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.lastName
        }, {
            selector: formEditSelector + ' input[name=\'account_phone\']',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.phoneNumber
        }]);

        $editAccountForm.on('submit', function (event) {
            editValidator.performCheck();

            if (editValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Account.prototype.registerInboxValidation = function registerInboxValidation($inboxForm) {
        var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
            submit: 'form[data-inbox-form] input[type="submit"]'
        });

        inboxValidator.add([{
            selector: 'form[data-inbox-form] select[name="message_order_id"]',
            validate: function validate(cb, val) {
                var result = Number(val) !== 0;

                cb(result);
            },
            errorMessage: this.context.enterOrderNum
        }, {
            selector: 'form[data-inbox-form] input[name="message_subject"]',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.enterSubject
        }, {
            selector: 'form[data-inbox-form] textarea[name="message_content"]',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.enterMessage
        }]);

        $inboxForm.on('submit', function (event) {
            inboxValidator.performCheck();

            if (inboxValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
    // No date range restriction, skip
    if (validation.min_date && validation.max_date) {
        var invalidMessage = 'Your chosen date must fall between ' + validation.min_date + ' and ' + validation.max_date + '.';
        var formElementId = $formField.attr('id');
        var minSplit = validation.min_date.split('-');
        var maxSplit = validation.max_date.split('-');
        var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
        var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);

        return {
            selector: '#' + formElementId + ' select[data-label="year"]',
            triggeredBy: '#' + formElementId + ' select:not([data-label="year"])',
            validate: function validate(cb, val) {
                var day = Number($formField.find('select[data-label="day"]').val());
                var month = Number($formField.find('select[data-label="month"]').val()) - 1;
                var year = Number(val);
                var chosenDate = new Date(year, month, day);

                cb(chosenDate >= minDate && chosenDate <= maxDate);
            },
            errorMessage: invalidMessage
        };
    }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */
function buildRequiredCheckboxValidation($formField, validation) {
    var formFieldId = $formField.attr('id');
    var primarySelector = '#' + formFieldId + ' input:first-of-type';
    var secondarySelector = '#' + formFieldId + ' input';

    return {
        selector: primarySelector,
        triggeredBy: secondarySelector,
        validate: function validate(cb) {
            var result = false;

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(secondarySelector).each(function (index, checkbox) {
                if (checkbox.checked) {
                    result = true;

                    return false;
                }
            });

            cb(result);
        },
        errorMessage: 'The \'' + validation.label + '\' field cannot be blank.'
    };
}

function buildRequiredValidation(validation, selector) {
    return {
        selector: selector,
        validate: function validate(cb, val) {
            cb(val.length > 0);
        },

        errorMessage: 'The \'' + validation.label + '\' field cannot be blank.'
    };
}

function buildNumberRangeValidation(validation, formFieldSelector) {
    var invalidMessage = 'The value for ' + validation.label + ' must be between ' + validation.min + ' and ' + validation.max + '.';
    var min = Number(validation.min);
    var max = Number(validation.max);

    return {
        selector: formFieldSelector + ' input[name="' + validation.name + '"]',
        validate: function validate(cb, val) {
            var numberVal = Number(val);

            cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: invalidMessage
    };
}

function buildValidation($validateableElement) {
    var validation = $validateableElement.data('validation');
    var fieldValidations = [];
    var formFieldSelector = '#' + $validateableElement.attr('id');

    if (validation.type === 'datechooser') {
        var dateValidation = buildDateValidation($validateableElement, validation);

        if (dateValidation) {
            fieldValidations.push(dateValidation);
        }
    } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
        fieldValidations.push(buildRequiredCheckboxValidation($validateableElement, validation));
    } else {
        $validateableElement.find('input, select, textarea').each(function (index, element) {
            var $inputElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
            var tagName = $inputElement.get(0).tagName;
            var inputName = $inputElement.attr('name');
            var elementSelector = formFieldSelector + ' ' + tagName + '[name="' + inputName + '"]';

            if (validation.type === 'numberonly') {
                fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
            }
            if (validation.required) {
                fieldValidations.push(buildRequiredValidation(validation, elementSelector));
            }
        });
    }

    return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($form) {
    var validationsToPerform = [];

    $form.find('[data-validation]').each(function (index, input) {
        validationsToPerform = validationsToPerform.concat(buildValidation(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input)));
    });

    return validationsToPerform;
});

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
    var refObj = obj;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(refObj, function (key, value) {
        if (value === null || value === '') {
            delete refObj[key];
        }
    });

    return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
    return creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
    var paymentsUrl = _ref.paymentsUrl,
        shopperId = _ref.shopperId,
        storeHash = _ref.storeHash,
        vaultToken = _ref.vaultToken;
    var provider_id = _ref2.provider_id,
        credit_card_number = _ref2.credit_card_number,
        expiration = _ref2.expiration,
        name_on_card = _ref2.name_on_card,
        cvv = _ref2.cvv,
        default_instrument = _ref2.default_instrument,
        address1 = _ref2.address1,
        address2 = _ref2.address2,
        city = _ref2.city,
        postal_code = _ref2.postal_code,
        state_or_province_code = _ref2.state_or_province_code,
        country_code = _ref2.country_code,
        company = _ref2.company,
        first_name = _ref2.first_name,
        last_name = _ref2.last_name,
        email = _ref2.email,
        phone = _ref2.phone;

    var expiry = expiration.split('/');

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: paymentsUrl + '/stores/' + storeHash + '/customers/' + shopperId + '/stored_instruments',
        dataType: 'json',
        method: 'POST',
        cache: false,
        headers: {
            Authorization: vaultToken,
            Accept: 'application/vnd.bc.v1+json',
            'Content-Type': 'application/vnd.bc.v1+json'
        },
        data: JSON.stringify({
            instrument: {
                type: 'card',
                cardholder_name: name_on_card,
                number: creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(credit_card_number),
                expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.month.parse(expiry[0]),
                expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.year.parse(expiry[1], true),
                verification_value: cvv
            },
            billing_address: omitNullString({
                address1: address1,
                address2: address2,
                city: city,
                postal_code: postal_code,
                state_or_province_code: state_or_province_code,
                country_code: country_code,
                company: company,
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone
            }),
            provider_id: provider_id,
            default_instrument: default_instrument
        })
    }).done(done).fail(fail);
};

var Formatters = {
    /**
     * Sets up a format for credit card number
     * @param field
     */
    setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
        if (field) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(field).on('keyup', function (_ref3) {
                var target = _ref3.target;

                var refTarget = target;
                refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(target.value));
            });
        }
    },

    /**
     * Sets up a format for expiration date
     * @param field
     */
    setExpirationFormat: function setExpirationFormat(field) {
        if (field) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(field).on('keyup', function (_ref4) {
                var target = _ref4.target,
                    which = _ref4.which;

                var refTarget = target;
                if (which === 8 && /.*(\/)$/.test(target.value)) {
                    refTarget.value = target.value.slice(0, -1);
                } else if (target.value.length > 4) {
                    refTarget.value = target.value.slice(0, 5);
                } else if (which !== 8) {
                    refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
                }
            });
        }
    }
};

var Validators = {
    /**
     * Sets up a validation for credit card number
     * @param validator
     * @param field
     */
    setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(val));

                    cb(result);
                },
                errorMessage: errorMessage
            });
        }
    },

    /**
     * Sets up a validation for expiration date
     * @param validator
     * @param field
     */
    setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var expiry = val.split('/');
                    var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
                    result = result && !creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.year.parse(expiry[1], true));

                    cb(result);
                },
                errorMessage: errorMessage
            });
        }
    },

    /**
     * Sets up a validation for name on card
     * @param validator
     * @param field
     */
    setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var result = !!val.length;

                    cb(result);
                },
                errorMessage: errorMessage
            });
        }
    },

    /**
     * Sets up a validation for cvv
     * @param validator
     * @param field
     */
    setCvvValidation: function setCvvValidation(validator, field, errorMessage) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.cvc.isValid(val);

                    cb(result);
                },
                errorMessage: errorMessage
            });
        }
    }
};

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.11.js.map