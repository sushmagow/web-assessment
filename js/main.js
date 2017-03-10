/*global require */
(function (window) {
	require(['../js/requireConfig'], function () {
		require([
			'jquery',
			'ractive',
			'widget',
			'ajax'
		], function ($, Ractive, widget, ajax) {

			var processWidget = function () {
				var template = ajax.ajaxCall({
						url: '../../hbs/main.hbs',
						async: false
					}),
					data = ajax.ajaxCall({
						url: '../../mocks/productDetails.json',
						async: false
					});

				widget.init({
					template: template,
					data: data,
					el :'#container'
				});
			}
			
			$(function () {
				processWidget();
			});
		});
	});

})(window);
