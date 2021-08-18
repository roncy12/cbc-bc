(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

/***/ "./assets/js/theme/contact-us.js":
/*!***************************************!*\
  !*** ./assets/js/theme/contact-us.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ContactUs = function (_PageManager) {
    _inherits(ContactUs, _PageManager);

    function ContactUs() {
        _classCallCheck(this, ContactUs);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    ContactUs.prototype.onReady = function onReady() {
        this.registerContactFormValidation();
    };

    ContactUs.prototype.registerContactFormValidation = function registerContactFormValidation() {
        var formSelector = 'form[data-contact-form]';
        var contactUsValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
            submit: formSelector + ' input[type="submit"]'
        });
        var $contactForm = jquery__WEBPACK_IMPORTED_MODULE_2___default()(formSelector);

        contactUsValidator.add([{
            selector: formSelector + ' input[name="contact_email"]',
            validate: function validate(cb, val) {
                var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);

                cb(result);
            },
            errorMessage: this.context.contactEmail
        }, {
            selector: formSelector + ' textarea[name="contact_question"]',
            validate: function validate(cb, val) {
                var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].notEmpty(val);

                cb(result);
            },
            errorMessage: this.context.contactQuestion
        }]);

        $contactForm.on('submit', function (event) {
            contactUsValidator.performCheck();

            if (contactUsValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    return ContactUs;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactUs);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.14.js.map