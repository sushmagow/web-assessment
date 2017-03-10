define([ 
	'jquery', 
	'ractive',
	'ajax'
	], 

	function ( $, Ractive, ajax) {
		return {
			init: function (param) {
				var ractive = new Ractive({
					template: param.template,
					el: param.el,
					data: param.data,
					partials: {
						productInfo: ajax.ajaxCall({
										url: '../../hbs/partials/productInfo.hbs',
										async: false
									})
					},
					complete:  function () {
						var productList = this.get('productList');
						var shortDescription = function (brand, description) {
							var desp = brand + description;
								desp = desp.substring(0, 40);
								desp = desp + '...';
							return desp;
						};
						this.set('shortDescription', shortDescription);
						this.set('productDetails', productList[0]);
					},
					onClick: function (i) {
						var productList = this.get('productList');
						this.set('productDetails', productList[i]);
						window.scrollTo(0,0);
					},
					onMouseOver: function (i) {
						console.log('mouse over event');
						/*var productList = this.get('productList');
						this.set('productDetails', productList[i]);
						this.set('nthElement', i);*/
					},
					addToCart: function () {
						var productDetails = this.get('productDetails'),
					 		price = productDetails.networkPrice;
					 	alert('Price of the item '+ price);
					 	console.log('Price of the item', price);
					}
				});
			}
		};
	});
