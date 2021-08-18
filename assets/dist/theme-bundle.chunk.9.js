(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Auth = function (_PageManager) {
    _inherits(Auth, _PageManager);

    function Auth(context) {
        _classCallCheck(this, Auth);

        var _this = _possibleConstructorReturn(this, _PageManager.call(this, context));

        _this.formCreateSelector = 'form[data-create-account-form]';
        return _this;
    }

    Auth.prototype.registerLoginValidation = function registerLoginValidation($loginForm) {
        var _this2 = this;

        var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_5__["default"];

        this.loginValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
            submit: '.login-form input[type="submit"]'
        });

        this.loginValidator.add([{
            selector: '.login-form input[name="login_email"]',
            validate: function validate(cb, val) {
                var result = loginModel.email(val);

                cb(result);
            },
            errorMessage: this.context.useValidEmail
        }, {
            selector: '.login-form input[name="login_pass"]',
            validate: function validate(cb, val) {
                var result = loginModel.password(val);

                cb(result);
            },
            errorMessage: this.context.enterPass
        }]);

        $loginForm.on('submit', function (event) {
            _this2.loginValidator.performCheck();

            if (_this2.loginValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Auth.prototype.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
        var _this3 = this;

        this.forgotPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
            submit: '.forgot-password-form input[type="submit"]'
        });

        this.forgotPasswordValidator.add([{
            selector: '.forgot-password-form input[name="email"]',
            validate: function validate(cb, val) {
                var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_5__["default"].email(val);

                cb(result);
            },
            errorMessage: this.context.useValidEmail
        }]);

        $forgotPasswordForm.on('submit', function (event) {
            _this3.forgotPasswordValidator.performCheck();

            if (_this3.forgotPasswordValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Auth.prototype.registerNewPasswordValidation = function registerNewPasswordValidation() {
        var newPasswordForm = '.new-password-form';
        var newPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
            submit: jquery__WEBPACK_IMPORTED_MODULE_2___default()(newPasswordForm + ' input[type="submit"]')
        });
        var passwordSelector = jquery__WEBPACK_IMPORTED_MODULE_2___default()(newPasswordForm + ' input[name="password"]');
        var password2Selector = jquery__WEBPACK_IMPORTED_MODULE_2___default()(newPasswordForm + ' input[name="password_confirm"]');

        _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements);
    };

    Auth.prototype.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_4__["default"])($createAccountForm);
        var createAccountValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
            submit: this.formCreateSelector + ' input[type=\'submit\']'
        });
        var $stateElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-field-type="State"]');
        var emailSelector = this.formCreateSelector + ' [data-field-type=\'EmailAddress\']';
        var $emailElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()(emailSelector);
        var passwordSelector = this.formCreateSelector + ' [data-field-type=\'Password\']';
        var $passwordElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()(passwordSelector);
        var password2Selector = this.formCreateSelector + ' [data-field-type=\'ConfirmPassword\']';
        var $password2Element = jquery__WEBPACK_IMPORTED_MODULE_2___default()(password2Selector);

        createAccountValidator.add(validationModel);

        if ($stateElement) {
            var $last = void 0;

            // Requests the states for a country with AJAX
            Object(_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])($stateElement, this.context, function (err, field) {
                if (err) {
                    throw new Error(err);
                }

                var $field = jquery__WEBPACK_IMPORTED_MODULE_2___default()(field);

                if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
                    createAccountValidator.remove($stateElement);
                }

                if ($last) {
                    createAccountValidator.remove($last);
                }

                if ($field.is('select')) {
                    $last = field;
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setStateCountryValidation(createAccountValidator, field);
                } else {
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
                }
            });
        }

        if ($emailElement) {
            createAccountValidator.remove(emailSelector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setEmailValidation(createAccountValidator, emailSelector);
        }

        if ($passwordElement && $password2Element) {
            createAccountValidator.remove(passwordSelector);
            createAccountValidator.remove(password2Selector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements);
        }

        $createAccountForm.on('submit', function (event) {
            createAccountValidator.performCheck();

            if (createAccountValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    /**
     * Request is made in this function to the remote endpoint and pulls back the states for country.
     */


    Auth.prototype.onReady = function onReady() {
        var $createAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])(this.formCreateSelector);
        var $loginForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.login-form');
        var $forgotPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.forgot-password-form');
        var $newPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.new-password-form'); // reset password

        // Injected via auth.html
        this.passwordRequirements = this.context.passwordRequirements;

        if ($loginForm.length) {
            this.registerLoginValidation($loginForm);
        }

        if ($newPasswordForm.length) {
            this.registerNewPasswordValidation();
        }

        if ($forgotPasswordForm.length) {
            this.registerForgotPasswordValidation($forgotPasswordForm);
        }

        if ($createAccountForm.length) {
            this.registerCreateAccountValidator($createAccountForm);
        }
    };

    return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Auth);

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

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.9.js.map