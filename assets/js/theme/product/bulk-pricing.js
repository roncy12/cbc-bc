import $ from 'jquery';

export default class bulkPricing{
		
		priceChange(qty){
			qty = parseFloat(qty);
			// console.log('bulkprice');
			// bulk pricing update
			if ($('[data-bulkprice-change]').length > 0 ){
				
				var _productPrice = ($('[data-product-price-without-tax]').length > 0) ? '[data-product-price-without-tax]' : '[data-product-price-with-tax]';

				var original_price =  $(_productPrice).html();
				var _sign = original_price.charAt(0);
				original_price = parseFloat(original_price.substring(1).replace(/[^0-9.-]+/g,"")); 
				
				var _qty, _discount, _ggprice, _bulkFlag = 0;
				
				$('[data-bulkprice-change]').each(function(){
					if($('[data-product-price-bulk]').length <= 0 ){
						$('<span data-product-price-bulk class="price price--withoutTax"></span>').insertAfter(_productPrice);
					}
				
					_qty = parseFloat($(this).find('[name="bulk-min-qty"]').val());
					if($(this).find('[name="bulk-type"]').val() == 'percent'){
						_discount = $(this).find('[name="bulk-discount"]').val();
						_ggprice = (parseFloat(original_price)  * ((100 - _discount)/ 100)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
					}else if($(this).find('[name="bulk-type"]').val() == 'fixed'){
						_discount = ((1 - ($(this).find('[name="bulk-discount"]').val() / parseFloat(original_price))) * 100).toFixed(0);
						_ggprice = parseFloat($(this).find('[name="bulk-discount"]').val()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
					}else if($(this).find('[name="bulk-type"]').val() == 'price'){
						// do nothing
					}
			
					if (qty >= _qty){
						_bulkFlag  = 1;
						$('[data-product-price-bulk]').html(_sign + _ggprice);
						$('[data-product-price-bulk]').show();
						$(_productPrice).hide();
					}
				});		
				if(_bulkFlag == 0 ){
					$(_productPrice).show();
					$('[data-product-price-bulk]').hide();
				}
				
			}
		}	
}			
