(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Search = function (_CatalogPage) {
    _inherits(Search, _CatalogPage);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, _CatalogPage.apply(this, arguments));
    }

    Search.prototype.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
        var _this2 = this;

        var nodeData = {
            text: node.data,
            id: node.metadata.id,
            state: {
                selected: node.selected
            }
        };

        if (node.state) {
            nodeData.state.opened = node.state === 'open';
            nodeData.children = true;
        }

        if (node.children) {
            nodeData.children = [];
            node.children.forEach(function (childNode) {
                nodeData.children.push(_this2.formatCategoryTreeForJSTree(childNode));
            });
        }

        return nodeData;
    };

    Search.prototype.showProducts = function showProducts() {
        var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(window.location.href, {
            section: 'product'
        });

        this.$productListingContainer.removeClass('u-hiddenVisually');
        // this.$facetedSearchContainer.removeClass('u-hiddenVisually');
        this.$contentResultsContainer.addClass('u-hiddenVisually');

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').removeClass('navBar-action-color--active');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').addClass('navBar-action');

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').removeClass('navBar-action');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').addClass('navBar-action-color--active');

        _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
    };

    Search.prototype.showContent = function showContent() {
        var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(window.location.href, {
            section: 'content'
        });

        this.$contentResultsContainer.removeClass('u-hiddenVisually');
        this.$productListingContainer.addClass('u-hiddenVisually');
        // this.$facetedSearchContainer.addClass('u-hiddenVisually');

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').removeClass('navBar-action-color--active');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').addClass('navBar-action');

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').removeClass('navBar-action');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').addClass('navBar-action-color--active');

        _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
    };

    Search.prototype.onReady = function onReady() {
        var _this3 = this;

        var $searchForm = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-advanced-search-form]');
        var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
        var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
        var treeData = [];
        this.$productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
        this.$facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
        this.$contentResultsContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-content');

        // Init faceted search
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
        }

        // Init collapsibles
        Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_6__["default"])();

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').on('click', function (event) {
            event.preventDefault();
            _this3.showProducts();
        });

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').on('click', function (event) {
            event.preventDefault();
            _this3.showContent();
        });

        if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
            this.showContent();
        } else {
            this.showProducts();
        }

        var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));

        this.context.categoryTree.forEach(function (node) {
            treeData.push(_this3.formatCategoryTreeForJSTree(node));
        });

        this.categoryTreeData = treeData;
        this.createCategoryTree($categoryTreeContainer);

        $searchForm.on('submit', function (event) {
            var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

            if (!validator.check()) {
                return event.preventDefault();
            }

            $searchForm.find('input[name="category\[\]"]').remove();

            for (var _iterator = selectedCategoryIds, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var categoryId = _ref;

                var input = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<input>', {
                    type: 'hidden',
                    name: 'category[]',
                    value: categoryId
                });

                $searchForm.append(input);
            }
        });
    };

    Search.prototype.loadTreeNodes = function loadTreeNodes(node, cb) {
        var _this4 = this;

        jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
            url: '/remote/v1/category-tree',
            data: {
                selectedCategoryId: node.id,
                prefix: 'category'
            }
        }).done(function (data) {
            var formattedResults = [];

            data.forEach(function (dataNode) {
                formattedResults.push(_this4.formatCategoryTreeForJSTree(dataNode));
            });

            cb(formattedResults);
        });
    };

    Search.prototype.createCategoryTree = function createCategoryTree($container) {
        var _this5 = this;

        var treeOptions = {
            core: {
                data: function data(node, cb) {
                    // Root node
                    if (node.id === '#') {
                        cb(_this5.categoryTreeData);
                    } else {
                        // Lazy loaded children
                        _this5.loadTreeNodes(node, cb);
                    }
                },
                themes: {
                    icons: true
                }
            },
            checkbox: {
                three_state: false
            },
            plugins: ['checkbox']
        };

        $container.jstree(treeOptions);
    };

    Search.prototype.initFacetedSearch = function initFacetedSearch() {
        var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
        var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
        var $searchHeading = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-heading');
        var $searchCount = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-product-count');
        var productsPerPage = this.context.searchProductsPerPage;
        var requestOptions = {
            template: {
                productListing: 'search/product-listing',
                sidebar: 'search/sidebar',
                heading: 'search/heading',
                productCount: 'search/product-count'
            },
            config: {
                product_results: {
                    limit: productsPerPage
                }
            },
            showMore: 'search/show-more'
        };

        this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);
            $searchHeading.html(content.heading);
            $searchCount.html(content.productCount);

            jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
                scrollTop: 0
            }, 100);
        });
    };

    Search.prototype.initValidation = function initValidation($form) {
        this.$form = $form;
        this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_8__["default"])({
            submit: $form
        });

        return this;
    };

    Search.prototype.bindValidation = function bindValidation($element) {
        if (this.validator) {
            this.validator.add({
                selector: $element,
                validate: 'presence',
                errorMessage: $element.data('errorMessage')
            });
        }

        return this;
    };

    Search.prototype.check = function check() {
        if (this.validator) {
            this.validator.performCheck();
            return this.validator.areAll('valid');
        }

        return false;
    };

    return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.24.js.map