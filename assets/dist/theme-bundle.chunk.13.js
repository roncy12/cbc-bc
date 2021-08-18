(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themevale/themevale_AZbrands */ "./assets/js/theme/themevale/themevale_AZbrands.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Brands = function (_PageManager) {
    _inherits(Brands, _PageManager);

    function Brands() {
        _classCallCheck(this, Brands);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    Brands.prototype.onReady = function onReady() {
        // Brands list A to Z
        if (this.context.themeSettings.themevale_brandlayout === 'aztable') {
            var azbrands = new _themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_2__["default"]();
            azbrands.loaded(this.context.themeSettings.brandpage_brands_per_page);
        }
    };

    return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Brands);

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_AZbrands.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_AZbrands.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var AZBrands = function () {
    function AZBrands() {
        _classCallCheck(this, AZBrands);
    }

    AZBrands.prototype.loaded = function loaded(limit) {
        var $brands = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-brands-list]');
        if ($brands.length > 0) {
            var $atozBrands = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.getElementById($brands.data('azbrands')));
            if ($atozBrands.length > 0) {
                this.generateAtoZBrands($atozBrands);
                this.updateAtoZBrands($brands, $atozBrands);
            }
            var url = $brands.data('brands-list-next');
            if (url) {
                this.loadMoreBrands($brands, url, true, limit);
            }
        }
    };

    AZBrands.prototype.generateAtoZBrands = function generateAtoZBrands($atozBrands) {
        var azBrandsTableID = $atozBrands.attr('id') + 'Table';
        var $atozBrandsTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + azBrandsTableID);

        $atozBrandsTable.append('<li data-letter=""><a href="#">All</a></li>');
        var ch = '#';
        $atozBrands.append('<div class="azBrands-group" data-letter="' + ch + '" id="azBrands-code-123"><h3 class="azBrands-group-title">' + ch + '</h3><ul class="brandList"></ul></div>');
        $atozBrandsTable.append('<li data-letter="' + ch + '"><a href="#azBrands-code-123" data-target="azBrands-code-123">' + ch + '</a></li>');

        for (var i = 97; i < 123; i++) {
            var _ch = '#';
            if (i < 123) {
                _ch = String.fromCharCode(i);
            }
            $atozBrands.append('<div class="azBrands-group" data-letter="' + _ch + '" id="azBrands-code-' + i + '"><h3 class="azBrands-group-title">' + _ch + '</h3><ul class="brandList"></ul></div>');
            $atozBrandsTable.append('<li data-letter="' + _ch + '"><a href="#azBrands-code-' + i + '" data-target="azBrands-code-' + i + '">' + _ch + '</a></li>');
        }

        $atozBrands.addClass('active-all');
        $atozBrands.children().addClass('is-active');
        $atozBrandsTable.children(':first').addClass('is-active');

        $atozBrandsTable.on('click', 'a', function (event) {
            event.preventDefault();

            var $a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target);

            $atozBrandsTable.children('li').removeClass('is-active');
            $a.parent().addClass('is-active');

            var target = $a.data('target');
            if (target) {
                $atozBrands.children('.azBrands-group').removeClass('is-active');
                $atozBrands.children('#' + target).addClass('is-active');
                $atozBrands.removeClass('active-all');
            } else {
                $atozBrands.children('.azBrands-group').addClass('is-active');
                $atozBrands.addClass('active-all');
            }
        });
    };

    AZBrands.prototype.updateAtoZBrands = function updateAtoZBrands($brands, $atozBrands) {
        var $atozBrandsTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + $atozBrands.attr('id') + 'Table');
        $brands.children('.brand').each(function (i, el) {
            var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
            var code = String($el.data('brand-code'));
            var letter = code.charAt(0).toLowerCase();

            var $group = $atozBrands.children('[data-letter=' + letter + ']');
            if ($group.length === 0) {
                $group = $atozBrands.children(':first');
            }

            var $li = $atozBrandsTable.children('[data-letter=' + letter + ']');
            if ($li.length === 0) {
                $li = $atozBrandsTable.children(':last');
            }

            var $brandList = $group.find('.brandList');

            var $elIns = void 0;
            $brandList.children('.brand').each(function (j, el2) {
                var $el2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el2);
                var code2 = $el2.data('brand-code');

                if (code < code2) {
                    $elIns = $el2;
                } else {
                    return false;
                }
            });
            if ($elIns) {
                $el.insertAfter($elIns);
            } else {
                $el.appendTo($brandList);
            }
        });

        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#azBrands .azBrands-group ul').each(function (e) {
                var check = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find("li").length;
                if (check === 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev(".azBrands-group-title").addClass("not_valued");
                }
            });

            $atozBrands.children().each(function () {
                var temp = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".azBrands-group-title.not_valued").text().trim();
                $atozBrandsTable.children().each(function () {
                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('a').text().trim() == temp) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('a').addClass('disable');
                    }
                });
            });
        }, 3000);
    };

    AZBrands.prototype.loadMoreBrands = function loadMoreBrands($brands, url, recursive, limit) {
        var _this = this;

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage(url, {
            template: 'themevale/brands-list',
            config: {
                brands: {
                    limit: limit
                }
            }
        }, function (err, resp) {
            var $brandsList = jquery__WEBPACK_IMPORTED_MODULE_0___default()(resp).find('[data-brands-list]');
            $brands.append($brandsList.children());

            var $atozBrands = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.getElementById($brands.data('azbrands')));
            if ($atozBrands.length > 0) {
                _this.updateAtoZBrands($brands, $atozBrands);
            }

            var nextUrl = $brandsList.data('brands-list-next');
            if (nextUrl && recursive) {
                _this.loadMoreBrands($brands, nextUrl, recursive, limit);
            }
        });
    };

    return AZBrands;
}();

/* harmony default export */ __webpack_exports__["default"] = (AZBrands);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.13.js.map