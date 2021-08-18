(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CatalogPage = function (_PageManager) {
    _inherits(CatalogPage, _PageManager);

    function CatalogPage() {
        _classCallCheck(this, CatalogPage);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    CatalogPage.prototype.onSortBySubmit = function onSortBySubmit(event) {
        var url = url__WEBPACK_IMPORTED_MODULE_3___default.a.parse(window.location.href, true);
        var queryParams = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.currentTarget).serialize().split('=');

        url.query[queryParams[0]] = queryParams[1];
        delete url.query.page;

        event.preventDefault();
        window.location = url__WEBPACK_IMPORTED_MODULE_3___default.a.format({ pathname: url.pathname, search: _common_url_utils__WEBPACK_IMPORTED_MODULE_2__["default"].buildQueryString(url.query) });
    };

    return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CatalogPage);

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











/**
 * Faceted search view component
 */

var FacetedSearch = function () {
    /**
     * @param {object} requestOptions - Object with options for the ajax requests
     * @param {function} callback - Function to execute after fetching templates
     * @param {object} options - Configurable options
     * @example
     *
     * let requestOptions = {
     *      templates: {
     *          productListing: 'category/product-listing',
     *          sidebar: 'category/sidebar'
     *     }
     * };
     *
     * let templatesDidLoad = function(content) {
     *     $productListingContainer.html(content.productListing);
     *     $facetedSearchContainer.html(content.sidebar);
     * };
     *
     * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
     */
    function FacetedSearch(requestOptions, callback, options) {
        var _this = this;

        _classCallCheck(this, FacetedSearch);

        var defaultOptions = {
            accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
            blockerSelector: '#facetedSearch .blocker',
            clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
            componentSelector: '#facetedSearch-navList',
            facetNavListSelector: '#facetedSearch .navList',
            priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
            priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
            priceRangeFormSelector: '#facet-range-form',
            priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
            priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
            showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
            facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
            modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["default"])('#modal')[0],
            modalOpen: false
        };

        // Private properties
        this.requestOptions = requestOptions;
        this.callback = callback;
        this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
        this.collapsedFacets = [];
        this.collapsedFacetItems = [];

        // Init collapsibles
        Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])();

        // Init price validator
        this.initPriceValidator();

        // Show limited items by default
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.facetNavListSelector).each(function (index, navList) {
            _this.collapseFacetItems(jquery__WEBPACK_IMPORTED_MODULE_5___default()(navList));
        });

        // Mark initially collapsed accordions
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
            var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_5___default()(accordionToggle);
            var collapsible = $accordionToggle.data('collapsibleInstance');

            if (collapsible.isCollapsed) {
                _this.collapsedFacets.push(collapsible.targetId);
            }
        });

        // Collapse all facets if initially hidden
        // NOTE: Need to execute after Collapsible gets bootstrapped
        setTimeout(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(_this.options.componentSelector).is(':hidden')) {
                _this.collapseAllFacets();
            }
        });

        // Observe user events
        this.onStateChange = this.onStateChange.bind(this);
        this.onToggleClick = this.onToggleClick.bind(this);
        this.onAccordionToggle = this.onAccordionToggle.bind(this);
        this.onClearFacet = this.onClearFacet.bind(this);
        this.onFacetClick = this.onFacetClick.bind(this);
        this.onRangeSubmit = this.onRangeSubmit.bind(this);
        this.onSortBySubmit = this.onSortBySubmit.bind(this);
        this.filterFacetItems = this.filterFacetItems.bind(this);

        this.bindEvents();
    }

    // Public methods


    FacetedSearch.prototype.refreshView = function refreshView(content) {
        if (content) {
            this.callback(content);
        }

        // Init collapsibles
        Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])();

        // Init price validator
        this.initPriceValidator();

        // Restore view state
        this.restoreCollapsedFacets();
        this.restoreCollapsedFacetItems();

        // Bind events
        this.bindEvents();
    };

    FacetedSearch.prototype.updateView = function updateView() {
        var _this2 = this;

        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.blockerSelector).show();

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl(), this.requestOptions, function (err, content) {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()(_this2.options.blockerSelector).hide();

            if (err) {
                throw new Error(err);
            }

            // Refresh view with new content
            _this2.refreshView(content);
        });
    };

    FacetedSearch.prototype.expandFacetItems = function expandFacetItems($navList) {
        var id = $navList.attr('id');

        // Remove
        this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    };

    FacetedSearch.prototype.collapseFacetItems = function collapseFacetItems($navList) {
        var id = $navList.attr('id');
        var hasMoreResults = $navList.data('hasMoreResults');

        if (hasMoreResults) {
            this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
        } else {
            this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
        }
    };

    FacetedSearch.prototype.toggleFacetItems = function toggleFacetItems($navList) {
        var id = $navList.attr('id');

        // Toggle depending on `collapsed` flag
        if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
            this.getMoreFacetResults($navList);

            return true;
        }

        this.collapseFacetItems($navList);

        return false;
    };

    FacetedSearch.prototype.getMoreFacetResults = function getMoreFacetResults($navList) {
        var _this3 = this;

        var facet = $navList.data('facet');
        var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl();

        if (this.requestOptions.showMore) {
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
                template: this.requestOptions.showMore,
                params: {
                    list_all: facet
                }
            }, function (err, response) {
                if (err) {
                    throw new Error(err);
                }

                _this3.options.modal.open();
                _this3.options.modalOpen = true;
                _this3.options.modal.updateContent(response);
            });
        }

        this.collapseFacetItems($navList);

        return false;
    };

    FacetedSearch.prototype.filterFacetItems = function filterFacetItems(event) {
        var $items = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.navList-item');
        var query = jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.currentTarget).val().toLowerCase();

        $items.each(function (index, element) {
            var text = jquery__WEBPACK_IMPORTED_MODULE_5___default()(element).text().toLowerCase();
            if (text.indexOf(query) !== -1) {
                jquery__WEBPACK_IMPORTED_MODULE_5___default()(element).show();
            } else {
                jquery__WEBPACK_IMPORTED_MODULE_5___default()(element).hide();
            }
        });
    };

    FacetedSearch.prototype.expandFacet = function expandFacet($accordionToggle) {
        var collapsible = $accordionToggle.data('collapsibleInstance');

        collapsible.open();
    };

    FacetedSearch.prototype.collapseFacet = function collapseFacet($accordionToggle) {
        var collapsible = $accordionToggle.data('collapsibleInstance');

        collapsible.close();
    };

    FacetedSearch.prototype.collapseAllFacets = function collapseAllFacets() {
        var _this4 = this;

        var $accordionToggles = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.accordionToggleSelector);

        $accordionToggles.each(function (index, accordionToggle) {
            var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_5___default()(accordionToggle);

            _this4.collapseFacet($accordionToggle);
        });
    };

    FacetedSearch.prototype.expandAllFacets = function expandAllFacets() {
        var _this5 = this;

        var $accordionToggles = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.accordionToggleSelector);

        $accordionToggles.each(function (index, accordionToggle) {
            var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_5___default()(accordionToggle);

            _this5.expandFacet($accordionToggle);
        });
    };

    // Private methods


    FacetedSearch.prototype.initPriceValidator = function initPriceValidator() {
        if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.priceRangeFormSelector).length === 0) {
            return;
        }

        var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_11__["default"])();
        var selectors = {
            errorSelector: this.options.priceRangeErrorSelector,
            fieldsetSelector: this.options.priceRangeFieldsetSelector,
            formSelector: this.options.priceRangeFormSelector,
            maxPriceSelector: this.options.priceRangeMaxPriceSelector,
            minPriceSelector: this.options.priceRangeMinPriceSelector
        };

        _form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setMinMaxPriceValidation(validator, selectors);

        this.priceRangeValidator = validator;
    };

    FacetedSearch.prototype.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
        var _this6 = this;

        var $navLists = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.facetNavListSelector);

        // Restore collapsed state for each facet
        $navLists.each(function (index, navList) {
            var $navList = jquery__WEBPACK_IMPORTED_MODULE_5___default()(navList);
            var id = $navList.attr('id');
            var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

            if (shouldCollapse) {
                _this6.collapseFacetItems($navList);
            } else {
                _this6.expandFacetItems($navList);
            }
        });
    };

    FacetedSearch.prototype.restoreCollapsedFacets = function restoreCollapsedFacets() {
        var _this7 = this;

        var $accordionToggles = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.accordionToggleSelector);

        $accordionToggles.each(function (index, accordionToggle) {
            var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_5___default()(accordionToggle);
            var collapsible = $accordionToggle.data('collapsibleInstance');
            var id = collapsible.targetId;
            var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

            if (shouldCollapse) {
                _this7.collapseFacet($accordionToggle);
            } else {
                _this7.expandFacet($accordionToggle);
            }
        });
    };

    FacetedSearch.prototype.bindEvents = function bindEvents() {
        // Clean-up
        this.unbindEvents();

        // DOM events
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).on('statechange', this.onStateChange);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.clearFacetSelector).on('click', this.onClearFacet);

        // Hooks
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    };

    FacetedSearch.prototype.unbindEvents = function unbindEvents() {
        // DOM events
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).off('statechange', this.onStateChange);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this.options.clearFacetSelector).off('click', this.onClearFacet);

        // Hooks
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
    };

    FacetedSearch.prototype.onClearFacet = function onClearFacet(event) {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.currentTarget);
        var url = $link.attr('href');

        event.preventDefault();
        event.stopPropagation();

        // Update URL
        _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
    };

    FacetedSearch.prototype.onToggleClick = function onToggleClick(event) {
        var $toggle = jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.currentTarget);
        var $navList = jquery__WEBPACK_IMPORTED_MODULE_5___default()($toggle.attr('href'));

        // Prevent default
        event.preventDefault();

        // Toggle visible items
        this.toggleFacetItems($navList);
    };

    FacetedSearch.prototype.onFacetClick = function onFacetClick(event) {
        var $link = jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.currentTarget);
        var url = $link.attr('href');

        event.preventDefault();

        $link.toggleClass('is-selected');

        // Update URL
        _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);

        if (this.options.modalOpen) {
            this.options.modal.close();
        }
    };

    FacetedSearch.prototype.onSortBySubmit = function onSortBySubmit(event) {
        var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
        var queryParams = jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.currentTarget).serialize().split('=');

        url.query[queryParams[0]] = queryParams[1];
        delete url.query.page;

        event.preventDefault();

        _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({ pathname: url.pathname, search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query) }));
    };

    FacetedSearch.prototype.onRangeSubmit = function onRangeSubmit(event) {
        event.preventDefault();

        if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].constants.VALID)) {
            return;
        }

        var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href);
        var queryParams = decodeURI(jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.currentTarget).serialize());

        _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({ pathname: url.pathname, search: '?' + queryParams }));
    };

    FacetedSearch.prototype.onStateChange = function onStateChange() {
        this.updateView();
    };

    FacetedSearch.prototype.onAccordionToggle = function onAccordionToggle(event) {
        var $accordionToggle = jquery__WEBPACK_IMPORTED_MODULE_5___default()(event.currentTarget);
        var collapsible = $accordionToggle.data('collapsibleInstance');
        var id = collapsible.targetId;

        if (collapsible.isCollapsed) {
            this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
        } else {
            this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
        }
    };

    return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);

/***/ }),

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

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);



var urlUtils = {
    getUrl: function getUrl() {
        return '' + window.location.pathname + window.location.search;
    },

    goToUrl: function goToUrl(url) {
        window.history.pushState({}, document.title, url);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('statechange');
    },

    replaceParams: function replaceParams(url, params) {
        var parsed = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(url, true);
        var param = void 0;

        // Let the formatter use the query object to build the new url
        parsed.search = null;

        for (param in params) {
            if (params.hasOwnProperty(param)) {
                parsed.query[param] = params[param];
            }
        }

        return url__WEBPACK_IMPORTED_MODULE_1___default.a.format(parsed);
    },

    buildQueryString: function buildQueryString(queryData) {
        var out = '';
        var key = void 0;
        for (key in queryData) {
            if (queryData.hasOwnProperty(key)) {
                if (Array.isArray(queryData[key])) {
                    var ndx = void 0;

                    for (ndx in queryData[key]) {
                        if (queryData[key].hasOwnProperty(ndx)) {
                            out += '&' + key + '=' + queryData[key][ndx];
                        }
                    }
                } else {
                    out += '&' + key + '=' + queryData[key];
                }
            }
        }

        return out.substring(1);
    }
};

/* harmony default export */ __webpack_exports__["default"] = (urlUtils);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.2.js.map