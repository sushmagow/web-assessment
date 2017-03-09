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
						this.set('productDetails', productList[0]);
						this.set('nthElement', 0);
					},
					onClick: function (i) {
						var productList = this.get('productList');
						this.set('productDetails', productList[i]);
						this.set('nthElement', i);
						window.scrollTo(0,0);
					},
					onMouseOver: function (i) {
						console.log('mouse over event');
						/*var productList = this.get('productList');
						this.set('productDetails', productList[i]);
						this.set('nthElement', i);*/
					},
					computed: {
						shortDescription: function(brand, description) {
							return 'desp';
						}
					}
					
				});

				ractive.on('addToCart', function (event) {
					alert('add To Cart', ractive.get('nthElement'));
				});
			}
		};


	});