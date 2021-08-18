import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';

export default function () {
    function processAjax($element, tmpl, urlKey = 'gg-category-url', show = 'show' , row ='row') {
        const template = tmpl;
        let url = $element.data(urlKey);
        let show1;
        if($(window).width()>=992){
            show1 = $element.data(show);
        }
        else if($(window).width()>=768){
            show1 = 3;
        }
        else if($(window).width()>=550){
            show1 = 2;
        }
        else{
            show1 = 1;
        }
        let row1 = $element.data(row);
        url = url.replace(/https?:\/\/[^/]+/, '');
        utils.api.getPage(url, { template }, (err, response) => {
            $element.html(response);
            $( document ).ready(function() {
                $('.Product-blocks').slick({
                    dots: false,
                    rows:row1,
                    arrows: true,
                    slidesToShow: show1,
                    slidesToScroll: show1,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    infinite: false,
                  });
            });
        });
    }
    function initAjaxProductsByCategory() {
        $('[data-gg-category-url]').each((i, element) => {
            processAjax($(element), 'ggframework/category/ajax-products-by-category-result', 'gg-category-url' , 'show', 'row');
        });
    }
    initAjaxProductsByCategory();
	
	// Bulk/Tier Pricing
	/*
	function bulkpriceAjax($element, tmpl, urlKey = 'gg-bulkprice-product-url') {
        const template = tmpl;
        let url = $element.data(urlKey);
		
        url = url.replace(/https?:\/\/[^/]+/, '');
        utils.api.getPage(url, { template }, (err, response) => {
            $element.html(response);
        });
    }
	
    function initAjaxProductsBulkpricing() {
        $('[data-gg-bulkprice-product-url]').each((i, element) => {
            bulkpriceAjax($(element), $(element).data('template-file'), 'gg-bulkprice-product-url');
        });
    }

	initAjaxProductsBulkpricing();
	*/
	
	// Content Processor
	function processContent($element, tmpl, urlKey = 'content-url') {
        const template = $element.data(tmpl);
        let url = $element.data(urlKey);
		console.log( $element.data(urlKey));
        url = url.replace(/https?:\/\/[^/]+/, '');
        utils.api.getPage(url, { template }, (err, response) => {
            $element.html(response);
        });
    }
    function initpostContent() {
        $('[data-gg-ajaxdata]').each((i, element) => {
            processContent($(element), 'template-file' , 'content-url');
        });
    }
	initpostContent();	
	
}



