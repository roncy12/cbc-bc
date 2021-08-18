(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pace */ "./node_modules/pace/pace.min.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _themevale_themevale_AddOptionForProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themevale/themevale_AddOptionForProduct */ "./assets/js/theme/themevale/themevale_AddOptionForProduct.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Category = function (_CatalogPage) {
    _inherits(Category, _CatalogPage);

    function Category() {
        _classCallCheck(this, Category);

        return _possibleConstructorReturn(this, _CatalogPage.apply(this, arguments));
    }

    Category.prototype.onReady = function onReady() {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
        }

        this.showmore_product();
    };

    Category.prototype.initFacetedSearch = function initFacetedSearch() {
        var _this2 = this;

        var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container');
        var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#faceted-search-container');
        var productsPerPage = this.context.categoryProductsPerPage;
        var requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage
                    }
                }
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar'
            },
            showMore: 'category/show-more'
        };

        this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__["default"](requestOptions, function (content) {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);
            _this2.showmore_product();

            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                scrollTop: 0
            }, 100);
        });
    };

    Category.prototype.showmore_product = function showmore_product() {
        var context = this.context;
        var check_link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pagination-item--current").next();
        if (check_link.length === 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#button-showmore-category').addClass('disable');
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '#button-showmore-category', function (e) {
                e.preventDefault();
                var nextPage = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pagination-item--current").next(),
                    link = nextPage.find("a").attr("href");
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#button-showmore-category').addClass('loadding');
                jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
                    type: 'get',
                    url: link.replace("http://", "//"),
                    context: this.content,
                    success: function success(data) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('#productLayout').length > 0) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#productLayout').append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find('#productLayout').children());
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination-list').html(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).find(".pagination-list").html());
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#button-showmore-category').removeClass('loadding');
                            nextPage = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pagination-item--current").next();
                            if (nextPage.length === 0) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#button-showmore-category').addClass('disable');
                            }
                            Object(_themevale_themevale_AddOptionForProduct__WEBPACK_IMPORTED_MODULE_5__["default"])(context);
                        }
                    }
                });
            });
        }
    };

    return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.19.js.map